import DataGridColumn from "./data-grid-column";

export default interface DataGridConfig {
   element: HTMLElement,
   columns: DataGridColumn[],
   data: any[],
   size?: number, 
   rtl?: boolean;
}