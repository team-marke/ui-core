function Generic(content, { type, id, label, placeholder }) {
  const supportedTypes = ['text', 'email', 'password', 'tel', 'url'];

  if (!supportedTypes.includes(type)) {
    throw new Error('Unsupported input type');
  }

  return `
    <label for="${id}" class="form-label">${label}</label>
    <input type="${type}" class="form-control" id="${id}" placeholder="${placeholder}">
  `;
}

module.exports = Generic;
