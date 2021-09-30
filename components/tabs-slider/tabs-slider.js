/**
 * Tabs Slider.
 * Uses Swiper API. Read more about the API at @link https://swiperjs.com/api/
 */

import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';

class TabsSlider {
  constructor(...args) {
    this.Swiper = this.initSlider(args);
  }
  initSlider(args) {
    let slider, swiperParams;
    Swiper.use([TabsSlider, Navigation, Pagination, Autoplay]);
    if (args.length === 1) {
      slider = args[0];
      swiperParams = {
        observer: true,
        observeParents: true,
        spaceBetween: 0,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          type: 'bullets',
        },
        breakpoints: {
          0: {
            navigation: false,
            slidesPerView: 1.25,
            cssMode: true,
          },
          992: {
            autoHeight: true,
            navigation: {
              prevEl: slider.querySelector('.swiper-button-prev'),
              nextEl: slider.querySelector('.swiper-button-next'),
            },
            pagination: {
              renderBullet: function (index, className) {
                let tabTitle = this.slides[index].dataset.tabTitle;
                return `
                <div class="tabs-slider__tab ${className}">
                  <span>${tabTitle}</span>
                </div>`;
              },
            },
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

export { TabsSlider };
