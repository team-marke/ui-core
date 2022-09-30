function Actionbar(content, { startItems, endItems, theme, fontSize, gap, classes }) {
  function getGap() {
    return gap ? `gap-${gap}` : 'gap-2';
  }

  function getFontSize() {
    return fontSize ? `fs-${fontSize}` : '';
  }

  function getClasses() {
    if (!Array.isArray(classes)) {
      return '';
    }
    return classes.join(' ');
  }

  function getItems(items) {
    if (!Array.isArray(items)) return '';
    let str = '';
    for (const item of items) {
      str += getItem(item);
    }
    return str;
  }

  function getItem(item) {
    const itemContent = `
      ${item.icon ? getIcon(item.icon) : ''}
      ${item.text ? `<span class="small">${item.text}</span>` : ''}
      ${item.html ? item.html : ''}
    `;

    if (item.href) {
      return `
        <a
          href="${item.href}"
          class="link-${theme}"
          target="_blank"
          rel="noreferrer noopener"
        >
          ${itemContent}
        </a>
      `;
    }
    return `
      <div class="text-${theme}">${itemContent}</div>
    `;
  }

  function getIcon(icon) {
    return `<i class="${icon}"></i>`;
  }

  return `
    <div class="d-flex justify-content-between ${getFontSize()} ${getClasses()}">
      <div class="d-flex ${getGap()}">${getItems(startItems)}</div>
      <div class="d-flex ${getGap()}">${getItems(endItems)}</div>
    </div>
  `;
}

module.exports = Actionbar;
