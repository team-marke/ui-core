/**
 * Socialbar component.
 */

import { dom as faDom, library as faLibrary, config as faConfig } from '@fortawesome/fontawesome-svg-core';
import {
  faLinkedinIn,
  faFacebook,
  faInstagram,
  faYoutube,
  faLinkedin,
  faFacebookSquare,
  faInstagramSquare,
  faYoutubeSquare,
} from '@fortawesome/free-brands-svg-icons';

export class Socialbar {
  constructor(el) {
    this.el = el;
    this.init();
  }

  init() {
    faConfig.showMissingIcons = false;
    faLibrary.add(
      faLinkedinIn,
      faFacebook,
      faInstagram,
      faYoutube,
      faLinkedin,
      faFacebookSquare,
      faInstagramSquare,
      faYoutubeSquare
    );
    faDom.i2svg({ node: this.el });
  }
}
