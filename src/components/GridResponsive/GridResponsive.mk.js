function GridResponsive(content, { slides, minColumns, maxColumns, slidesTotal, spaceBetween, color }) {
  function getSlides() {
    let str = '';
    for (const slide of slides) {
      str += `
        <div class="swiper-slide grid-responsive__slide">
          ${slide}
        </div>
      `;
    }
    return str;
  }

  function getColor() {
    if (!color) return '';
    return `
      style="--swiper-theme-color:${color}; --swiper-pagination-color:${color}"
    `;
  }

  return `
    <div
      class="swiper grid-responsive"
      data-min-columns="${minColumns}"
      data-max-columns="${maxColumns}"
      data-total-slides="${slidesTotal}"
      data-space-between="${spaceBetween ? spaceBetween : 16}"
      ${getColor()}
    >
      <div class="swiper-container grid-responsive__container">
        <div class="swiper-wrapper grid-responsive__wrapper">
          ${getSlides()}
        </div>
      </div>
      <div class="swiper-pagination carousel__pagination"></div>
    </div>
  `;
}

module.exports = GridResponsive;
