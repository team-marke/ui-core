/**
 * TODO: acionar offcanvas com toggler
 */

/**
 * Off canvas component.
 */

import { Offcanvas } from 'bootstrap';

export class OffcanvasMenu {
  /**
   * Inits a new off canvas menu.
   * @param {HTMLElement} el
   */
  constructor(el) {
    if (el && el instanceof Element) {
      this.el = el;
      console.log(el)
      this.offcanvas = new Offcanvas(this.el);
    }
  }
}
