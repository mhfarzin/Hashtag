import DataGridConfig from '../declartion/data-grid-config';
import DataGridColumn from '../declartion/data-grid-column';
import DataGridSort from '../declartion/data-grid-sort';
import SortDirection from '../declartion/sort-direction';
import Mustache from 'mustache';
import Framework from '../framework/index';
import dataGrid from './templates/datagrid.html';
import header from './templates/header.html';
import body from './templates/body.html';
import footer from './templates/footer.html';
import arrow from '../../asset/image/arrow.svg';
import filter from '../../asset/image/filter.svg';
import Pagging from './../pagging/index';
import DropDown from './../dropdown/index';
import '../../scss/data-grid.scss';
import DropdownData from '../declartion/dropdown-data';
import columnResize from './resize';
import Scrollbar from './../scrollbar/index';

class DataGrid {
   uniqId: string;
   element: HTMLElement;
   columns: DataGridColumn[];
   data: any[];
   page: number;
   size: number;
   rtl: boolean;
   selectedRowId: string;
   componentElement: HTMLElement;
   sort: DataGridSort;

   constructor(config: DataGridConfig) {
      this.uniqId = Framework.createUUID();
      this.element = config.element;
      this.columns = config.columns;
      this.data = Framework.addUUID(config.data);
      this.page = 1;
      this.size = config.size || 10;
      this.rtl = config.rtl;
      this.selectedRowId = null;
   }

   createComponent() {
      const html = Mustache.render(dataGrid, {
         uniqId: this.uniqId,
         rtl: this.rtl,
         columns: Framework.addIndex(this.columns),
         rows: this.getRows(),
         arrowIconUrl: arrow,
         filterIconUrl: filter,
      },
         {
            header,
            body,
            footer
         });
      this.componentElement = Framework.htmlToElement(html);
      this.element.insertAdjacentElement('afterend', this.componentElement);
      this.element.remove();
      this.createPaging();
      this.createDropDown();

      return Scrollbar({
         element: this.componentElement.querySelector('.hashtag.data-grid > .data-grid-content'),
         content: this.componentElement.querySelector('.hashtag.data-grid > .data-grid-content').innerHTML,
         scrollX: true,
         scrollY: false,
         rtl: this.rtl
      });
   }

   getRows() {
      const result = [];
      const sortedData = Framework.sortObjectArray(this.data, this.sort?.field, this.sort?.direction);

      for (let d of sortedData) {
         const row = {
            uuid: d.uuid,
            selected: d.uuid == this.selectedRowId,
            items: []
         };
         for (let c of this.columns) {
            row.items.push({

               value: d[c.field],
               width: c.width,

            });
         }
         result.push(row);
      }

      const start = (this.page - 1) * this.size;
      const end = start + this.size;
      return result.slice(start, end);
   }

   refreshBody() {
      const element = this.componentElement.querySelector('.rows') as HTMLElement;
      const html = Mustache.render(body, {
         rows: this.getRows(),
      });
      element.insertAdjacentHTML('afterend', html);
      element.remove();
   }

   createPaging() {
      Pagging({
         element: this.componentElement.querySelector('.footer > .pagging > div'),
         count: this.data.length,
         size: this.size,
         rtl: this.rtl,
         onChange: (page: number) => {
            this.page = page;
            this.refreshBody();
         }
      });
   }

   createDropDown() {
      DropDown({
         element: this.componentElement.querySelector('.footer > .page-size > div'),
         data: [
            { id: '10', title: '10' },
            { id: '25', title: '25' },
            { id: '50', title: '50' },
            { id: '100', title: '100' }
         ],
         defaultValueId: '10',
         rtl: this.rtl,
         onSelect: (row: DropdownData) => {
            this.size = Number(row.id);
            this.createPaging();
            this.refreshBody();
         }
      });
   }

   bindEvents() {
      const self = this;

      self.componentElement.querySelectorAll('.arrow-icons').forEach(arrowIcon =>
         arrowIcon.addEventListener('click', (e) => {
            const column = Framework.eventChildOf(e, '.column');
            const columnId = column.getAttribute('data-filed');

            if (self.sort?.field == columnId) {
               if (self.sort.direction == SortDirection.unset) {
                  self.sort.direction = SortDirection.up;
               } else if (self.sort.direction == SortDirection.up) {
                  self.sort.direction = SortDirection.down;
               } else {
                  self.sort.direction = SortDirection.unset;
               }
            } else {
               self.sort = {
                  field: columnId,
                  direction: SortDirection.up
               }
            }

            for (let c of self.columns) {
               const element = self.componentElement.querySelector('.column[data-filed="' + c.field + '"] .arrow-icons');
               element.classList.remove('sort-up');
               element.classList.remove('sort-down');
            }

            if (self.sort.direction != SortDirection.unset) {
               const element = self.componentElement.querySelector('.column[data-filed="' + self.sort.field + '"] .arrow-icons');
               if (self.sort.direction == SortDirection.up) {
                  element.classList.add('sort-up');
               } else if (self.sort.direction == SortDirection.down) {
                  element.classList.add('sort-down');
               }
            }

            self.refreshBody();
         }));

      self.componentElement.querySelectorAll('.column').forEach((col, i) => {
         const column = col as HTMLElement;
         const splite = column.querySelector('.splite') as HTMLElement;
         columnResize(column, splite, this.rtl, (width: string) => {
            self.columns[i].width = width;
            self.refreshBody();
         });
      });

      Framework.addEventForChild(self.componentElement, 'click', '.rows .row', (e: Event) => {
         const row = Framework.closest(e.target as HTMLElement, '.row');
         self.selectedRowId = row.getAttribute('data-row-id');
         self.refreshBody();
      });
   }

   static Initializer(config: DataGridConfig) {
      const dataGrid = new DataGrid(config);
      dataGrid.createComponent();
      dataGrid.bindEvents();
      return dataGrid;
   }
}

export default DataGrid.Initializer;
