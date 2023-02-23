function Select(content, { label, options, id }) {
  function getOptions() {
    let str = '';
    for (const option of options) {
      str += `<option value="${option.value}" ${option.selected ? 'selected' : ''}>${option.text}</option>`;
    }
    return str;
  }

  return `
    <label for="${id}" class="form-label">${label}</label>
    <select class="form-select" id="${id}">
      ${getOptions()}
    </select>
  `;
}

module.exports = Select;
