import 'regenerator-runtime/runtime.js';
import '../scss/main.scss';

const loadCollapse = async () => {
  if (document.querySelector('.collapse')) {
    await import('bootstrap/js/dist/collapse');
  }
};

const loadTabs = async () => {
  if (document.querySelector('button[data-bs-toggle="tab"]')) {
    await import('bootstrap/js/dist/tab');
  }
};

loadCollapse();
loadTabs();
