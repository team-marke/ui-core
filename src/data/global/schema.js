const global = require('./global');
const metadata = require('./metadata');
const site = require('./site');
const organization = require('./organization');

const Organization = {
  '@context': 'https://schema.org/',
  '@type': 'Organization',
  '@id': global.site_absolute_url + '/#organization',
  ...organization,
  url: site.url,
  telephone: site.phone,
  logo: {
    '@type': 'ImageObject',
    '@id': global.site_absolute_url + '/#logo',
    inLanguage: site.locale,
    url: organization.logo.url,
    width: organization.logo.width,
    caption: organization.name,
  },
};

const WebSite = {
  '@context': 'https://schema.org/',
  '@type': 'WebSite',
  '@id': global.site_absolute_url + '/#website',
  url: global.site_absolute_url,
  name: metadata.title,
  description: metadata.description,
  inLanguage: site.locale,
  publisher: Organization,
};

const WebPage = {
  '@context': 'https://schema.org/',
  '@type': 'WebPage',
  inLanguage: site.locale,
  isPartOf: WebSite,
};

const main = WebPage;

module.exports = {
  main,
  WebPage,
  WebSite,
  Organization,
};
