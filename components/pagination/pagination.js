/**
 * Pagination component.
 */

import { dom as faDom, library as faLibrary, config as faConfig } from '@fortawesome/fontawesome-svg-core';
import { faAngleDoubleRight, faAngleDoubleLeft, faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';

class Pagination {
  constructor(el) {
    this.el = el;
    this.init();
  }

  init() {
    faConfig.showMissingIcons = false;
    faLibrary.add(faAngleDoubleRight, faAngleDoubleLeft, faAngleRight, faAngleLeft);
    faDom.i2svg({ node: this.el });
  }
}

export default Pagination
