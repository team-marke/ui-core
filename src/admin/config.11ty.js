const fs = require('fs');
const yaml = require('js-yaml');
const global = require('../data/global/global.js');
const site = require('../data/global/site');
const packageJson = require('../../package.json');
const { URL } = require('url');

class CMSConfig {
  data() {
    return {
      permalink: '/admin/config.yml',
    };
  }
  render(data) {
    let config = fs.readFileSync(__dirname + '/config.base.yml', 'utf8');
    let configObj = yaml.safeLoadAll(config);
    configObj[0].site_url = global.site_absolute_url;
    let repoUrl = new URL(packageJson.repository.url);
    configObj[0].backend.repo = repoUrl.pathname.replace(/^\/|\/$/g, '');
    if (process.env.ELEVENTY_ENV == 'development') {
      configObj[0].backend.branch = 'develop';
    }
    if (process.env.ELEVENTY_ENV == 'staging') {
      configObj[0].backend.branch = 'staging';
    }
    configObj[0].media_library.config.cloud_name = process.env.CLOUDINARY_CLOUD_NAME;
    configObj[0].media_library.config.api_key = process.env.CLOUDINARY_KEY;
    configObj[0].logo_url = site.logo;
    return yaml.dump(configObj[0]);
  }
}
module.exports = CMSConfig;
