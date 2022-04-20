/**
 * Post Preview component.
 */

import { dom as faDom, library as faLibrary, config as faConfig } from '@fortawesome/fontawesome-svg-core';
import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons';

class PostPreview {
  constructor(el) {
    this.el = el;
    this.init();
  }

  init() {
    faConfig.showMissingIcons = false;
    faLibrary.add(faCalendarAlt);
    faDom.i2svg({ node: this.el });
  }
}

export default PostPreview;
