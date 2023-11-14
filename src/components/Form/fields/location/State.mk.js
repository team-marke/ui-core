function SelectLocationState(content, { label, id, required, dataset, defaultValue }) {
  function getDefaultValue() {
    if (defaultValue) {
      return `data-default-value="${defaultValue}"`
    }
  }

  function getDataset() {
    if (typeof dataset !== 'object') {
      return '';
    }
    let str = '';
    for (const key in dataset) {
      str += `data-${key}="${dataset[key]}"`;
    }
    return str;
  }

  return `
    <label for="${id}" class="form-label">${label}</label>
    <select data-location="true" data-location-field="state" class="form-select" ${getDefaultValue()} id="${id}" ${required ? 'required' : ''} ${getDataset()}></select>
  `;
}

module.exports = SelectLocationState;
