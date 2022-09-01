import Swiper, { Pagination } from 'swiper';

(() => {
  Array.from(document.querySelectorAll('.grid-responsive')).forEach((gridResponsive) => {
    const slidesPerViewMobile = gridResponsive.dataset.minColumns ? gridResponsive.dataset.minColumns : 1;
    const slidesPerViewDesktop = gridResponsive.dataset.maxColumns ? gridResponsive.dataset.maxColumns : 3;
    const slidesTotal = gridResponsive.dataset.totalSlides;
    const slidesPerColumn = Math.ceil(slidesTotal / slidesPerViewDesktop);
    const spaceBetween = gridResponsive.dataset.spaceBetween ? parseInt(gridResponsive.dataset.spaceBetween) : 16;
    Swiper.use([Pagination]);
    new Swiper(gridResponsive.querySelector('.swiper-container'), {
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
      },
      spaceBetween: spaceBetween,
      breakpoints: {
        0: {
          slidesPerView: slidesPerViewMobile,
          centeredSlides: false,

        },
        992: {
          slidesPerView: slidesPerViewDesktop,
          slidesPerColumn: slidesPerColumn,
          centeredSlides: false,
        },
      },
    });
  });
})();
