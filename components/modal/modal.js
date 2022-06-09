/**
 * Modal component
 */

class Modal {
  constructor(el) {
    this.init();
  }

  async init() {
    await import('bootstrap/js/src/modal');
  }
}

export default Modal;
