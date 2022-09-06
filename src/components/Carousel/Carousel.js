import Swiper, { Navigation, Pagination } from 'swiper';

(() => {
  Swiper.use([Navigation, Pagination]);
  Array.from(document.querySelectorAll('.carousel')).forEach((carousel) => {
    const minSlidesPerView = carousel.dataset.minSlidesPerView ? carousel.dataset.minSlidesPerView : 1;
    const maxSlidesPerView = carousel.dataset.maxSlidesPerView ? carousel.dataset.maxSlidesPerView : 3;
    const spaceBetween = carousel.dataset.spaceBetween ? parseInt(carousel.dataset.spaceBetween) : 16;
    const id = carousel.id
    new Swiper(carousel.querySelector('.carousel__container'), {
      pagination: {
        el: `.carousel__pagination-${id}`,
        clickable: true,
      },
      slidesPerView: minSlidesPerView,
      spaceBetween: spaceBetween,
      breakpoints: {
        992: {
          slidesPerView: maxSlidesPerView,
          navigation: {
            nextEl: `.carousel__button-next-${id}`,
            prevEl: `.carousel__button-prev-${id}`,
          },
        },
      },
    });
  });
})();
