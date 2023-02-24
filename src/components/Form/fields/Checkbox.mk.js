function Checkbox(content, { options }) {
  let str = '';
  for (const option of options) {
    str += `
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="${option.value ? option.value : ''}" id="${option.id}"
          ${option.required ? 'required' : ''}
        >
        <label class="form-check-label" for="${option.id}">${option.text}</label>
      </div>
    `;
  }
  return str;
}

module.exports = Checkbox;
