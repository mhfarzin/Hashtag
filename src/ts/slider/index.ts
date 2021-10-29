import SliderConfig from '../declartion/slider-config';
import Mustache from 'mustache';
import Framework from '../framework/index';
import slider from './templates/slider.html';
import '../../scss/slider.scss';

class Slider {
     uniqId: string;
     element: HTMLElement;
     rtl: boolean;
     componentElement: HTMLElement;

     constructor(config: SliderConfig) {
          this.uniqId = Framework.createUUID();
          this.element = config.element;
          this.rtl = config.rtl;
     }

     createComponent() {
          const html = Mustache.render(slider, {
               uniqId: this.uniqId,
               rtl: this.rtl,
          });
          this.componentElement = Framework.htmlToElement(html);
          this.element.insertAdjacentElement('afterend', this.componentElement);
          this.element.remove();
     }

    

     bindEvents() {
          const self = this;
     }

     static Initializer(config: SliderConfig) {
          const pagging = new Slider(config);
          pagging.createComponent();
          pagging.bindEvents();
          return pagging;
     }
}

export default Slider.Initializer;