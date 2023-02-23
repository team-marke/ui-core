function Submit(content, { id, theme, size, classes }) {
  function getSize() {
    return size ? `btn-${size}` : '';
  }

  function getClasses() {
    if (!Array.isArray(classes)) {
      return '';
    }
    return classes.join(' ');
  }

  return `
    <button type="submit" class="btn btn-${theme} ${getSize()} ${getClasses()}">${content}</button>
  `;
}

module.exports = Submit;
