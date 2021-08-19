/**
 * Returns a nav-link markup for the navbar given the eleventy navigation entry and current page.
 * @param {*} entry
 * @param {*} currentPage
 */
 module.exports = (entry, currentPage) => {
  if (!entry.navbar) {
    entry.navbar = {};
  }
  let classList = [];
  let attributes = [];
  if (!entry.navbar.sideNav) {
    classList.push('nav-link');
  }
  if (entry.url == currentPage.url) {
    classList.push('active');
  }
  if (entry.navbar.button) {
    classList.push('btn', 'btn-sm', 'btn-primary');
  }
  if (entry.navbar.scrollSpy) {
    classList.push('smoothscroll');
  }
  if (entry.navbar.external) {
    attributes['target'] = '_blank';
  }
  if (entry.navbar.classes) {
    classList.push(...entry.classes);
  }
  if (entry.children instanceof Array && entry.children.length > 0 && !entry.navbar.hideChildren) {
    classList.push('dropdown-toggle');
    attributes['data-bs-toggle'] = 'dropdown';
    attributes['role'] = 'button';
    attributes['aria-expanded'] = 'false';
    attributes['href'] = '#';
  } else {
    attributes['href'] = entry.url;
  }
  let attributesString = '';
  for (const [key, value] of Object.entries(attributes)) {
    attributesString += ` ${key}="${value}"`
  }
  return `
    <a class="nav-link ${classList.join(' ')}"${attributesString}>
      ${entry.title}
    </a>
  `;
};