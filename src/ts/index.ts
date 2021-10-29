import Scrollbar from './scrollbar/index';
import Dropdown from './dropdown/index';
import DataGrid from './data-grid/index';
import Pagging from './pagging/index';
import Slider from './slider/index';

interface IHashtag {
   dropdown: any,
   scrollbar: any,
   pagging: any,
   dataGrid: any,
   slider: any
}

const Hashtag: IHashtag = {
   dropdown: Dropdown,
   scrollbar: Scrollbar,
   pagging: Pagging,
   dataGrid: DataGrid,
   slider: Slider
};

(window as any)['Hashtag'] = Hashtag;