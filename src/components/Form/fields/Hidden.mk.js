function Hidden(content, { id, dataset, value }) {

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
    <input type="hidden" id="${id}" ${getDataset()} value="${value}">
  `;
}

module.exports = Hidden;
