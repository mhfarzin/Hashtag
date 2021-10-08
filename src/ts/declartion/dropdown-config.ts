import DropdownData from "./dropdown-data";

export default interface DropdownConfig {
   element: HTMLElement,
   data: DropdownData[],
   defaultValueId?: string,
   placeHolder?: string,
   search?: boolean,
   rtl?: boolean,
   onSelect?: (row: object) => void
   rowRender?: () => string,
}