import DropdownData from "./dropdown-data";

export default interface ScrollbarConfig {
   element: HTMLElement,
   content: string,
   scrollX?: boolean,
   scrollY?: boolean,
   width?: string,
   height?: string,
   rtl?: boolean;
}