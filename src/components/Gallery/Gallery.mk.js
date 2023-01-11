const CloudinaryImgUrl = require('../../core-components/CloudinaryImgUrl');

function Gallery(content, { images, columns, color, id, minSlides, spaceBetween }) {
  function getImages() {
    const defaultTransforms = {
      fetch_format: 'auto',
      quality: 'auto',
      width: 560,
      height: 310,
      crop: 'thumb',
    };
    let str = '';
    for (const image of images) {
      str += `
        <div class="swiper-slide gallery__slide" style="grid-column: span ${image.size}">
          <img
            class="gallery__img"
            src="${CloudinaryImgUrl(image.src, image.transformations ? image.transformations : defaultTransforms)}"
            alt="${image.alt}"
            loading="lazy"
          >
        </div>
      `;
    }
    return str;
  }

  function getColor() {
    if (!color) return '';
    return `--swiper-theme-color:${color}; --swiper-navigation-color:${color}`;
  }

  function getGalleryModalSlides() {
    const defaultTransforms = {
      fetch_format: 'auto',
      quality: 'auto',
      width: 1200,
      height: 780,
      crop: 'thumb',
    };
    let str = '';
    for (const [index, image] of images.entries()) {
      str += `
        <div class="gallery-modal__slides">
          <div class="gallery-modal__numbertext">${index + 1} / ${images.length}</div>
          <img
            src="${CloudinaryImgUrl(image.src, defaultTransforms)}"
            class="gallery-modal__img"
          >
        </div>
      `;
    }
    return str;
  }

  function getModal() {
    return `
      <div id="gallery-modal-${id}" class="gallery-modal">
        <span class="gallery-modal__close">&times;</span>
        <div class="gallery-modal__content">
          ${getGalleryModalSlides()}
          <a class="gallery-modal__prev">&#10094;</a>
          <a class="gallery-modal__next">&#10095;</a>
        </div>
      </div>
    `;
  }

  return `
    <div
      id="${id}"
      class="swiper gallery"
      data-min-slides-per-view="${minSlides ? minSlides : 1}"
      data-space-between="${spaceBetween ? spaceBetween : 16}"
      style="${getColor()}"
    >
      <div class="swiper-wrapper gallery__wrapper" style="--gallery-cols: ${columns}">
        ${getImages()}
      </div>
      <div class="swiper-pagination gallery__pagination gallery__pagination-${id}"></div>
    </div>
    ${getModal()}
  `;
}

module.exports = Gallery;
