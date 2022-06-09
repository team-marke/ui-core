/**
 * Masthead Slider component
 */

import Swiper, { Pagination, Navigation, EffectFade, Autoplay } from 'swiper';

class MastheadSlider {
  constructor(el) {
    this.el = el;
    this.autoplay = this.el.dataset.autoplay;
    this.Swiper = this.initSlider(el);
  }

  initSlider(el) {
    let sliderContainer;
    let swiperParams;
    Swiper.use([Pagination, Navigation, EffectFade, Autoplay]);
    sliderContainer = el;
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
      autoplay: this.autoplay ? { delay: this.autoplay }: false,
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
    return new Swiper(sliderContainer, swiperParams);
  }
}

export default MastheadSlider;
