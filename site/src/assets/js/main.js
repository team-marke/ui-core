import 'regenerator-runtime/runtime.js';
import '../scss/main.scss';
import '../../../../components/accordion/accordion';
import '../../../../components/tabs/tabs';

/**
 * Load youtube modal component.
 */
const loadYoutubeModals = () => {
    if (document.querySelector('.video-teaser')) {
        import ( /* webpackChunkName: "components.video-teaser" */ '../../../../components/video-teaser/video-teaser').then(
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
 * Load Carousel.
 */
 const loadCarousel = () => {
  if (document.querySelector('.carousel')) {
    import(/* webpackChunkName: "components.carousel" */ '../../../../components/carousel/carousel').then(
      ({ Carousel }) => {
        document.querySelectorAll('.carousel').forEach((carousel) => {
          new Carousel(carousel);
        });
      }
    );
  }
};

/**
 * Load Grid Responsive Slider.
 */
const loadGridResponsiveSlider = () => {
  if (document.querySelector('.grid-responsive-slider')) {
    import(/* webpackChunkName: "components.grid-responsive-slider" */ '../../../../components/grid-responsive-slider/grid-responsive-slider').then(
      ({ GridResponsiveSlider }) => {
        document.querySelectorAll('.grid-responsive-slider').forEach((gridResponsiveSlider) => {
          new GridResponsiveSlider(gridResponsiveSlider);
        });
      }
    );
  }
};

/**
 * Load Nav Bar.
 */
const loadNavBar = () => {
  if (document.querySelector('.navbar')) {
    import(/* webpackChunkName: "navbar" */ '../../../../components/navbar/navbar')
  }
};

/**
 * Dynamically load modules that are split from the main JS bundle.
 */
const loadDynamicModules = () => {
  loadMastheadSlider();
  loadCarousel();
};

/**
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