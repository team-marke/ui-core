require('dotenv').config()
const path = require('path');
const { URL } = require('url');
const cloudinary = require('cloudinary');

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

function CloudinaryImgUrl(source, opts) {
  let public_id = '';
  let imageUrl = '';
  try {
    let url = new URL(source);
    public_id = path.basename(url.pathname);
    if (url.hostname === 'res.cloudinary.com') {
      imageUrl = cloudinary.v2.url(public_id, { secure: true, ...opts });
    } else {
      imageUrl = source;
    }
  } catch (err) {
    imageUrl = source;
  }
  return imageUrl;
}

module.exports = CloudinaryImgUrl;
