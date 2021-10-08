import Scrollbar from './scrollbar/index';
import Dropdown from './dropdown/index';

interface IMisMis {
   dropdown: any,
   scrollbar: any
}

const MisMis: IMisMis = {
   dropdown: Dropdown,
   scrollbar: Scrollbar
};

(window as any)['MisMis'] = MisMis;