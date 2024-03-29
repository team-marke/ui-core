const Generic = require('./fields/Generic.mk');
const Checkbox = require('./fields/Checkbox.mk');
const Radio = require('./fields/Radio.mk');
const Select = require('./fields/Select.mk');
const Submit = require('./fields/Submit.mk');
const Textarea = require('./fields/Textarea.mk');
const Hidden = require('./fields/Hidden.mk');
const SelectLocationState = require('./fields/location/State.mk');
const SelectLocationCity = require('./fields/location/City.mk');

function Form(content, { fields, gutter, integration, redirect, messages, id }) {
  function getFields() {
    if (!Array.isArray(fields)) {
      return '';
    }
    let renderedFields = [];
    for (const field of fields) {
      renderedFields.push(`
        <div class="${field.col ? 'col-' + field.col : 'col'}">
          ${getFieldByFieldType(field)}
        </div>
      `);
    }
    return renderedFields.join('');
  }

  function getFieldByFieldType(field) {
    switch (field.type) {
      case 'checkbox':
        return Checkbox(false, { ...field });
      case 'radio':
        return Radio(false, { ...field });
      case 'select':
        return Select(false, { ...field });
      case 'submit':
        return Submit(field.text, { ...field });
      case 'textarea':
        return Textarea(field.text, { ...field });
      case 'hidden':
        return Hidden(false, { ...field });
      case 'select-location-state':
        return SelectLocationState(false, { ...field });
      case 'select-location-city':
        return SelectLocationCity(false, { ...field });
      default:
        return Generic(false, { ...field });
    }
  }

  function getIntegrationType() {
    if (!integration) {
      return '';
    }
    return `
      data-integration="${integration.type}"
    `;
  }

  function getIntegrationOptions() {
    if (!integration) {
      return '';
    }
    if (!integration.options) {
      return '';
    }
    let str = '';
    for (const [key, value] of Object.entries(integration.options)) {
      str += `data-${key}="${value}"`;
    }
    return str;
  }

  function getRedirect() {
    if (!redirect) {
      return '';
    }
    return `data-redirect="${redirect}"`;
  }

  function getMessages() {
    if (!messages) {
      return '';
    }
    return `
      data-message-success="${messages.success}"
      data-message-error="${messages.error}"
    `;
  }

  function getId() {
    if (!id) {
      return '';
    }
    return `
      id="${id}"
    `;
  }

  return `
    <form class="form"
      ${getId()}
      ${getIntegrationType()}
      ${getIntegrationOptions()}
      ${getRedirect()}
      ${getMessages()}
    >
      <div class="row g-${gutter ? gutter : 3}">
        ${getFields()}
      </div>
    </form>
  `;
}

module.exports = Form;
