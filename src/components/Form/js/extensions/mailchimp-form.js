import Form from '../form';

/**
 * Default component to subscribe users to a Mailchimp audience list
 * @param {HTMLFormElement} - The form element itself
 */
export default class MailchimpForm extends Form {
  constructor(form) {
    super(form);
    this.subscribedMsg = form.dataset.messageSubscribed || 'Usuário já inscrito!';
    this.apiKey = process.env.MAILCHIMP_API_KEY;
    this.serverPrefix = process.env.MAILCHIMP_SERVER_PREFIX;
    this.listId = process.env.MAILCHIMP_LIST_ID;
    this.tags = this.getTags();
  }

  getTags() {
    if (!this.form.dataset.tags) {
      return [];
    }
    return this.form.dataset.tags.split(', ');
  }

  getFormFields() {
    let data = [];
    this.fields.forEach((field) => {
      if (!field.value) return;
      data.push({
        label: field.dataset.mailchimpField,
        value: field.value,
      });
    });
    return data;
  }

  async submit() {
    this.btnSpinner.startSpin();
    try {
      const url = 'https://us-central1-marke-forms.cloudfunctions.net/v2/mailchimp';
      const body = JSON.stringify({
        apiKey: this.apiKey,
        serverPrefix: this.serverPrefix,
        listId: this.listId,
        email: this.fields.find((field) => field.dataset.mailchimpField == 'email').value,
        fields: this.getFormFields(),
        tags: this.tags,
      });
      const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: body,
      });
      if (res.status == 201 || res.status == 200) {
        this.dispatchSubmitEvent();
        this.showFeedback(this.successMsg, 'success');
        this.redirectURL();
      } else if (res.status == 500) {
        const data = await res.json();
        const userStatus = data.msg.response.req.data.status;
        if (userStatus == 'subscribed') {
          this.showFeedback(this.subscribedMsg, 'success');
        } else {
          this.showFeedback(this.errorMsg, 'danger');
        }
      } else {
        this.showFeedback(this.errorMsg, 'danger');
      }
    } catch (error) {
      this.showFeedback(this.errorMsg, 'danger');
    }
    this.btnSpinner.stopSpin();
  }
}
