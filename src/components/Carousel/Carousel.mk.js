function Carousel(content, { slides, minSlides, maxSlides, spaceBetween, color }) {
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
      data-min-slides-per-view="${minSlides}"
      data-max-slides-per-view="${maxSlides}"
      data-space-between="${spaceBetween ? spaceBetween : 16}"
      ${getColor()}
    >
      <div class="swiper-container carousel__container">
        <div class="swiper-wrapper carousel__wrapper">
          ${getSlides()}
        </div>
      </div>
      <div class="swiper-button-prev carousel__button-prev"></div>
      <div class="swiper-button-next carousel__button-next"></div>
      <div class="swiper-pagination carousel__pagination"></div>
    </div>
  `;
}

module.exports = Carousel;
