import 'regenerator-runtime/runtime.js';
import '../scss/main.scss';

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
    const { Actionbar } = await import(/* webpackChunkName: "components.actionbar" */ '../../../../components/actionbar/actionbar');
    document.querySelectorAll('.actionbar').forEach((actionbar) => {
      new Actionbar(actionbar);
    });
  }
};

/**
 * Load Socialbar.
 */
const loadSocialbar = async () => {
  if (document.querySelector('.socialbar')) {
    const { Socialbar } = await import(/* webpackChunkName: "components.socialbar" */ '../../../../components/socialbar/socialbar');
    document.querySelectorAll('.socialbar').forEach((socialbar) => {
      new Socialbar(socialbar);
    });
  }
};

/**
 * Load Navbar.
 */
const loadNavbar = async () => {
  if (document.querySelector('.navbar')) {
    await import(/* webpackChunkName: "components.navbar" */ '../../../../components/navbar/navbar');
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
