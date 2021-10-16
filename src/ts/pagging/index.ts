import PaggingConfig from '../declartion/pagging-config';
import Mustache from 'mustache';
import Framework from '../framework/index';
import pagging from './templates/pagging.html';
import body from './templates/body.html';
import '../../scss/pagging.scss';
import tinyArrow from '../../asset/image/tiny-arrow.svg';
import tinyDoubleArrow from '../../asset/image/tiny-double-arrow.svg';

class Pagging {
     uniqId: string;
     element: HTMLElement;
     count: number;
     size: number;
     rtl: boolean;
     componentElement: HTMLElement;
     currentPage: number;
     countPageShow: number;
     hidePrevNext: boolean;
     hideFirstLast: boolean;
     hideExtend: boolean;
     onChange: (page: number) => void;

     constructor(config: PaggingConfig) {
          this.uniqId = Framework.createUUID();
          this.element = config.element;
          this.count = config.count;
          this.size = config.size;
          this.rtl = config.rtl;
          this.currentPage = config.defaultPage || 1;
          this.countPageShow = config.countPageShow || 3;
          this.hidePrevNext = config.hidePrevNext;
          this.hideFirstLast = config.hideFirstLast;
          this.hideExtend = config.hideExtend;
          this.onChange = config.onChange;
     }

     createComponent() {
          const html = Mustache.render(pagging, {
               uniqId: this.uniqId,
               pages: Array.from(Array(Math.ceil(this.count / this.size)).keys()).map(x => ({ id: x + 1, selected: (x + 1) == this.currentPage })),
               rtl: this.rtl,
               tinyArrowIconUrl: tinyArrow,
               tinyDoubleArrowIconUrl: tinyDoubleArrow,
               hideFirstLast: this.hideFirstLast,
               hidePrevNext: this.hidePrevNext
          });
          this.componentElement = Framework.htmlToElement(html);
          this.element.insertAdjacentElement('afterend', this.componentElement);
          this.getBody();
          this.element.remove();
     }

     getBody() {
          let pages = [];
          const showPages = Math.floor((this.countPageShow - 1) / 2);

          if (!this.hideExtend && this.currentPage > 2) {
               pages.push({
                    selected: false,
                    extend: true
               });
          }

          for (let i = Math.max(this.currentPage - showPages, 1); i <= Math.min(this.currentPage + showPages, Math.ceil(this.count / this.size)); i++) {
               pages.push({
                    id: i,
                    selected: i == this.currentPage
               })
          }

          if (!this.hideExtend && this.currentPage < Math.ceil(this.count / this.size) - 1) {
               pages.push({
                    selected: false,
                    extend: true
               });
          }

          const html = Mustache.render(body, {
               pages: pages
          });
          const element = this.componentElement.querySelector('.body');
          element.insertAdjacentHTML('afterend', html);
          element.remove();
     }

     selectPage(selectedPage: number) {
          this.currentPage = selectedPage;
          this.getBody();
          this.onChange && this.onChange(selectedPage);
     }

     bindEvents() {
          const self = this;

          Framework.addEventForChild(this.componentElement.querySelector('.pages'), 'click', '.body .page', (e: Event) => {
               const selectedPage = Number((e.target as HTMLElement).getAttribute('data-page-id'));
               self.selectPage(selectedPage);
          });

          this.componentElement.querySelectorAll('.page.default').forEach(el => el.addEventListener('click', (e: Event) => {
               const page = (e.currentTarget as HTMLElement);
               const action = page.getAttribute('data-action');
               switch (action) {
                    case 'first':
                         self.selectPage(1);
                         break;
                    case 'back':
                         if (self.currentPage > 1) {
                              self.selectPage(self.currentPage - 1);
                         }
                         break;
                    case 'next':
                         if (self.currentPage < Math.ceil(self.count / self.size)) {
                              self.selectPage(self.currentPage + 1);
                         }
                         break;
                    case 'last':
                         self.selectPage(Math.ceil(self.count / self.size));
                         break;
               }

          }));
     }

     static Initializer(config: PaggingConfig) {
          const pagging = new Pagging(config);
          pagging.createComponent();
          pagging.bindEvents();
          return pagging;
     }
}

export default Pagging.Initializer;