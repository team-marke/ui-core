import 'regenerator-runtime/runtime.js';
import '../scss/main.scss';

/**
 * Load youtube modal component.
 */
const loadYoutubeModals = () => {
  if (document.querySelector('.video-teaser')) {
    import(/* webpackChunkName: "components.video-teaser" */ '../../../../components/video-teaser/video-teaser').then(
      ({ VideoTeaser }) => {
        document.querySelectorAll('.video-teaser').forEach((el) => {
          new VideoTeaser(el);
        });
      }
    );
  }
};

/**
 * Loads galleries components.
 */
const loadsGalleries = () => {
  if (document.querySelector('.photo-gallery')) {
    import(/* webpackChunkName: "components.photo-gallery" */ '../../../../components/photo-gallery/photo-gallery').then(
      ({ PhotoGallery }) => {
        document.querySelectorAll('.photo-gallery').forEach((el) => {
          new PhotoGallery(el);
        });
      }
    );
  }
};

/**
 * Dynamically load modules that are split from the main JS bundle.
 */
const loadDynamicModules = () => {
  loadYoutubeModals();
  loadsGalleries();
};

/**
 * Load modules that are included in our main JS bundle.
 */
const loadBundledModules = () => {};

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
