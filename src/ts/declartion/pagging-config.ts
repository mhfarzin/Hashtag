export default interface PaggingConfig {
   element: HTMLElement,
   count: number,
   size: number,
   rtl?: boolean,
   defaultPage?: number,
   countPageShow?: number,
   hideFirstLast?: boolean
   hidePrevNext?: boolean,
   hideExtend?: boolean,
   onChange?: (page: number) => void,
}