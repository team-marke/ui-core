/**
 * Actionbar component.
 */

import { dom as faDom, library as faLibrary, config as faConfig } from '@fortawesome/fontawesome-svg-core';
import {
  faLinkedinIn,
  faFacebook,
  faYoutube,
  faInstagram,
  faWhatsapp,
  faLinkedin,
  faFacebookSquare,
  faYoutubeSquare,
  faInstagramSquare,
  faWhatsappSquare,
} from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope, faPhoneSquare, faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';

export class Actionbar {
  constructor(el) {
    this.el = el;
    this.init();
  }

  init() {
    faConfig.showMissingIcons = false;
    faLibrary.add(
      faLinkedinIn,
      faFacebook,
      faYoutube,
      faInstagram,
      faWhatsapp,
      faLinkedin,
      faFacebookSquare,
      faYoutubeSquare,
      faInstagramSquare,
      faWhatsappSquare,
      faPhone,
      faEnvelope,
      faPhoneSquare,
      faEnvelopeSquare
    );
    faDom.i2svg({ node: this.el });
  }
}
