/**
 * Action bar component.
 */

import { dom as faDom, library as faLibrary } from '@fortawesome/fontawesome-svg-core';
import { faLinkedin, faFacebookSquare, faYoutubeSquare, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';

export class ActionBar {
  /**
   * Inits a new action bar.
   * @param {HTMLElement} el
   */
  constructor(el) {
    if (el && el instanceof Element) {
      this.addIcons();
    }
  }

  addIcons() {
    faLibrary.add(faLinkedin, faFacebookSquare, faYoutubeSquare, faInstagramSquare);
    faDom.i2svg();
  }
}
