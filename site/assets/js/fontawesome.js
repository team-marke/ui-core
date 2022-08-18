/**
 * Icons using Fontawesome SVG icons.
 * Read more about importing icons at @link https://fontawesome.com/how-to-use/with-the-api/setup/importing-icons
 */

import { dom as faDom, library as faLibrary, config as faConfig } from '@fortawesome/fontawesome-svg-core';
import { faWhatsapp, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

(() => {
  faLibrary.add(faWhatsapp, faInstagram, faFacebook, faEnvelope);
  faConfig.showMissingIcons = false;
  faDom.watch();
})();
