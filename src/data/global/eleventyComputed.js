const metadata = require('./metadata.json');
const site = require('./site.json');

module.exports = {
  global: {
    page_absolute_url: (data) => site.protocol + '://' + site.domain + data.page.url,
  },
  metadata: {
    title: (data) => {
      if (data.metadata && data.metadata.title) {
        return data.metadata.title;
      } else {
        return metadata.title;
      }
    },
    description: (data) => {
      if (data.metadata && data.metadata.description) {
        return data.metadata.description;
      } else {
        return metadata.description;
      }
    },
  },
  schema: {
    main: {
      name: (data) => {
        if (data.metadata && data.metadata.title) {
          return data.metadata.title;
        } else {
          return metadata.title;
        }
      },
      description: (data) => {
        if (data.metadata && data.metadata.description) {
          return data.metadata.description;
        } else {
          return metadata.description;
        }
      },
      '@id': (data) => data.global.site_absolute_url + data.page.url + '#webpage',
      url: (data) => data.global.site_absolute_url + data.page.url,
    },
  },
};
