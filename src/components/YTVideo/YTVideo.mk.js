const CloudinaryImgUrl = require('../../core-components/CloudinaryImgUrl');

function YTVideo(content, { id, alt, customThumbnail, maxwidth }) {
  function getMaxwidth() {
    if (!maxwidth) return '';
    return `style="max-width: ${maxwidth}px"`;
  }

  function getImage() {
    if (customThumbnail) {
      const defaultTransforms = { fetch_format: 'auto', quality: 'auto', crop: 'thumb', width: 1280, height: 720 };
      return `
        <picture>
          <source media="(min-width: 768px)" srcset="${CloudinaryImgUrl(customThumbnail, defaultTransforms)}">
          <source srcset="${CloudinaryImgUrl(customThumbnail, {
            ...defaultTransforms,
            width: 480,
            height: 360,
          })}">
          <img
            alt="${alt}"
            src="${CloudinaryImgUrl(customThumbnail, defaultTransforms)}"
            class="yt-video__thumb"
            loading="lazy"
            width="1280"
            height="720"
            ${getMaxwidth()}
          >
        </picture>
      `;
    }
    return `
      <picture>
        <source media="(min-width: 768px)" srcset="https://i.ytimg.com/vi_webp/${id}/maxresdefault.webp" type="image/webp">
        <source media="(min-width: 768px)" srcset="https://i.ytimg.com/vi/${id}/maxresdefault.jpg" type="image/jpeg">
        <source srcset="https://i.ytimg.com/vi_webp/${id}/hqdefault.webp" type="image/webp">
        <source srcset="https://i.ytimg.com/vi/${id}/hqdefault.jpg" type="image/jpeg">
        <img
          src="https://i.ytimg.com/vi/${id}/hqdefault.jpg"
          class="yt-video__thumb"
          loading="lazy"
          alt="${alt}"
          width="1280"
          height="720"
          ${getMaxwidth()}
        >
      </picture>
    `;
  }

  return `
    <a
      href="#"
      class="yt-video"
      data-video-id="${id}"
    >
      ${getImage()}
      <i class="yt-video__play fas fa-play-circle"></i>
    </a>
    `;
}

module.exports = YTVideo;
