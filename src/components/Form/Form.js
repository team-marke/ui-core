import Form from './js/form';
import HubspotForm from './js/extensions/hubspot-form';
import MailchimpForm from './js/extensions/mailchimp-form';
import GsheetsSaveForm from './js/extensions/gsheets-save-form';

(() => {
  Array.from(document.querySelectorAll('.form')).forEach((form) => {
    if (form.dataset.integration) {
      switch (form.dataset.integration) {
        case 'gsheets':
          return new GsheetsSaveForm(form);
        case 'hubspot':
          return new HubspotForm(form);
        case 'mailchimp':
          return new MailchimpForm(form);
        default:
          return;
      }
    }
    new Form(form);
  });
})();
