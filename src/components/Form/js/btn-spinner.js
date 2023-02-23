export default class BtnSpinner {
  constructor(btn) {
    this.btn = btn;
  }

  startSpin() {
    const spinner = document.createElement('span');
    spinner.classList.add('spinner-border', 'spinner-border-sm', 'ms-2');
    this.btn.appendChild(spinner);
    this.btn.disabled = true;
  }

  stopSpin() {
    const spinner = this.btn.querySelector('.spinner-border');
    this.btn.removeChild(spinner);
    this.btn.disabled = false;
  }
}
