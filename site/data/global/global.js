require('dotenv').config();
const site = require('./site.json');
const package = require('../../../package.json');

module.exports = {
  random() {
    const segment = () => {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return `${segment()}-${segment()}-${segment()}`;
  },
  site_version: package.version,
  now: Date.now(),
  environment: process.env.ELEVENTY_ENV,
  site_absolute_url:
    process.env.ELEVENTY_ENV == 'development' ? 'https://localhost:8080' : site.protocol + '://' + site.domain,
  admin_absolute_url:
    process.env.ELEVENTY_ENV == 'development'
      ? 'https://localhost:8080/admin/'
      : site.protocol + '://' + site.domain + '/admin/',
  oauth_consumer_key: process.env.ELEVENTY_ENV == 'development' ? 'uRssKgdfv2dVffPQBB' : '3GaR9br4Mb5h5NZtBb',
};
