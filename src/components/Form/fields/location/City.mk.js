function SelectLocationCity(content, { label, id, required, dataset }) {
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
    <select data-location="true" data-location-field="city" class="form-select" id="${id}"  ${required ? 'required' : ''} disabled ${getDataset()}></select>
  `;
}

module.exports = SelectLocationCity;
