/**
 * Accordion component
 *
 * This component is created via data atributes
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
