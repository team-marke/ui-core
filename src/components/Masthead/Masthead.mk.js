const CloudinaryImgUrl = require('../../core-components/CloudinaryImgUrl');

function Masthead(content, { image, imageMobile }) {

  const defaultTransforms = {
    fetch_format: 'auto',
    quality: 'auto',
    crop: 'thumb',
  };

  function getImage() {
    return `
      <img
        class="masthead__image"
        alt="${image.alt}"
        width="${image.width}"
        height="${image.height}"
        src="${CloudinaryImgUrl(image.src, { ...defaultTransforms, width: image.width, height: image.height })}"
        srcset="
          ${CloudinaryImgUrl(image.src, { ...defaultTransforms, width: 1440, height: image.height })} 1440w,
          ${CloudinaryImgUrl(image.src, { ...defaultTransforms, width: 1920, height: image.height })} 1920w,
          ${CloudinaryImgUrl(image.src, { ...defaultTransforms, width: 2560, height: image.height })} 2560w
        "
      >
    `;
  }

  function getImageMobile() {
    return `
      <img
        class="masthead__image-mobile"
        alt="${imageMobile.alt}"
        width="${imageMobile.width}"
        height="${imageMobile.height}"
        src="${CloudinaryImgUrl(imageMobile.src, { ...defaultTransforms, width: imageMobile.width, height: imageMobile.height })}"
        srcset="
          ${CloudinaryImgUrl(imageMobile.src, { ...defaultTransforms, width: 375, height: imageMobile.height })} 375w,
          ${CloudinaryImgUrl(imageMobile.src, { ...defaultTransforms, width: 425, height: imageMobile.height })} 425w,
          ${CloudinaryImgUrl(imageMobile.src, { ...defaultTransforms, width: 768, height: imageMobile.height })} 768w
        "
      >
    `;
  }

  return `
    <div class="masthead">
      ${getImage()}
      ${getImageMobile()}
      <div class="masthead__content">
        ${content}
      </div>
    </div>
  `;
}

module.exports = Masthead;
