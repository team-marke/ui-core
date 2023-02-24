function Radio(content, { name, options }) {
  let str = '';
  for (const option of options) {
    str += `
      <div class="form-check">
        <input class="form-check-input" type="radio" name="${name}" id="${option.id}"
        ${option.checked ? 'checked' : ''}
        ${option.required ? 'required' : ''}
      >
        <label class="form-check-label" for="${option.id}">${option.text}</label>
      </div>
    `;
  }
  return str;
}

module.exports = Radio;
