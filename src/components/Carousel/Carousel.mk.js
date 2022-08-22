import Swiper, {  Navigation, Pagination } from "swiper";

function Carousel(content, { id, pagination, orientation, autoplay, loopBoolean, minSlides, maxSlides }) {
  function getLoop() {
    return loopBoolean;
  }
  function getAutoplay() {
    return autoplay;
  }
  function getOrientation() {
    return orientation ? orientation : 'horizontal';
  }
  function getMinSlides() {
    return minSlides ? minSlides : 1;
  }
  function getMaxSlides() {
    return maxSlides ? maxSlides : 3;
  }
  function getPagination(){
    return pagination;
  }
  swiperParams = {
    modules: [Navigation, Pagination],
    direction: getOrientation(),
    loop: getLoop(),
    autoplay: getAutoplay(),
    speed: 400,

    breakpoints: {
      0: {
        navigation: false,
        slidesPerView: getMinSlides(),
        pagination: true,
      },
      992: {
        navigation: {
          nextEl: 'swiper-button-next',
          prevEl: 'swiper-button-prev',
        },
        slidesPerView: getMaxSlides(),
        pagination: getPagination(),
      },
    },
  };

  const swiper =  new Swiper('swiper', swiperParams);

  return `
    <div class="swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          ${content}
        </div>
      </div>
    </div>
  `
}

module.exports = Carousel;
