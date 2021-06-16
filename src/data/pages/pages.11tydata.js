const metadata = require('../../data/global/metadata.json');
const eleventyComputed = require('../../data/global/eleventyComputed');
const EleventyNavigation = require('@11ty/eleventy-navigation');

module.exports = {
  eleventyComputed: {
    ...eleventyComputed,
    schema: {
      main: {
        name: (data) => {
          if (data.metadata?.title) {
            return data.metadata.title;
          } else if (data.title) {
            return data.title;
          } else {
            return metadata.title;
          }
        },
        description: (data) => {
          if (data.metadata?.description) {
            return data.metadata.description;
          } else {
            return metadata.description;
          }
        },
        '@id': (data) => data.global.site_absolute_url + data.page.url + '#webpage',
        url: (data) => data.global.site_absolute_url + data.page.url,
        breadcrumb: (data) => {
          // Declare dependencies
          // See why at https://www.11ty.dev/docs/data-computed/#declaring-your-dependencies
          data.collections.page;
          data.permalink;
          data.eleventyNavigation;

          if (
            data.page.url &&
            data.collections &&
            data.collections.page &&
            data.eleventyNavigation &&
            data.eleventyNavigation.parent
          ) {
            let breadcrumbList = {
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [],
            };
            let breadcrumbData = EleventyNavigation.navigation.findBreadcrumbs(
              data.collections.page,
              data.eleventyNavigation.key
            );
            let posLast = 0;
            for (const [pos, breadcrumbItem] of breadcrumbData.entries()) {
              breadcrumbList.itemListElement.push({
                '@type': 'ListItem',
                name: breadcrumbItem.title,
                item: breadcrumbItem.url ? data.global.site_absolute_url + breadcrumbItem.url : data.global.site_absolute_url + '#',
                position: pos,
              });
              posLast = pos;
            }
            let currentItem = data.page.url ? data.global.site_absolute_url + data.page.url : currentPageTitle;
            breadcrumbList.itemListElement.push({
              '@type': 'ListItem',
              position: ++posLast,
              name: data.eleventyNavigation.title,
              item: currentItem,
            });
            return breadcrumbList;
          } else {
            return null;
          }
        },
      },
    },
  },
};
