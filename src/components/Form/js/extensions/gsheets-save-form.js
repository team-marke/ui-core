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

  getDate() {
    return new Date().toLocaleDateString();
  }

  getFormData() {
    let data = {};
    this.fields.forEach((field) => {
      if (!field.value) return;
      data[field.dataset.gsheetField] = field.value;
    });
    data['Data'] = this.getDate();
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
        this.dispatchSubmitEvent();
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
}
