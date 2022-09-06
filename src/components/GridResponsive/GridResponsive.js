import Swiper, { Pagination } from 'swiper';

(() => {
  Swiper.use([Pagination]);
  Array.from(document.querySelectorAll('.grid-responsive')).forEach((gridResponsive) => {
    const isMobile = window.matchMedia('(max-width: 991px)').matches;
    if (isMobile) {
      const minSlidesPerView = gridResponsive.dataset.minSlidesPerView ? gridResponsive.dataset.minSlidesPerView : 1;
      const spaceBetween = gridResponsive.dataset.spaceBetween ? parseInt(gridResponsive.dataset.spaceBetween) : 16;
      const id = gridResponsive.id;
      new Swiper(gridResponsive, {
        spaceBetween: spaceBetween,
        slidesPerView: minSlidesPerView,
        pagination: {
          el: `.grid-responsive__pagination-${id}`,
          clickable: true,
        },
      });
    }
  });
})();
