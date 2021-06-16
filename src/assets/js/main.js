import 'regenerator-runtime/runtime.js';
import '../scss/main.scss';

/**
 * Dynamically load modules that are split from the main JS bundle.
 */
const loadDynamicModules = () => {
};

/**
 * Load modules that are included in our main JS bundle.
 */
const loadBundledModules = () => {
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

window.onload = () => {
};
