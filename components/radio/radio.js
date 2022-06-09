/**
 * Radio component
 */

import Input from '../../tools/core-components/input/input';

class Radio extends Input {
  /**
   * @constructor
   */
  constructor(el) {
    super(el);
  }

  /**
   * Add custom field listeners.
   */
  addListeners() {
    super.addListeners();
    this.el.addEventListener(
      'input',
      () => {
        this.el.setCustomValidity('');
        for (let invalidButton of this.el.closest('.radio-group').querySelectorAll('.radio.is-valid, .radio.is-invalid')) {
          invalidButton.setCustomValidity('');
          invalidButton.classList.remove('is-valid');
          invalidButton.classList.remove('is-invalid');
        }
      },
      false
    );
  }

  /**
   * Get field validation identifier elements.
   * @returns {HTMLElement[]} List of elements to toggle validity state.
   */
  getValidationIdentifiers() {
    let validityIdentifiers = [this.el];
    validityIdentifiers.push(this.el.closest('.radio-group'));
    return validityIdentifiers;
  }

  /**
   * Get the field wrapper node containing the helper texts and label elements.
   * @returns {HTMLElement}
   */
  getWrapper() {
    if (this.el.closest('.radio-group')) {
      return this.el.closest('.radio-group').parentElement;
    } else {
      return this.el.parentElement;
    }
  }
}

export default Radio;
