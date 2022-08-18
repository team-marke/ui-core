const CloudinaryImgUrl = require('../../core-components/CloudinaryImgUrl');

function Coypyrightbar(content, { text, image, classes }) {
  function getText() {
    return `<small class="small">${text}</small>`;
  }

  function getImage() {
    const transformations = {
      fetch_format: 'auto',
      quality: 'auto:best',
      width: 60,
      height: 15,
    };

    return `
      <a href="${image.link}" target="_blank" title="${image.alt}">
        <img
          src="${CloudinaryImgUrl(image.src, transformations)}"
          alt="${image.alt}"
          width="60"
          height="15"
        />
      </a>
    `;
  }

  function getClasses() {
    if (!Array.isArray(classes)) {
      return '';
    }
    return classes.join(' ');
  }

  return `
    <div class="d-flex flex-column flex-lg-row align-items-center justify-content-lg-between ${getClasses()}">
      ${getText()}
      ${getImage()}
    </div>
  `;
}

module.exports = Coypyrightbar;
