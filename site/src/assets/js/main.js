import 'regenerator-runtime/runtime.js';
import '../scss/main.scss';

/**
 * Load off canvas menu component.
 */
const loadOffcanvasMenu = () => {
  if (document.querySelector('.offcanvas-menu')) {
    import(/* webpackChunkName: "components.offcanvas-menu" */ '../../../../components/offcanvas-menu/offcanvas-menu').then(
      ({ OffcanvasMenu }) => {
        document.querySelectorAll('.offcanvas-menu').forEach((el) => {
          new OffcanvasMenu(el);
        });
      }
    );
  }
};

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
 * Load action bars component.
 */
const loadActionBars = () => {
  if (document.querySelector('.actionbar')) {
    import(/* webpackChunkName: "components.action-bar" */ '../../../../components/action-bar/action-bar').then(
      ({ ActionBar }) => {
        document.querySelectorAll('.actionbar').forEach((el) => {
          new ActionBar(el);
        });
      }
    );
  }
};

/**
 * Load galleries components.
 */
const loadGalleries = () => {
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
 * Load Masthead Slider.
 */
const loadMastheadSlider = () => {
  if (document.querySelector('.masthead-slider')) {
    import(/* webpackChunkName: "components.masthead-slider" */ '../../../../components/masthead-slider/masthead-slider').then(
      ({ MastheadSlider }) => {
        document.querySelectorAll('.masthead-slider').forEach((mastheadSlider) => {
          new MastheadSlider(mastheadSlider);
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
  loadActionBars();
  loadGalleries();
  loadOffcanvasMenu();
  loadMastheadSlider();
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
