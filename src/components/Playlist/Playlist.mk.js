const YTVideo = require('../YTVideo/YTVideo.mk');
const IdGenerator = require('../../helpers/idGenerator');

function Playlist(content, { ids }) {
  const id = IdGenerator();

  function getSlides() {
    let str = '';
    for (const id of ids) {
      str += `
        <div class="swiper-slide playlist__slide">${YTVideo(false, { id: id })}</div>
      `;
    }
    return str;
  }

  return `
    <div class="swiper playlist" id=${id}>
      <div class="swiper-wrapper playlist__wrapper">
        ${getSlides()}
      </div>
      <div class="swiper-button-prev playlist__button-prev playlist__button-prev-${id}"></div>
      <div class="swiper-button-next playlist__button-next playlist__button-next-${id}"></div>
      <div class="swiper-pagination playlist__pagination playlist__pagination-${id}"></div>
    </div>
  `;
}

module.exports = Playlist;
