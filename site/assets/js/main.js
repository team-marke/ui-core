import 'regenerator-runtime/runtime.js';
import '../scss/main.scss';

const loadCollapse = async () => {
  if (document.querySelector('.collapse')) {
    await import('bootstrap/js/dist/collapse');
  }
};

loadCollapse();
