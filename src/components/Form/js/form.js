import BtnSpinner from './btn-spinner';
import ToastResponse from './toast-response';

/**
 * Default component for sending emails with Marke Forms V2
 * @param {HTMLFormElement} - The form element itself
 */
export default class Form {
  constructor(form) {
    this.form = form;
    this.fields = Array.from(form.elements).filter((element) => !(element instanceof HTMLButtonElement));
    this.successMsg = form.dataset.successMsg || 'Formulário enviado com sucesso!';
    this.errorMsg = form.dataset.errorMsg || 'Houve um erro ao enviar o formulário, tente novamente mais tarde!';
    this.btnSpinner = new BtnSpinner(form.querySelector('button[type=submit]'));
    this.listenFormEvents();
  }

  getFormData() {
    let data = [];
    this.fields.forEach((field) => {
      if (!field.value) return;
      data.push({
        label: field.labels[0]?.innerHTML,
        value: field.value
      });
    });
    return data;
  }

  async submit() {
    this.btnSpinner.startSpin();
    try {
      const url = process.env.FORM_SUBMIT_URL;
      const body = JSON.stringify({
        to: process.env.FORM_SUBMIT_TO,
        subject: process.env.FORM_SUBMIT_SUBJECT,
        fields: this.getFormData(),
      });
      const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: body,
      });
      if (res.status == 201) {
        ToastResponse.showToast({
          text: this.successMsg,
          theme: 'success',
        });
      } else {
        ToastResponse.showToast({
          text: this.errorMsg,
          theme: 'danger',
        });
      }
    } catch (error) {
      ToastResponse.showToast({
        text: this.errorMsg,
        theme: 'danger',
      });
    }
    this.btnSpinner.stopSpin();
  }

  listenFormEvents() {
    this.form.addEventListener('submit', (event) => {
      event.preventDefault();
      event.stopPropagation();
      this.submit();
    });
  }
}
