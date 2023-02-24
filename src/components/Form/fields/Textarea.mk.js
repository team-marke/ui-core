function Textarea(content, { type, id, label, placeholder, dataset, required, rows }) {

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
    <textarea class="form-control" id="${id}" rows="${rows}" placeholder="${placeholder}
      ${getDataset()}"
      ${required ? 'required' : ''}
    >
    </textarea>
  `;
}

module.exports = Textarea;
