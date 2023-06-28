function Select(content, { label, options, id, required, dataset }) {
  function getOptions() {
    let str = '';
    for (const option of options) {
      str += `<option value="${option.value}" ${option.selected ? 'selected' : ''} ${option.disabled ? 'disabled' : ''}>${option.text}</option>`;
    }
    return str;
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
    <select class="form-select" id="${id}"  ${required ? 'required' : ''} ${getDataset()}>
      ${getOptions()}
    </select>
  `;
}

module.exports = Select;
