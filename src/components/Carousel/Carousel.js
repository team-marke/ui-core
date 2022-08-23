import Swiper, { Navigation, Pagination } from 'swiper';

(() => {
  Array.from(document.querySelectorAll('.carousel')).forEach((carousel) => {
    const minSlidesPerView = carousel.dataset.minSlidesPerView ? carousel.dataset.minSlidesPerView : 1;
    const maxSlidesPerView = carousel.dataset.maxSlidesPerView ? carousel.dataset.maxSlidesPerView : 3;
    const spaceBetween = carousel.dataset.spaceBetween ? parseInt(carousel.dataset.spaceBetween) : 16;
    Swiper.use([Navigation, Pagination]);
    new Swiper(carousel.querySelector('.swiper-container'), {
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      slidesPerView: minSlidesPerView,
      spaceBetween: spaceBetween,
      breakpoints: {
        992: {
          slidesPerView: maxSlidesPerView,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        },
      },
    });
  });
})();
