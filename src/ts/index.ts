import Scrollbar from './scrollbar/index';

interface IMisMis {
   scrollbar: any
}

const MisMis: IMisMis = {
   scrollbar: Scrollbar
};

(window as any)['MisMis'] = MisMis;