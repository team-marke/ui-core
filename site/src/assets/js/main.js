import 'regenerator-runtime/runtime.js';
import '../scss/main.scss';
import '../../../../components/accordion/accordion';
import '../../../../components/tabs/tabs';

/**
 * Load youtube modal component.
 */
 const loadYoutubeModals = async () => {
  if (document.querySelector('.video-teaser')) {
    const { VideoTeaser } = await import(
      /* webpackChunkName: "components.video-teaser" */ '../../../../components/video-teaser/video-teaser'
    );
    document.querySelectorAll('.video-teaser').forEach((el) => {
      new VideoTeaser(el);
    });
  }
};

/**
 * Load galleries components.
 */
const loadGalleries = async () => {
  if (document.querySelector('.photo-gallery')) {
    const { PhotoGallery } = await import(
      /* webpackChunkName: "components.photo-gallery" */ '../../../../components/photo-gallery/photo-gallery'
    );
    document.querySelectorAll('.photo-gallery').forEach((el) => {
      new PhotoGallery(el);
    });
  }
};

/**
 * Load Masthead Slider.
 */
const loadMastheadSlider = async () => {
  if (document.querySelector('.masthead-slider')) {
    const { MastheadSlider } = await import(
      /* webpackChunkName: "components.masthead-slider" */ '../../../../components/masthead-slider/masthead-slider'
    );
    document.querySelectorAll('.masthead-slider').forEach((mastheadSlider) => {
      new MastheadSlider(mastheadSlider);
    });
  }
};

/**
 * Load Grid Responsive Slider.
 */
const loadGridResponsiveSlider = async () => {
  if (document.querySelector('.grid-responsive-slider')) {
    const { GridResponsiveSlider } = await import(
      /* webpackChunkName: "components.grid-responsive-slider" */ '../../../../components/grid-responsive-slider/grid-responsive-slider'
    );
    document.querySelectorAll('.grid-responsive-slider').forEach((gridResponsiveSlider) => {
      new GridResponsiveSlider(gridResponsiveSlider);
    });
  }
};

/**
 * Load Actionbar.
 */
const loadActionbar = async () => {
  if (document.querySelector('.actionbar')) {
    const { Actionbar } = await import(
      /* webpackChunkName: "components.actionbar" */ '../../../../components/actionbar/actionbar'
    );
    document.querySelectorAll('.actionbar').forEach((actionbar) => {
      new Actionbar(actionbar);
    });
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
 * Load Socialbar.
 */
const loadSocialbar = async () => {
  if (document.querySelector('.socialbar')) {
    const { Socialbar } = await import(
      /* webpackChunkName: "components.socialbar" */ '../../../../components/socialbar/socialbar'
    );
    document.querySelectorAll('.socialbar').forEach((socialbar) => {
      new Socialbar(socialbar);
    });
  }
};

/**
 * Load Navbar components.
 */
const loadNavbar = async () => {
  if (document.querySelector('.navbar')) {
    const { Navbar } = await import(/* webpackChunkName: "components.navbar" */ '../../../../components/navbar/navbar');
    document.querySelectorAll('.navbar').forEach((navbar) => {
      new Navbar(navbar);
    });
  }
};

/**
 * Dynamically load modules that are split from the main JS bundle.
 */
const loadDynamicModules = () => {
  loadYoutubeModals();
  loadGalleries();
  loadMastheadSlider();
  loadGridResponsiveSlider();
  loadNavbar();
  loadActionbar();
  loadSocialbar();
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