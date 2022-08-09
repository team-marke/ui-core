const CloudinaryImgUrl = require('../../core-components/CloudinaryImgUrl');

function Card(content, img, header, footer, classes) {
  function getImage() {
    if (!img) {
      return '';
    }
    const defaultTransforms = {
      fetch_format: 'auto',
      quality: 'auto',
      width: img.width,
      height: img.height,
      crop: 'thumb',
    };
    return `
      <img
        class="card-img-top"
        src="${CloudinaryImgUrl(img.url, img.transformations ? img.transformations : defaultTransforms)}"
        alt="${img.alt}"
        width="${img.width}"
        height="${img.height}"
      >
    `;
  }

  function getHeader() {
    if (!header) {
      return '';
    }
    return `
      <div class="card-header">
        ${header}
      </div>
    `;
  }

  function getFooter() {
    if (!footer) {
      return '';
    }
    return `
      <div class="card-footer">
        ${footer}
      </div>
    `;
  }

  function getClasses() {
    if (!Array.isArray(classes)) {
      return '';
    }
    return classes.join(' ');
  }

  return `
    <div class="card ${getClasses()}">
      ${getImage()}
      ${getHeader()}
      <div class="card-body">
      ${content}
      </div>
      ${getFooter()}
    </div>
  `;
}

module.exports = Card;
