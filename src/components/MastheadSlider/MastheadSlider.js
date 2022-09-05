import Swiper, { Navigation, Pagination, EffectFade } from 'swiper';

(() => {
  Array.from(document.querySelectorAll('.masthead-slider')).forEach((mastheadSlider) => {
    const id = mastheadSlider.id
    Swiper.use([Navigation, Pagination, EffectFade]);
    new Swiper(mastheadSlider, {
      effect: 'fade',
      fadeEffect: { crossFade: true },
      autoHeight: true,
      slidesPerView: 1,
      pagination: {
        el: `.masthead-slider__pagination-${id}`,
        clickable: true,
      },
      breakpoints: {
        992: {
          navigation: {
            nextEl: `.masthead-slider__button-next-${id}`,
            prevEl: `.masthead-slider__button-prev-${id}`,
          },
        },
      },
    });
  });
})();
