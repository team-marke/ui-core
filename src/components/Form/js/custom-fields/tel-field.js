/**
 * TelField component
 * @param {HTMLFormElement} - The tel element itself
 */
export default class TelField {
  constructor(input) {
    this.input = input;
    this.addEventListeners()
  }

  maskPhoneNumber() {
    let phoneNumber = this.input.value.replace(/\D/g, '');
    this.input.value = phoneNumber;
  }

  addEventListeners() {
    this.input.addEventListener('input', (e) => {
      this.maskPhoneNumber()
    })
  }
}
