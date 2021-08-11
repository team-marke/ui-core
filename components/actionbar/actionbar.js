//
// Actionbar.
//

import { dom as faDom, library as faLibrary } from '@fortawesome/fontawesome-svg-core';
import { faLinkedin, faFacebookSquare, faYoutubeSquare, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';

(() => {
  faLibrary.add(faLinkedin, faFacebookSquare, faYoutubeSquare, faInstagramSquare);
})();
