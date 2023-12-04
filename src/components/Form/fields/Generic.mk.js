function Generic(content, { type, id, label, placeholder, dataset, required, value }) {
  const supportedTypes = ['text', 'email', 'password', 'tel', 'url'];

  if (!supportedTypes.includes(type)) {
    throw new Error('Unsupported input type');
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

  function getPlaceHolder() {
    if (!placeholder) {
      return '';
    }
    return `placeholder="${placeholder}"`;
  }

  function getValue() {
    if (!value) {
      return '';
    }
    return `value="${value}"`;
  }

  return `
    <label for="${id}" class="form-label">${label}</label>
    <input type="${type}" class="form-control" id="${id}" ${getPlaceHolder()} ${getDataset()} ${getValue()}
    ${required ? 'required' : ''}>
  `;
}

module.exports = Generic;
