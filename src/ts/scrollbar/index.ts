import ScrollbarConfig from '../declartion/scrollbar-config';
import Mustache from 'mustache';
import Framework from '../framework/index';
import scrollbar from './templates/scrollbar.html';
import Scroll from './scroll';
import '../../scss/scrollbar.scss';

class Scrollbar {
   uniqId: string;
   element: HTMLElement;
   content: string;
   height: string;
   rtl: boolean;
   componentElement: HTMLElement;

   constructor(config: ScrollbarConfig) {
      this.uniqId = Framework.createUUID();
      this.element = config.element;
      this.content = config.content;
      this.height = config.height;
      this.rtl = config.rtl;
   }

   createComponent() {
      const html = Mustache.render(scrollbar, {
         uniqId: this.uniqId,
         content: this.content,
         rtl: this.rtl
      });
      this.componentElement = Framework.htmlToElement(html);
      this.element.insertAdjacentElement('afterend', this.componentElement);
      this.element.remove();
   }

   static Initializer(config: ScrollbarConfig) {
      const scrollbar = new Scrollbar(config);
      scrollbar.createComponent();
      new Scroll(scrollbar.componentElement.querySelector('.scrollX, .scrollY'), scrollbar.rtl);
      return scrollbar.componentElement.outerHTML;
   }
}

export default Scrollbar.Initializer;