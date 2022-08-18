function Socialbar(content, { items, theme, fontSize, classes }) {
  function getFontSize() {
    return fontSize ? `fs-${fontSize}` : '';
  }

  function getClasses() {
    if (!Array.isArray(classes)) {
      return '';
    }
    return classes.join(' ');
  }

  function getItems() {
    if (!Array.isArray(items)) return '';
    let str = '';
    for (const item of items) {
      str += getItem(item);
    }
    return str;
  }

  function getItem(item) {
    return `
      <a
        href="${item.href}"
        class="link-${theme} ${getFontSize()}"
        target="_blank"
        rel="noreferrer noopener"
      >
        <i class="${item.icon}"></i>
      </a>
    `;
  }

  return `
    <div class="d-flex gap-3 ${getClasses()}">
      ${getItems()}
    </div>
  `;
}

module.exports = Socialbar;
