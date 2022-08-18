import 'regenerator-runtime/runtime.js';
import '../scss/main.scss';
import '../js/fontawesome';

const loadCollapse = async () => {
  if (document.querySelector('.collapse')) {
    await import('bootstrap/js/dist/collapse');
  }
};

const loadTab = async () => {
  if (document.querySelector('button[data-bs-toggle="tab"]')) {
    await import('bootstrap/js/dist/tab');
  }
};

const loadModal = async () => {
  if (document.querySelector('.modal')) {
    await import('bootstrap/js/dist/modal');
  }
};

loadCollapse();
loadTab();
loadModal();
