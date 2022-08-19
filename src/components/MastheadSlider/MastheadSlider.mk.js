function MastheadSlider(content, { mastheads }) {
  function getSlides() {
    let str = '';
    for (const masthead of mastheads) {
      str += `
        <div class="swiper-slide">${masthead}</div>
      `;
    }
    return str;
  }

  return `
    <div class="swiper masthead-slider">
      <div class="swiper-wrapper masthead-slider__wrapper">
        ${getSlides()}
      </div>
      <div class="swiper-button-prev masthead-slider__button-prev"></div>
      <div class="swiper-button-next masthead-slider__button-next"></div>
      <div class="swiper-pagination masthead-slider__pagination"></div>
    </div>
  `;
}

module.exports = MastheadSlider;
