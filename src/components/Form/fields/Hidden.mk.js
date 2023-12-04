function Hidden(content, { id, name, dataset, value }) {

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
    <input type="hidden" id="${id}" name="${name}" ${getDataset()} value="${value}>
  `;
}

module.exports = Hidden;
