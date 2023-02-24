function Generic(content, { type, id, label, placeholder, dataset, required }) {
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

  return `
    <label for="${id}" class="form-label">${label}</label>
    <input type="${type}" class="form-control" id="${id}" placeholder="${placeholder}" ${getDataset()}
    ${required ? 'required' : ''}>
  `;
}

module.exports = Generic;
