import Swiper, { Navigation, Pagination, EffectFade } from 'swiper';

(() => {
  Array.from(document.querySelectorAll('.masthead-slider')).forEach((masthead) => {
    Swiper.use([Navigation, Pagination, EffectFade]);
    new Swiper(masthead, {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      effect: 'fade',
    });
  });
})();
