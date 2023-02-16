function Checkbox(content, { value, id, label }) {
  return `
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="${value}" id="${id}">
      <label class="form-check-label" for="${id}">${label}</label>
    </div>
  `;
}

module.exports = Checkbox;
