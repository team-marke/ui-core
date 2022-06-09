/**
 * Tabs component
 */

class Tabs {
  constructor(el) {
    this.init();
  }

  async init() {
    await import('bootstrap/js/src/tab');
  }
}

export default Tabs;
