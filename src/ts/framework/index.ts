import SortDirection from "../declartion/sort-direction";

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
      while (target != document.body) {
         if (target.matches(selector)) return target;
         target = target.parentElement;
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
   addEventForChild: (parent: Element | HTMLElement | Document, eventName: string, childSelector: string, callback: (e: Event, element: HTMLElement) => void) => {
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
   },
   sortObjectArray: <T>(array: T[], filed: string, direction: SortDirection) => {
      const result = [...array];
      if (result && result.length && filed && direction) {
         result.sort((a: T, b: T) => {
            if (a[filed] < b[filed]) {
               return direction == SortDirection.up ? -1 : 1;
            }
            if (a[filed] > b[filed]) {
               return direction == SortDirection.up ? 1 : -1;
            }
            return 0;
         })
      }
      return result;
   },
   addIndex: (data: object[]) => {
      return data.map((item, index) => ({ ...item, index }));
   },
   addUUID: (data: object[]) => {
      return data.map((item, index) => ({ ...item, uuid: Framework.createUUID() }));
   },
}

export default Framework;