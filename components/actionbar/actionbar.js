/**
 * Actionbar component.
 */

import { dom as faDom, library as faLibrary, config as faConfig } from '@fortawesome/fontawesome-svg-core';
import { faLinkedin, faFacebookSquare, faYoutubeSquare, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';

export class Actionbar {
  constructor(el) {
    this.el = el;
    this.init();
  }

  init() {
    faConfig.showMissingIcons = false;
    faLibrary.add(faLinkedin, faFacebookSquare, faYoutubeSquare, faInstagramSquare);
    faDom.i2svg({ node: this.el });
  }
}
