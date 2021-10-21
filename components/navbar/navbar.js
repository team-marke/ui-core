/**
 * Navbar component scripts.
 */

import Offcanvas from 'bootstrap/js/src/offcanvas';
import Dropdown from 'bootstrap/js/src/dropdown';

class Navbar {
  static className = 'navbar';
  constructor(el) {
    el.querySelectorAll('.offcanvas').forEach((offcanvasEl) => {
      let offcanvas = new Offcanvas(offcanvasEl);
      el.querySelector('.navbar-toggler').addEventListener('click', () => {
        offcanvas.toggle();
      });
    });
    el.querySelectorAll('.dropdown').forEach((dropdownEl) => {
      new Dropdown(dropdownEl);
    });
  }
}

export { Navbar as default };
