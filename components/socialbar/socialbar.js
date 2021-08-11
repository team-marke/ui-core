//
// Social Bar.
//

import { dom as faDom, library as faLibrary } from '@fortawesome/fontawesome-svg-core';
import { faLinkedinIn, faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

(() => {
  faLibrary.add(faLinkedinIn, faFacebook, faInstagram, faYoutube);
  faDom.i2svg();
})();
