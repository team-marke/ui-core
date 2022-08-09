import 'regenerator-runtime/runtime.js';
import '../scss/main.scss';

const loadTabs = async () => {
  if (document.querySelector('button[data-bs-toggle="tab"]')) {
    await import("bootstrap/js/dist/tab")
  }
};

loadTabs();
