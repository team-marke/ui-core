function Select(content, { options, id }) {
  function getOptions() {
    let str = '';
    for (const option of options) {
      str += `<option value="${option.value}">${option.text}</option>`;
    }
    return str;
  }

  return `
    <select class="form-select" id="${id}">
      <option selected>Open this select menu</option>
      ${getOptions()}
    </select>
  `;
}

module.exports = Select;
