function GridResponsive(content, { slides, id, minSlides, maxSlides, spaceBetween, color }) {
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
    return `--swiper-theme-color:${color}; --swiper-navigation-color:${color}`;
  }

  return `
    <div
      id="${id}"
      class="swiper grid-responsive"
      data-min-slides-per-view="${minSlides}"
      data-space-between="${spaceBetween ? spaceBetween : 16}"
      style="--grid-responsive-max-columns: ${maxSlides ? maxSlides : 3}; ${getColor()}"
    >
    <div class="swiper-wrapper grid-responsive__wrapper">
      ${getSlides()}
    </div>
      <div class="swiper-pagination grid-responsive__pagination grid-responsive__pagination-${id}"></div>
    </div>
  `;
}

module.exports = GridResponsive;
