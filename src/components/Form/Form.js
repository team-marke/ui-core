import Form from './js/form';
import HubspotForm from './js/extensions/hubspot-form';

(() => {
  Array.from(document.querySelectorAll('.form')).forEach((form) => {
    if (form.dataset.integration) {
      switch (form.dataset.integration) {
        case 'hubspot':
          return new HubspotForm(form);
        default:
          return;
      }
    }
    new Form(form);
  });
})();
