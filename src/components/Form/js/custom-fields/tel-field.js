/**
 * TelField component
 * @param {HTMLFormElement} - The tel element itself
 */
export default class TelField {
  constructor(input) {
    this.input = input;
    this.addEventListeners();
  }

  addEventListeners() {
    this.input.addEventListener('input', (e) => {
      let x = e.target.value.replace(/\D/g, '');
      let formatted = '';

      if (x.length > 0) {
        formatted += '(' + x.substring(0, 2);
      }
      if (x.length >= 3) {
        formatted += ') ' + x.substring(2, 7);
      }
      if (x.length >= 8) {
        formatted += '-' + x.substring(7, 11);
      }

      e.target.value = formatted;
    });
  }
}
