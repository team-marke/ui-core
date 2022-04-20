/**
 * Grid responsive slider using Swiper API.
 * Read more about the API at @link https://swiperjs.com/api/
 */
import Swiper, { Pagination, Autoplay } from 'swiper';

class GridResponsiveSlider {
  constructor(...args) {
    this.Swiper = this.initSlider(args);
  }

  initSlider(args) {
    let sliderContainer;
    let swiperParams;
    let slidesPerViewMobile;
    let slidesPerViewDesktop;
    let slidesTotal;
    let slidesPerColumn;
    Swiper.use([Pagination, Autoplay]);
    if (args.length === 1) {
      sliderContainer = args[0];
      slidesPerViewMobile = sliderContainer.dataset.minColumns ? sliderContainer.dataset.minColumns : 1;
      slidesPerViewDesktop = sliderContainer.dataset.maxColumns ? sliderContainer.dataset.maxColumns : 3;
      slidesTotal = sliderContainer.dataset.total ? sliderContainer.dataset.total : 3;
      slidesPerColumn = Math.ceil(slidesTotal / slidesPerViewDesktop);
      swiperParams = {
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          dynamicBullets: true,
        },
        simulateTouch: false,
        observer: true,
        observeParents: true,
        spaceBetween: 0,
        breakpoints: {
          0: {
            slidesPerView: parseFloat(slidesPerViewMobile) + 0.33,
            centeredSlides: false,
            cssMode: true,
          },
          992: {
            slidesPerView: slidesPerViewDesktop,
            slidesPerColumn: slidesPerColumn,
            centeredSlides: false,
            slidesPerColumnFill: 'row',
          },
        },
      };
    } else {
      [sliderContainer, swiperParams] = args;
    }
    return new Swiper(sliderContainer, swiperParams);
  }
}

export default GridResponsiveSlider;
