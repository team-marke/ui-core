/**
 * Carousel Slider.
 * Uses Swiper API. Read more about the API at @link https://swiperjs.com/api/
 */

import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';

class Carousel {
  constructor(...args) {
    this.Swiper = this.initSlider(args);
  }
  initSlider(args) {
    let slider, minSlidesPerView, maxSlidesPerView, swiperParams;
    Swiper.use([Carousel, Navigation, Pagination, Autoplay]);
    if (args.length === 1) {
      slider = args[0];
      minSlidesPerView = slider.dataset.minSlidesPerView ? slider.dataset.minSlidesPerView : 1;
      maxSlidesPerView = slider.dataset.maxSlidesPerView ? slider.dataset.maxSlidesPerView : 3;
      swiperParams = {
        observer: true,
        observeParents: true,
        spaceBetween: 0,
        breakpoints: {
          0: {
            navigation: false,
            slidesPerView: parseFloat(minSlidesPerView) + 0.25,
            cssMode: true,
            pagination: {
              el: slider.querySelector('.swiper-pagination'),
              clickable: true,
              dynamicBullets: true,
            },
          },
          992: {
            navigation: {
              prevEl: slider.querySelector('.swiper-button-prev'),
              nextEl: slider.querySelector('.swiper-button-next'),
            },
            slidesPerView: parseFloat(maxSlidesPerView),
          },
        },
        simulateTouch: false,
      };
    } else {
      [slider, swiperParams] = args;
    }
    return new Swiper(slider.querySelector('.swiper-container'), swiperParams);
  }
}

export { Carousel };
