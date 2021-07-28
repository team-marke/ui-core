const { URL } = require('url');
const path = require('path');
require('dotenv').config()
const cloudinary = require('cloudinary');

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

/**
 * Creates image url with transformations/url opts using the Cloudinary API.
 * 
 * @param {String} source Filename or File URL
 * @param {cloudinary.TransformationOptions | cloudinary.ConfigAndUrlOptions} opts
 * @returns {string} Image full url to Cloudinary.
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

  try {
    let url = new URL(source);
    const filePath = path.dirname(url.pathname);
    const searchTerm = '/upload/';
    const index = filePath.indexOf(searchTerm);
    let folder = filePath.substr(index + searchTerm.length) // gets a subtring url from the 'upload' term.

    public_path = stripVersionNumber(folder) + path.basename(url.pathname);

    if (url.hostname === 'res.cloudinary.com') {
      imageUrl = cloudinary.v2.url(public_path, {  secure: true, ...opts });
    } else {
      imageUrl = source;
    }
  } catch (err) {
    imageUrl = source;
  }
  return imageUrl;
};