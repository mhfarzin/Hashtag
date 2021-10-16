import Scrollbar from './scrollbar/index';
import Dropdown from './dropdown/index';
import DataGrid from './data-grid/index';
import Pagging from './pagging/index';

interface IMisMis {
   dropdown: any,
   scrollbar: any,
   pagging: any,
   dataGrid: any
}

const MisMis: IMisMis = {
   dropdown: Dropdown,
   scrollbar: Scrollbar,
   pagging: Pagging,
   dataGrid: DataGrid
};

(window as any)['MisMis'] = MisMis;