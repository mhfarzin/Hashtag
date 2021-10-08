const Framework = {
   extend: (obj1: any, obj2: any) => {
      const result: any = { ...obj1 };

      for (let prop in obj2) {
         if (!result[prop]) {
            result[prop] = obj2[prop];
         }
      }

      return result;
   },
   createUUID: () => {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
         const r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
         return v.toString(16);
      });
   },
   htmlToElement: (html: string) => {
      const template = document.createElement('template');
      template.innerHTML = html.trim();
      return template.content.firstChild as HTMLElement;
   },
   closest: (target: HTMLElement, selector: string) => {
      while (target !== document.body) {
         target = target.parentElement;
         if (target.matches(selector)) return target;
      }
      return null;
   },
   eventChildOf: (e: Event, selector: string) => {
      if (!!selector) {
         const target: any = e.target;
         if (!target) {
            return null;
         }
         return Framework.closest(target, selector);
      }
      return null;
   },
   addEventForChild: (parent: HTMLElement | Document, eventName: string, childSelector: string, callback: (e: Event, element: HTMLElement) => void) => {
      parent.addEventListener(eventName, (e: Event) => {
         const target: any = e.target;
         if (!target) {
            return null;
         }
         const matchingChild = Framework.closest(target, childSelector)
         if (matchingChild) {
            callback(e, matchingChild)
         }
      })
   }
}

export default Framework;