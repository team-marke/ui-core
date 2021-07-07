const { URL } = require('url');
const path = require('path');
const cloudinary = require('cloudinary');
require('dotenv').config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

/**
 * Creates image markup with transformations/url using the Cloudinary API.
 *
 * @param {string} source Filename or File URL.
 * @param {cloudinary.ImageTransformationAndTagsOptions} opts
 * @returns {string} <img> markup tag.
 */
module.exports = (source, opts) => {
  let imageUrl = '';
  let public_path = '';

  /**
   * Returns a striped path without '.../V123456789/...'.
   *
   * @param {String} fullPath
   * @returns {string} Striped path.
   */
  const stripVersionNumber = (fullPath) => {
    const versionLength = fullPath.indexOf('/') + 1;
    return fullPath.substr(versionLength) + '/';
  };

  let filename = '';
  try {
    let url = new URL(source);
    const filePath = path.dirname(url.pathname);
    const searchTerm = '/upload/';
    const index = filePath.indexOf(searchTerm);
    let folder = filePath.substr(index + searchTerm.length); // gets a subtring url from the 'upload' term.

    public_path = stripVersionNumber(folder) + path.basename(url.pathname);

    if (url.hostname === 'res.cloudinary.com') {
      filename = public_path;
    } else {
      let attributesString = '';
      for (const [key, value] of Object.entries(opts)) {
        attributesString += ` ${key}="${value}"`;
      }
      return `
          <img src="${source}"${attributesString}>
        `;
    }
  } catch (err) {
    filename = source;
  }
  let imageHtml = cloudinary.v2.image(filename, { secure: true, ...opts });
  return imageHtml;
};
