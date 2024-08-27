import Form from '../form';

/**
 * Default component for sending leads to HubSpot CRM
 * @param {HTMLFormElement} - The form element itself
 */
export default class HubspotForm extends Form {
  constructor(form) {
    super(form);
    this.formId = form.dataset.formId;
    this.portalId = form.dataset.portalId;
  }

  getFormData() {
    let data = [];
    this.fields.forEach((field) => {
      if (!field.value) return;
      data.push({
        name: field.dataset.hubspotField,
        value: field.value,
      });
    });
    return data;
  }

  getContextData() {
    return {
      pageUri: window.location.href,
      pageName: window.document.title,
    };
  }

  async submit() {
    this.btnSpinner.startSpin();
    try {
      const url = `https://api.hsforms.com/submissions/v3/integration/submit/${this.portalId}/${this.formId}`;
      const body = JSON.stringify({
        context: this.getContextData(),
        fields: this.getFormData(),
      });
      const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: body,
      });
      if (res.status == 201 || res.status == 200) {
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
