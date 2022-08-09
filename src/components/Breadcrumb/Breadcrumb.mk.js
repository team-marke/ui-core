function Breadcrumb(content, items) {
  function getItem(item) {
    return `
      <li class="breadcrumb-item">
        <a href="${item.url}">${item.title}</a>
      </li>`;
  }

  function getItems() {
    let str = '';
    for (const item of items) {
      str += getItem(item);
    }
  }

  return `
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        ${getItems()}
      </ol>
    </nav>
  `;
}

module.exports = Breadcrumb;
