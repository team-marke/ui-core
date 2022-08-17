function Breadcrumb(content, { eleventyBreadcrumbs, currentPageUrl } = false) {

  function getItem(item) {
    if (item.url == currentPageUrl) {
      return `
        <li class="breadcrumb-item active" aria-current="page">
          ${item.title}
        </li>`;
    } else {
      return `
        <li class="breadcrumb-item">
          <a href="${item.url}">${item.title}</a>
        </li>`;
    }
  }

  function getItems() {
    let str = '';
    for (const item of eleventyBreadcrumbs) {
      str += getItem(item);
    }
    return str;
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
