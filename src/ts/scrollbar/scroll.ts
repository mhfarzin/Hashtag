import Framework from "../framework/index";

export default class Scroll {
   el: HTMLElement;
   viewport: HTMLElement;
   content: HTMLElement;
   rtl: boolean;
   scrollbarSize = 0;
   scrollbarTpl = '<div><div class="thumb"></div></div>';
   scrollbar = {
      x: null,
      y: null
   };
   thumb = {
      x: null,
      y: null
   }
   lastScroll = {
      top: -1,
      left: -1
   };

   constructor(el: HTMLElement, rtl: boolean) {
      this.el = el;
      this.rtl = rtl;
      this.viewport = el.querySelector(':scope > .viewport');
      this.content = this.viewport.querySelector(':scope > .content');
      this.getScrollbarSize();
      this.init();
   }


   update() {
      const self = this;

      const scroll = {
         top: this.viewport.scrollTop,
         left: this.viewport.scrollLeft
      };

      const perform = function (vertical: boolean) {
         var vocab = self.vocabulary(vertical);
         var scrollSize = self.content['scroll' + vocab.sizeUpper];
         var viewportSize = self.viewport ? self.viewport[vocab.size] : null;
         if (scrollSize <= viewportSize) {
            if (self.scrollbar[vocab.axis]) {
               self.scrollbar[vocab.axis].classList.add('disabled');
            }
            return;
         }
         else {
            if (self.scrollbar[vocab.axis]) {
               self.scrollbar[vocab.axis].classList.remove('disabled');
            }
         }

         if (scroll[vocab.pos] !== self.lastScroll[vocab.pos]) {
            self.lastScroll[vocab.pos] = scroll[vocab.pos];
            const elSize = self.el[vocab.size];

            const maxScrollSize = scrollSize - elSize;
            const ratio = elSize / scrollSize;
            const scrollRelative = scroll[vocab.pos] / maxScrollSize;
            const thumbSize = ((ratio > 1) ? 1 : ratio) * elSize;
            const scrollbarSize = self.scrollbar[vocab.axis][vocab.size];

            if (self.thumb[vocab.axis]) {
               self.thumb[vocab.axis].style[vocab.setSize] = thumbSize + 'px';
               self.thumb[vocab.axis].style[vocab.pos] = (scrollRelative * (scrollbarSize - thumbSize)) + 'px';
            }
         }
      }
      perform(true);
      perform(false);
   }

   vocabulary(vertical: boolean) {
      return {
         axis: vertical ? 'y' : 'x',
         axisUpper: vertical ? 'Y' : 'X',
         pos: vertical ? 'top' : 'left',
         posUpper: vertical ? 'Top' : 'Left',
         size: vertical ? 'offsetHeight' : 'offsetWidth',
         setSize: vertical ? 'height' : 'width',
         sizeUpper: vertical ? 'Height' : 'Width'
      };
   }

   setupEvents() {
      const self = this;

      this.viewport.addEventListener('scroll', (e: Event) => {
         self.update();
      });
      this.viewport.addEventListener('resize', (e: Event) => {
         self.update();
      });
      this.el.addEventListener('mouseover', (e: Event) => {
         self.update();
      });

      var setupOrientation = function (vertical: boolean) {
         const vocab = self.vocabulary(vertical);
         self.scrollbar[vocab.axis]?.click((e: Event) => {
            if (Framework.eventChildOf(e, self.scrollbar[vocab.axis])) {
               let move = self.viewport[vocab.size]();
               if (parseFloat(self.thumb[vocab.axis].css(vocab.pos)) >
                  (e['page' + vocab.axisUpper] - self.scrollbar[vocab.axis].offset()[vocab.pos])) {
                  move *= -1;
               }
               self.viewport['scroll' + vocab.posUpper](self.viewport['scroll' + vocab.posUpper]() + move);
               self.update();
            }
         });
         self.thumb[vocab.axis]?.addEventListener('mousedown', (e: Event) => {
            const body = document.body;
            const origUnselectable = body.getAttribute('unselectable');
            body.setAttribute('unselectable', 'on');
            let last = e['page' + vocab.axisUpper];
            self.scrollbar[vocab.axis].classList.add('dragScrolling');
            const mouseMoveHandler = (e: Event) => {
               const elSize = self.el[vocab.size];
               const scrollSize = self.content['scroll' + vocab.sizeUpper];
               const ratio = elSize / scrollSize;
               const move = (e['page' + vocab.axisUpper] - last) / ratio;
               self.viewport['scroll' + vocab.posUpper] = self.viewport['scroll' + vocab.posUpper] + move;
               last = e['page' + vocab.axisUpper];
               self.update();
               e.preventDefault();
            };
            document.addEventListener('mousemove', mouseMoveHandler);
            document.addEventListener('mouseup', (e: Event) => {
               document.removeEventListener('mousemove', mouseMoveHandler);
               body.setAttribute('unselectable', origUnselectable || 'off');
               self.scrollbar[vocab.axis].classList.remove('dragScrolling');
            }, { once: true });
         });
      }

      setupOrientation(true);
      setupOrientation(false);
   }

   getScrollbarSize() {
      const container = Framework.htmlToElement('<div><div></div></div>');
      document.body.append(container);
      container.style.overflow = 'scroll';
      container.style.height = '100px';
      container.style.width = '100px';

      const scroll: HTMLElement = container.querySelector(':scope > div');
      scroll.style.height = '100%';
      scroll.style.width = '100%';

      this.scrollbarSize = container.offsetWidth - scroll.offsetWidth;
      container.remove();
   }

   init() {
      if (this.el.classList.contains('scrollX')) {
         this.viewport.style.paddingTop = this.scrollbarSize + 'px';
         this.viewport.style.paddingBottom = (-this.scrollbarSize) + 'px';
         this.content.style.marginBottom = (-this.scrollbarSize) + 'px';
         const scrollbarTplElement = Framework.htmlToElement(this.scrollbarTpl);
         scrollbarTplElement.classList.add('scrollbarX');
         this.el.insertAdjacentElement('beforebegin', scrollbarTplElement);
      }
      if (this.el.classList.contains('scrollY')) {
         this.viewport.style[this.rtl ? 'paddingLeft' : 'paddingRight'] = this.scrollbarSize + 'px';
         this.viewport.style[this.rtl ? 'marginLeft' : 'marginRight'] = (-this.scrollbarSize) + 'px';
         this.content.style[this.rtl ? 'marginLeft' : 'marginRight'] = (-this.scrollbarSize) + 'px';
         var scrollbarTplElement = Framework.htmlToElement(this.scrollbarTpl);
         scrollbarTplElement.classList.add('scrollbarY');
         this.el.insertAdjacentElement('afterbegin', scrollbarTplElement)
      }
      this.scrollbar.x = this.el.querySelector(':scope > .scrollbarX');
      this.scrollbar.y = this.el.querySelector(':scope > .scrollbarY');
      this.thumb.x = this.scrollbar.x?.querySelector(':scope > .thumb');
      this.thumb.y = this.scrollbar.y?.querySelector(':scope > .thumb');

      this.setupEvents();

      this.el.classList.add('initialized');
      this.update();
   }
}