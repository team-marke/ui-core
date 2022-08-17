const CloudinaryImgUrl = require('../../core-components/CloudinaryImgUrl');

function Navbar(content, { eleventyNavigation, id, brand, brandMobile, background, dark, sticky, position, classes }) {
  function getClasses() {
    if (!Array.isArray(classes)) {
      return '';
    }
    return classes.join(' ');
  }

  function getOffCanvaItems() {
    let str = '';
    for (const [index, item] of items.entries()) {
      str += getOffcanvaItem(index, item);
    }
    return str;
  }

  function getBrand() {
    if (!brand) {
      return '';
    }
    const defaultTransforms = {
      fetch_format: 'auto',
      quality: 'auto',
      width: brand.width,
      height: brand.height,
      crop: 'fill',
    };
    return `
    <a class="navbar-brand" href="${brand.url}">
      <img
        class="d-none d-lg-block"
        src="${CloudinaryImgUrl(brand.logo, brand.transformations ? brand.transformations : defaultTransforms)}"
        alt=""
        width="${brand.width}"
        height="${brand.height}"
      >
      <img
        class="d-block d-lg-none"
        src="${CloudinaryImgUrl(
          brandMobile.logo,
          brandMobile.transformations ? brandMobile.transformations : defaultTransforms
        )}"
        alt=""
        width="${brandMobile.width}"
        height="${brandMobile.height}"
      >
    </a>
    `;
  }

  function getOffcanvaHeader() {
    return `
      <div class="offcanvas-header">
        ${getBrand()}
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
    `;
  }

  function getOffcanvaItem(index, item) {
    return `
    <div class="offcanvas-body">
      <ul class="navbar-nav ${getClasses()} justify-content-end">
        <li class="nav-item">
          <a class="nav-link ${index == 0 ? 'active' : ''}" href="${item.permalink}">${item.key}</a>
        </li>
      </ul>
    </div>
    `;
  }

  function getBackground() {
    return `bg-${background}`;
  }
  function getSticky() {
    return `sticky-${sticky}`;
  }

  return `
    <nav class="navbar ${dark} ${getBackground()} navbar-expand-lg ${getSticky()}">
      ${getBrand()}
      <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#${id}" aria-controls="${id}">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="offcanvas offcanvas-${position} text-${getBackground()}" tabindex="-1" id="${id}" aria-labelledby="${id}Label">
        ${getOffcanvaHeader()}
        ${getOffCanvaItems()}
      </div>
    </nav>
  `;
}

module.exports = Navbar;
