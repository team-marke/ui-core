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
    this.successMsg = form.dataset.messageSuccess || 'Formulário enviado com sucesso!';
    this.errorMsg = form.dataset.messageError || 'Houve um erro ao enviar o formulário, tente novamente mais tarde!';
    this.redirect = form.dataset.redirect;
    this.btnSpinner = new BtnSpinner(form.querySelector('button[type=submit]'));
    this.toastResponse = new ToastResponse();
    this.listenFormEvents();
  }

  getFormData() {
    let data = [];
    this.fields.forEach((field) => {
      if (!field.value) return;
      data.push({
        label: field.labels[0]?.innerHTML,
        value: field.value,
      });
    });
    return data;
  }

  redirectURL() {
    if (this.redirect) {
      window.location.href = this.redirect;
    }
  }

  showFeedback(message, theme) {
    this.toastResponse.showToast({
      text: message,
      theme: theme,
    });
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
        this.showFeedback(this.successMsg, 'success');
        this.redirectURL();
      } else {
        this.showFeedback(this.errorMsg, 'danger');
      }
    } catch (error) {
      this.showFeedback(this.errorMsg, 'danger');
    }
    this.btnSpinner.stopSpin();
  }

  listenFormEvents() {
    this.form.addEventListener('submit', (event) => {
      event.preventDefault();
      event.stopPropagation();
      this.submit();
      this.form.reset();
    });
  }
}
