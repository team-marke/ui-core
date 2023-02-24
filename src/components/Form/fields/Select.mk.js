function Select(content, { label, options, id, required }) {
  function getOptions() {
    let str = '';
    for (const option of options) {
      str += `<option value="${option.value}" ${option.selected ? 'selected' : ''}>${option.text}</option>`;
    }
    return str;
  }

  return `
    <label for="${id}" class="form-label">${label}</label>
    <select class="form-select" id="${id}" ${required ? 'required' : ''}>
      ${getOptions()}
    </select>
  `;
}

module.exports = Select;
