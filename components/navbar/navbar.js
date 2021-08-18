import Offcanvas from 'bootstrap/js/src/offcanvas';
import Dropdown from 'bootstrap/js/src/dropdown';

/**
 * Navbar component.
 */

export class Navbar {
  constructor(el) {
    el.querySelectorAll('.offcanvas').forEach((offcanvasEl) => {
      new Offcanvas(offcanvasEl);
    });
    el.querySelectorAll('.dropdown').forEach((dropdownEl) => {
      new Dropdown(dropdownEl);
    });
  }
}
