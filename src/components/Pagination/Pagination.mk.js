function Pagination(content, { eleventyPagination, ariaLabel, classes, size }) {
  function getPrevOrNext(href, title) {
    if (href) {
      return `
        <li class="page-item">
          <a class="page-link" href="${href}">${title}</a>
        </li>
      `;
    }
    return `
      <li class="page-item disabled">
        <span class="page-link">${title}</a>
      </li>
    `;
  }

  function getItems() {
    let str = '';
    for (const [index, item] of eleventyPagination.hrefs.entries()) {
      str += getItem(index, item);
    }
    return str;
  }

  function getItem(index, href) {
    return `
      <li class="page-item ${href ? '' : 'disabled'}">
        ${getLink(index, href)}
      </li>
    `;
  }

  function getLink(index, href) {
    return `
      <a
        href="${href}"
        class="page-link ${eleventyPagination.pageNumber == index ? 'active' : ''}"
        ${eleventyPagination.pageNumber == index ? 'aria-current="page"' : ''}
      >
        ${index + 1}
      </a>
    `;
  }

  function getSize() {
    return size ? `pagination-${size}` : '';
  }

  function getClasses() {
    if (!Array.isArray(classes)) {
      return '';
    }
    return classes.join(' ');
  }

  return `
    <nav aria-label="${ariaLabel}">
      <ul class="pagination ${getSize()} ${getClasses()}">
        ${getPrevOrNext(eleventyPagination.href.previous, 'Anterior')}
        ${getItems()}
        ${getPrevOrNext(eleventyPagination.href.next, 'Próximo')}
      </ul>
    </nav>
  `;
}

module.exports = Pagination;
