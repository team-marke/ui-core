import 'regenerator-runtime/runtime.js';
import '../scss/main.scss';

/**
 * Load youtube modal component.
 */
 const loadYoutubeModals = () => {
  if (document.querySelector('.youtube-modal-toggler')) {
    import(/* webpackChunkName: "components.youtube-modal" */ '../../../../js/components/youtube-modal').then(({ YoutubeModal }) => {
      document.querySelectorAll('.youtube-modal-toggler').forEach((toggler) => {
        let modal = document.querySelector(toggler.dataset.target);
        new YoutubeModal({
          modal: modal,
          toggler: toggler,
        });
      });
    });
  }
};

/**
 * Dynamically load modules that are split from the main JS bundle.
 */
const loadDynamicModules = () => {
  loadYoutubeModals();
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
