const CloudinaryImgUrl = require('../../core-components/CloudinaryImgUrl');

function Masthead(content, { image, imageMobile, overlay }) {
  const defaultTransforms = {
    fetch_format: 'auto',
    quality: 'auto',
    crop: 'thumb',
  };

  function getOverlay() {
    if (!overlay) return '';
    return `
      <div class="masthead__overlay" style="--masthead-overlay-bg: ${overlay};"></div>
    `;
  }

  function getExactHeight(ogWidth, ogHeight, customWidth) {
    return Math.round(customWidth / (ogWidth / ogHeight));
  }

  function getImage() {
    return `
      <img
        class="masthead__image"
        alt="${image.alt}"
        width="${image.width}"
        height="${image.height}"
        src="${CloudinaryImgUrl(image.src, { ...defaultTransforms, width: image.width, height: image.height })}"
        srcset="
          ${CloudinaryImgUrl(image.src, {
            ...defaultTransforms,
            width: 1440,
            height: getExactHeight(image.width, image.height, 1440),
          })} 1440w,
          ${CloudinaryImgUrl(image.src, {
            ...defaultTransforms,
            width: 1920,
            height: getExactHeight(image.width, image.height, 1920),
          })} 1920w,
          ${CloudinaryImgUrl(image.src, {
            ...defaultTransforms,
            width: 2560,
            height: getExactHeight(image.width, image.height, 2560),
          })} 2560w
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
        src="${CloudinaryImgUrl(imageMobile.src, {
          ...defaultTransforms,
          width: imageMobile.width,
          height: imageMobile.height,
        })}"
        srcset="
          ${CloudinaryImgUrl(imageMobile.src, {
            ...defaultTransforms,
            width: 375,
            height: getExactHeight(imageMobile.width, imageMobile.height, 375),
          })} 375w,
          ${CloudinaryImgUrl(imageMobile.src, {
            ...defaultTransforms,
            width: 425,
            height: getExactHeight(imageMobile.width, imageMobile.height, 425),
          })} 425w,
          ${CloudinaryImgUrl(imageMobile.src, {
            ...defaultTransforms,
            width: 768,
            height: getExactHeight(imageMobile.width, imageMobile.height, 768),
          })} 768w
        "
      >
    `;
  }

  return `
    <div class="masthead">
    ${getImage()}
    ${getImageMobile()}
    ${getOverlay()}
    <div class="masthead__content">
    ${content}
    </div>
    </div>
  `;
}

module.exports = Masthead;
