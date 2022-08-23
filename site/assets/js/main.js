import 'regenerator-runtime/runtime.js';
import '../scss/main.scss';
import '../js/fontawesome';

const loadCollapse = async () => {
  if (document.querySelector('.collapse')) {
    await import('bootstrap/js/dist/collapse');
  }
};

const loadDropdown = async () => {
  if (document.querySelector('.dropdown')) {
    await import('bootstrap/js/dist/dropdown');
  }
};

const loadTab = async () => {
  if (document.querySelector('button[data-bs-toggle="tab"]')) {
    await import('bootstrap/js/dist/tab');
  }
};

const loadModal = async () => {
  if (document.querySelector('.modal')) {
    await import('bootstrap/js/dist/modal');
  }
};

const loadMastheadSlider = async () => {
  if (document.querySelector('.masthead-slider')) {
    await import('../../../src/components/MastheadSlider/MastheadSlider');
  }
}

const loadCarousel = async () => {
  if (document.querySelector('.carousel')) {
    await import('../../../src/components/Carousel/Carousel');
  }
};

loadCollapse();
loadTab();
loadModal();
loadDropdown();
loadMastheadSlider();
loadCarousel();
