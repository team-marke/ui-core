import Swiper, { Navigation, Pagination } from 'swiper';

(() => {
  Swiper.use([Navigation, Pagination]);
  Array.from(document.querySelectorAll('.playlist')).forEach((playlist) => {
    const id = playlist.id;
    new Swiper(playlist, {
      slidesPerView: 1.5,
      centeredSlides: true,
      loop: true,
      pagination: {
        el: `.playlist__pagination-${id}`,
        clickable: true,
      },
      breakpoints: {
        992: {
          navigation: {
            nextEl: `.playlist__button-next-${id}`,
            prevEl: `.playlist__button-prev-${id}`,
          },
        },
      },
    });
  });
})();
