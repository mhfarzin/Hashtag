export default function columnResize(column: HTMLElement, splite: HTMLElement, rtl: boolean, callback: (width: string) => void) {
     const resize = (e: MouseEvent) => {
          const change = rtl ? splite.getBoundingClientRect().left - e.pageX : e.pageX - splite.getBoundingClientRect().right;
          column.style.width = (column.offsetWidth + change) + 'px';
          callback(column.style.width);
     };

     const stop = (e: MouseEvent) => {
          window.removeEventListener('mousemove', resize);
          column.dispatchEvent(new Event('resize', { bubbles: true }));
     };

     splite.addEventListener('mousedown', (e: MouseEvent) => {
          e.preventDefault();
          window.addEventListener('mousemove', resize);
          window.addEventListener('mouseup', stop);
     })
}
