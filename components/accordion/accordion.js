/**
 * Accordion component
 */

class Accordion {
  constructor(el) {
    this.init();
  }

  async init() {
    await import('bootstrap/js/src/collapse');
  }
}

export default Accordion;
