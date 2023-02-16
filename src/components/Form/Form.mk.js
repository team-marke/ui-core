const Generic = require('./fields/Generic.mk');
const Checkbox = require('./fields/Checkbox.mk');
const Select = require('./fields/Select.mk');

function Form(content, { fields }) {
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
      case 'select':
        return Select(false, { ...field });
      default:
        return Generic(false, { ...field });
    }
  }

  return `
    <form>
      <div class="row">
        ${getFields()}
      </div>
    </form>
  `;
}

module.exports = Form;
