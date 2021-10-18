//
// Input component scripts.
//

class Input {
  /**
   * @constructor
   */
  constructor(el) {
    /**
     * @type {HTMLInputElement|HTMLSelectElement}
     */
    this.el = el;
    this.addListeners();
  }

  /**
   * Add custom field listeners.
   */
  addListeners() {
    this.el.addEventListener(
      'input',
      () => {
        this.el.setCustomValidity('');
        for (let validityIdentifier of this.getValidationIdentifiers(this.el)) {
          validityIdentifier.classList.remove('is-valid');
          validityIdentifier.classList.remove('is-invalid');
        }
      },
      false
    );
  }

  /**
   * Retrieves field value.
   * @returns {string} Field value.
   */
  getValue() {
    if (this.el.inputmask) {
      return this.el.inputmask.unmaskedvalue();
    } else {
      return this.el.value;
    }
  }

  /**
   * Sets a value on the field.
   * @param {string} value
   */
  setValue(value) {
    if (field.inputmask) {
      this.el.inputmask.setValue(value);
    } else {
      this.el.value = value;
    }
  }

  /**
   * Check field validity state and set if invalid.
   */
  checkValidity() {
    if (!this.isFieldValid()) {
      for (let validityIdentifier of this.getValidationIdentifiers()) {
        validityIdentifier.classList.add('is-invalid');
      }
    } else {
      for (let validityIdentifier of this.getValidationIdentifiers()) {
        validityIdentifier.classList.remove('is-invalid');
      }
    }
  }

  /**
   * Clear field validity state.
   */
  clearValidity() {
    this.el.setCustomValidity('');
    for (let validityIdentifier of this.getValidationIdentifiers()) {
      validityIdentifier.classList.remove('is-valid');
      validityIdentifier.classList.remove('is-invalid');
    }
  }

  /**
   * Checks if field is valid.
   * @returns {Boolean} is field currently valid or not?
   */
  isFieldValid() {
    if (!this.el.checkValidity()) {
      return false;
    }
    if (this.el.inputmask && !this.el.classList.contains('input-mask--novalidate') && !this.el.inputmask.isValid()) {
      return false;
    }
    return true;
  }

  /**
   * Get field validation identifier elements.
   * @returns {HTMLElement[]} List of elements to toggle validity state.
   */
  getValidationIdentifiers() {
    let validityIdentifiers = [this.el];
    return validityIdentifiers;
  }

  /**
   * Get the field wrapper node containing the helper texts and label elements.
   * @returns {HTMLElement}
   */
  getWrapper() {
    return this.el.parentElement;
  }
}

export default Input;
