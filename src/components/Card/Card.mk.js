const CloudinaryImgUrl = require('../../core-components/CloudinaryImgUrl');

function Card(content, img) {
  function getImage() {
    if (!img) {
      return '';
    }
    return `
      <img src="${CloudinaryImgUrl(img.url)}" class="card-img-top" alt="${img.alt}">
    `;
  }

  return `
    <div class="card">
      ${getImage()}
      <div class="card-body">
        ${content}
      </div>
    </div>
  `;
}

module.exports = Card;
