const CloudinaryImgUrl = require('../../core-components/CloudinaryImgUrl');

function Navbar(content, { eleventyNavigation, currentPageUrl, id, expand, brandImg, brandImgMobile, dark, classes }) {
  function getClasses() {
    if (!Array.isArray(classes)) {
      return '';
    }
    return classes.join(' ');
  }

  function getNav() {
    return `
      <ul class="navbar-nav ${getClasses()}">
        ${getNavItems()}
      </ul>
      ${content}
    `;
  }

  function getNavItems() {
    let str = '';
    for (const item of eleventyNavigation) {
      str += getNavItem(item);
    }
    return str;
  }

  function getNavItem(item) {
    if (item.children && item.children.length > 0) {
      return `
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle ${item.children.some((item) => currentPageUrl == item.url) ? 'active' : ''}"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            ${item.title}
          </a>
          <ul class="dropdown-menu">
            ${getDropdownItems(item.children)}
          </ul>
        </li>
      `;
    }
    return `
      <li class="nav-item">
        <a
          href="${item.url}"
          class="nav-link ${currentPageUrl == item.url ? 'active' : ''}"
          ${currentPageUrl == item.url ? 'aria-current="page"' : ''}
        >
          ${item.title}
        </a>
      </li>
    `;
  }

  function getDropdownItems(items) {
    let str = '';
    for (const item of items) {
      str += `
        <li>
          <a
            href="${item.url}"
            class="dropdown-item ${currentPageUrl == item.url ? 'active' : ''}"
            ${currentPageUrl == item.url ? 'aria-current="page"' : ''}
          >
            ${item.title}
          </a>
        </li>
      `;
    }
    return str;
  }

  function getBrandImg() {
    if (!brandImg) {
      return '';
    }

    const defaultTransforms = {
      fetch_format: 'auto',
      quality: 'auto',
      width: brandImg.width,
      height: brandImg.height,
      crop: 'pad',
    };

    return `
      <a class="navbar-brand" href="${brandImg.href}">
        <img
          class="d-none d-lg-inline-block"
          src="${CloudinaryImgUrl(brandImg.src, brandImg.transformations ? brandImg.transformations : defaultTransforms)}"
          alt="${brandImg.alt}"
          width="${brandImg.width}"
          height="${brandImg.height}"
        >
        ${getBrandImgMobile()}
      </a>
    `;
  }

  function getBrandImgMobile() {
    if (!brandImgMobile) {
      return '';
    }

    const defaultTransforms = {
      fetch_format: 'auto',
      quality: 'auto',
      width: brandImgMobile.width,
      height: brandImgMobile.height,
      crop: 'pad',
    };

    return `
      <img
        class="d-inline-block d-lg-none"
        src="${CloudinaryImgUrl(
          brandImgMobile.src,
          brandImgMobile.transformations ? brandImgMobile.transformations : defaultTransforms
        )}"
        alt="${brandImgMobile.alt}"
        width="${brandImgMobile.width}"
        height="${brandImgMobile.height}"
      >
    `;
  }

  return `
    <nav class="navbar navbar-expand-${expand ? expand : 'lg'} ${dark ? 'navbar-dark' : ''}" id="${id}">
      ${getBrandImg()}
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#${id}" aria-controls="${id}">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="${id}">
        ${getNav()}
      </div>
    </nav>
  `;
}

module.exports = Navbar;
