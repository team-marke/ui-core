function MastheadSlider(content, { mastheads, id }) {
  function getSlides() {
    let str = '';
    for (const masthead of mastheads) {
      str += `
        <div class="swiper-slide masthead-slider__slide">${masthead}</div>
      `;
    }
    return str;
  }

  return `
    <div class="swiper masthead-slider" id=${id}>
      <div class="swiper-wrapper masthead-slider__wrapper">
        ${getSlides()}
      </div>
      <div class="swiper-button-prev masthead-slider__button-prev masthead-slider__button-prev-${id}"></div>
      <div class="swiper-button-next masthead-slider__button-next masthead-slider__button-next-${id}"></div>
      <div class="swiper-pagination masthead-slider__pagination masthead-slider__pagination-${id}"></div>
    </div>
  `;
}

module.exports = MastheadSlider;
