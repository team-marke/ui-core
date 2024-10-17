import Form from '../form';

/**
 * Form for saving the data in to a Google Sheet
 * @param {HTMLFormElement} - The form element itself
 */
export default class GsheetsSaveForm extends Form {
  constructor(form) {
    super(form);
    this.fileId = form.dataset.fileid;
  }

  getDateString() {
    const now = new Date();
    return `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}`;
  }

  setStaticFields(data) {
    data['Data'] = this.getDateString();
    data['URL'] = window.location.href;
  }

  getFormData() {
    let data = {};
    this.fields.forEach((field) => {
      if (!field.value) return;
      data[field.dataset.gsheetField] = field.value;
    });
    this.setStaticFields(data);
    return data;
  }

  async submit() {
    this.btnSpinner.startSpin();
    try {
      const url = `https://api.apispreadsheets.com/data/${this.fileId}`;
      const headers = { 'Content-Type': 'application/json' };
      const body = JSON.stringify({
        data: this.getFormData(),
      });
      const res = await fetch(url, {
        method: 'POST',
        headers: headers,
        body: body,
      });
      if (res.status == 201) {
        this.showFeedback(this.successMsg, 'success');
      } else {
        this.showFeedback(this.errorMsg, 'danger');
      }
      this.dispatchSubmitEvent();
      this.redirectURL();
    } catch (error) {
      this.showFeedback(this.errorMsg, 'danger');
      this.redirectURL();
    }
    this.btnSpinner.stopSpin();
  }
}
