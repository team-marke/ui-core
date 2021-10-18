import 'regenerator-runtime/runtime.js';
import '../scss/main.scss';
import '../../../../components/accordion/accordion';
import '../../../../components/tabs/tabs';
import { ToastStack } from '../../../../components/toast-stack/toast-stack';

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
    import(/* webpackChunkName: "components.carousel" */ '../../../../components/carousel/carousel').then(({ Carousel }) => {
      document.querySelectorAll('.carousel').forEach((carousel) => {
        new Carousel(carousel);
      });
    });
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

/**
 * Load input components.
 */
const loadInputs = async () => {
  if (document.querySelector('.text-field')) {
    const { TextField } = await import(
      /* webpackChunkName: "components.text-field" */ '../../../../components/text-field/text-field'
    );
    document.querySelectorAll('.text-field').forEach((textField) => {
      new TextField(textField);
    });
  }
  if (document.querySelector('.select')) {
    const { Select } = await import(/* webpackChunkName: "components.select" */ '../../../../components/select/select');
    document.querySelectorAll('.select').forEach((select) => {
      new Select(select);
    });
  }
  if (document.querySelector('.checkbox')) {
    const { Checkbox } = await import(
      /* webpackChunkName: "components.checkbox" */ '../../../../components/checkbox/checkbox'
    );
    document.querySelectorAll('.checkbox').forEach((checkbox) => {
      new Checkbox(checkbox);
    });
  }
  if (document.querySelector('.radio')) {
    const { Radio } = await import(/* webpackChunkName: "components.radio" */ '../../../../components/radio/radio');
    document.querySelectorAll('.radio').forEach((radio) => {
      new Radio(radio);
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
  loadToastStackExamples();
  loadInputs();
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
