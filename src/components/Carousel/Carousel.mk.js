function Carousel(content, { slides, id, minSlides, maxSlides, spaceBetween, autoHeight, color }) {
  function getSlides() {
    let str = '';
    for (const slide of slides) {
      str += `
        <div class="swiper-slide carousel__slide">
          ${slide}
        </div>
      `;
    }
    return str;
  }

  function getColor() {
    if (!color) return '';
    return `
      style="--swiper-theme-color:${color}; --swiper-navigation-color:${color}"
    `;
  }

  return `
    <div
      class="swiper carousel"
      id="${id}"
      data-min-slides-per-view="${minSlides}"
      data-max-slides-per-view="${maxSlides}"
      ${autoHeight ? 'data-auto-height' : ''}
      ${getColor()}
    >
      <div class="swiper-container carousel__container">
        <div class="swiper-wrapper carousel__wrapper">
          ${getSlides()}
        </div>
      </div>
      <div class="swiper-button-prev carousel__button-prev carousel__button-prev-${id}"></div>
      <div class="swiper-button-next carousel__button-next carousel__button-next-${id}"></div>
      <div class="swiper-pagination carousel__pagination carousel__pagination-${id}"></div>
    </div>
  `;
}

module.exports = Carousel;
