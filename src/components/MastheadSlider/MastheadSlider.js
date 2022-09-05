import Swiper, { Navigation, Pagination, EffectFade } from 'swiper';

(() => {
  Array.from(document.querySelectorAll('.masthead-slider')).forEach((masthead) => {
    Swiper.use([Navigation, Pagination, EffectFade]);
    new Swiper(masthead, {
      effect: 'fade',
      fadeEffect: { crossFade: true },
      autoHeight: true,
      slidesPerView: 1,
      pagination: {
        el: '.masthead-slider__pagination',
        clickable: true,
      },
      breakpoints: {
        992: {
          navigation: {
            nextEl: '.masthead-slider__button-next',
            prevEl: '.masthead-slider__button-prev',
          },
        },
      },
    });
  });
})();
