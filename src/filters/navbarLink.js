const slugify = require('slugify');

/**
 * Returns a nav-link markup for the navbar given the eleventy navigation entry and current page.
 * @param {*} entry
 * @param {*} currentPage
 */
module.exports = (entry, currentPage) => {
  let classList = [];
  let attributes = [];
  if (!entry.sideNav) {
    classList.push('nav-link');
  }
  if (entry.url == currentPage.url) {
    classList.push('active');
  }
  if (entry.button) {
    classList.push('btn', 'btn-sm', 'btn-primary');
  }
  if (entry.scrollSpy) {
    classList.push('smoothscroll');
  }
  if (entry.external) {
    attributes['target'] = '_blank';
  }
  if (entry.classes) {
    classList.push(...entry.classes);
  }
  if ((entry.children instanceof Array && entry.children.length > 0) || entry.overlayType?.length > 0) {
    if (entry.overlayType?.length > 0) {
      classList.push(`${entry.overlayType}-toggle`);
      let titleSlug = slugify(entry.title.toLowerCase(), { remove: /[*+~.,()'"!:@]/g });
      attributes['id'] = `navbar-${entry.overlayType}-${titleSlug}-toggle`;
      if (entry.overlayType != 'dropdown') {
        attributes['data-target'] = `navbar-${entry.overlayType}-${titleSlug}-overlay`;
      }
    } else {
      classList.push('dropdown-toggle');
    }
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
