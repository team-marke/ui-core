/**
 * Tabs component
 *
 * This component is created via data atributes
 */

import Tab from 'bootstrap/js/src/tab';

class Tabs {
  constructor(el) {
    this.init();
  }

  async init() {
    await import('bootstrap/js/src/tab');
  }
}

export default Tabs;
