import DropdownConfig from '../declartion/dropdown-config';
import Mustache from 'mustache';
import dropdown from './templates/dropdown.html';
import header from './templates/header.html';
import search from './templates/search.html';
import row from './templates/row.html';
import items from './templates/items.html';
import arrow from '../../asset/image/arrow.svg';
import clear from '../../asset/image/clear.svg';
import Framework from '../framework/index';
import DropdownData from '../declartion/dropdown-data';
import PopupState from '../declartion/popup-state';
import Scrollbar from './../scrollbar/index';
import '../../scss/dropdown.scss';

class DropDown {
   uniqId: string;
   element: HTMLElement;
   componentElement: HTMLElement;
   data: DropdownData[];
   defaultValueId: string;
   placeHolder: string;
   rtl: boolean;
   search: boolean;
   popupState: PopupState;
   selectedItem: DropdownData;
   filter: string;
   onSelect: (row: DropdownData) => void;
   rowRender: () => string;

   constructor(config: DropdownConfig) {
      this.uniqId = Framework.createUUID();
      this.element = config.element;
      this.data = config.data;
      this.defaultValueId = config.defaultValueId;
      this.placeHolder = config.placeHolder;
      this.rtl = config.rtl;
      this.search = config.search;
      this.popupState = PopupState.Close;
      this.selectItem = this.selectItem.bind(this);
      this.selectItem = this.selectItem.bind(this);
      this.onSelect = config.onSelect;
      this.rowRender = config.rowRender;
   }

   insideQuerySelect = (query: string) => this.componentElement.querySelector(query);

   validate() {
      if (!this.element) {
         console.log("Element is empty");
         return false;
      }

      if (!this.data) {
         console.log("Data is empty");
         return false;
      }

      return true;
   }

   createComponent() {
      const html = Mustache.render(dropdown, {
         uniqId: this.uniqId,
         placeHolder: this.placeHolder,
         rtl: this.rtl,
         search: this.search,
         arrowIconUrl: arrow,
         clearIconUrl: clear
      }, {
         header: header,
         search: search
      });
      this.componentElement = Framework.htmlToElement(html);
      this.getBody();
      this.element.insertAdjacentElement('afterend', this.componentElement);
      this.element.remove();
   }

   getBody() {
      const data = this.data.filter(x => !this.filter || x.title.toLowerCase().includes(this.filter.toLowerCase()));
      const htmlItems = Mustache.render(items, {
         items: data
      }, {
         row: this.rowRender ? this.rowRender() : row
      });

      return Scrollbar({
         element: this.componentElement.querySelector('.body > div:not(.search-container)'),
         content: htmlItems,
         scrollX: false,
         scrollY: true,
         height: '200px',
         rtl: this.rtl
      });
   }

   bindEvents() {
      const self = this;

      this.componentElement.querySelector('.arrow-down').addEventListener('click', (e) => {
         self.popup(this.popupState != PopupState.Open);
      });

      this.componentElement.querySelectorAll('.items .row').forEach(row => {
         row.addEventListener('click', (e: Event) => {
            self.selectItem((e.currentTarget as HTMLElement).getAttribute('data-row-id'));
            self.popup(false);
         });
      });

      document.addEventListener('click', (e: Event) => {
         if (self.popupState != PopupState.Open) {
            return;
         }

         if (!Framework.eventChildOf(e, `[data-uniq-id='${this.uniqId}']`)) {
            self.popup(false);
         }
      });

      if (this.search) {
         this.componentElement.querySelector('.search').addEventListener('input', (e: Event) => {
            self.filter = (e.currentTarget as HTMLInputElement).value;
            self.getBody();
         });

         this.componentElement.querySelector('.search-container .clear').addEventListener('click', (e: Event) => {
            const search = this.componentElement.querySelector('.search') as HTMLInputElement;
            self.filter = search.value = null;
            search.dispatchEvent(new Event('input'));
         });

      }
   }

   popup(show: boolean) {
      if (show) {
         this.componentElement.classList.add('open');
         this.popupState = PopupState.Open;
      } else {
         this.componentElement.classList.remove('open');
         this.popupState = PopupState.Close;
      }
      this.componentElement.querySelector('.body .items').dispatchEvent(new Event('resize', { bubbles: true }))
   }

   selectItem(id: string) {
      this.selectedItem = this.data.filter(x => x.id == id)[0];
      if (!!this.selectedItem) {
         this.componentElement.querySelector('.header .value').innerHTML = this.selectedItem.title;
         this.componentElement.querySelectorAll('.body .items .row').forEach(x => x.classList.remove('selected'));
         this.componentElement.querySelector('.body .items .row[data-row-id="' + id + '"]').classList.add('selected');
      }
      this.onSelect && this.onSelect(this.selectedItem);
   }

   static Initializer(config: DropdownConfig) {
      const dropDown = new DropDown(config);
      if (!dropDown.validate()) {
         return;
      }
      dropDown.createComponent();
      dropDown.selectItem(config.defaultValueId);
      dropDown.bindEvents();
      return dropDown;
   }
}

export default DropDown.Initializer;