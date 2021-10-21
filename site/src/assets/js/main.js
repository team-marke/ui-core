import 'regenerator-runtime/runtime.js';
import '../scss/main.scss';
import MarkeUI, { Navbar, ToastStack } from '../../../../index.esm';

/**
 * Load and handle toast-stack examples.
 */
const loadToastStackExamples = async () => {
  let examples = document.querySelectorAll('.toast-stack-example');
  for (let example of examples) {
    let stack = new ToastStack({
      anchor: {
        vertical: example.dataset.toastStackAnchorV,
        horizontal: example.dataset.toastStackAnchorH,
      },
    });
    let btns = example.querySelectorAll('.toast-stack-example-button');
    for (let btn of btns) {
      btn.addEventListener('click', (event) => {
        let action = '';
        if (event.target.dataset.toastClosebutton != 'false') {
          action = `<button type="button" class="btn-close btn-close-white" aria-label="Close" data-bs-dismiss="toast"></button>`;
        }
        stack.enqueueToast({
          message: event.target.dataset.toastMessage,
          variant: event.target.dataset.toastVariant,
          autoHideDuration: event.target.dataset.toastAutoHideDuration,
          id: event.target.dataset.toastId,
          action: action,
        });
      });
    }
  }
};

const initMarkeUi = () => {
  MarkeUI.use([Navbar]);
  let ui = new MarkeUI();
  ui.loadDynamically(['carousel']);
};

/**
 * Dynamically load modules that are split from the main JS bundle.
 */
const loadDynamicModules = () => {
  loadToastStackExamples();
};

/**
 */
const loadBundledModules = () => {
  initMarkeUi();
};

/**
 * Bootstrap all the JS modules here.
 */

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    loadDynamicModules();
    loadBundledModules();
  });
} else {
  loadDynamicModules();
  loadBundledModules();
}

window.onload = () => {};
