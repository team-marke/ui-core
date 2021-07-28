/**
 * Masthead Slider using Swiper API.
 * Read more about the API at @link https://swiperjs.com/api/
 */

import Swiper, { Pagination, Navigation, EffectFade } from 'swiper';

class MastheadSlider {
  constructor(...args) {
    this.Swiper = this.initSlider(args);
  }
  initSlider(args) {
    let sliderContainer;
    let swiperParams;
    Swiper.use([Pagination, Navigation, EffectFade]);
    if (args.length === 1) {
      sliderContainer = args[0];
      swiperParams = {
        slidesPerView: 1,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        effect: 'fade',
        fadeEffect: {
          crossFade: true,
        },
        autoHeight: true,
        simulateTouch: false,
        loop: false,
        breakpoints: {
          0: {
            navigation: false,
          },
          992: {
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
          },
        },
      };
    } else {
      [sliderContainer, swiperParams] = args;
    }
    return new Swiper(sliderContainer, swiperParams);
  }
}

export { MastheadSlider };
