import Offcanvas from 'bootstrap/js/src/offcanvas';

/**
 * Smooth scrolls from item in page
 *
 * @param {string} targetSelector
 * @param {int} offset
 */
const smoothScrollTo = (targetSelector, offset = 0) => {
  if (targetSelector.length) {
    window.scroll({
      behavior: 'smooth',
      left: 0,
      top: document.querySelector(targetSelector).getBoundingClientRect().top + window.scrollY - offset,
    });
  }
};

/**
 * Enable Smooth Scrolling
 * Based on the solution by Chris Coyier of CSS-Tricks.com
 *
 * @param {int} offset
 */
const setSmoothScrollLinks = (offset = 0) => {
  document.querySelectorAll('a.smoothscroll[href*="#"]').forEach(function (item) {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const activeOffcanvas = document.querySelector('.offcanvas.show');
      if (activeOffcanvas) {
        const callback = (e) => {
          smoothScrollTo(item.hash, offset);
          e.target.removeEventListener('hidden.bs.offcanvas', callback);
        };
        activeOffcanvas.addEventListener('hidden.bs.offcanvas', callback);
        Offcanvas.getInstance(activeOffcanvas).hide();
      } else {
        if (location.pathname.replace(/^\//, '') == item.pathname.replace(/^\//, '') && location.hostname == item.hostname) {
          smoothScrollTo(item.hash, offset);
        }
      }
    });
  });
};

export { smoothScrollTo, setSmoothScrollLinks };
