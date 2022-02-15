require('dotenv').config();
const UserConfig = require('@11ty/eleventy/src/UserConfig');
const glob = require('fast-glob');
const path = require('path');
const fs = require('fs');
const del = require('del');
const rssPlugin = require('@11ty/eleventy-plugin-rss');
const navigationPlugin = require('@11ty/eleventy-navigation');
const Nunjucks = require('nunjucks');
const mkuiPlugin = require('./tools/plugins/11ty');
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

/**
 * Eleventy configuration
 * @param {UserConfig} eleventyConfig Config API
 */
module.exports = (eleventyConfig) => {
  // Clean previous builds on production environments
  if (process.env.ELEVENTY_ENV == 'production') {
    const dirToClean = ['dist/**', '!dist/admin/**', '!dist/assets/**'];
    del(dirToClean);
  }

  // Setup nunjucks environment instance for template layouts
  const commonLoaderOptions = {
    trimBlocks: true,
    lstripBlocks: true,
  }
  if (process.env.ELEVENTY_ENV == 'development') {
    global.nunjucksEnvironment = new Nunjucks.Environment([
      new Nunjucks.FileSystemLoader('site/src/layouts', { ...commonLoaderOptions, watch: true }),
      new Nunjucks.FileSystemLoader('components', { ...commonLoaderOptions, watch: true }),
    ]);
  } else {
    global.nunjucksEnvironment = new Nunjucks.Environment([
      new Nunjucks.FileSystemLoader('site/src/layouts', { ...commonLoaderOptions }),
      new Nunjucks.FileSystemLoader('components', { ...commonLoaderOptions }),
    ]);
  }
  eleventyConfig.setLibrary('njk', global.nunjucksEnvironment);

  // Add eleventy plugins
  eleventyConfig.addPlugin(rssPlugin);
  eleventyConfig.addPlugin(navigationPlugin);
  eleventyConfig.addPlugin(mkuiPlugin);
  eleventyConfig.addPlugin(syntaxHighlight);

  // Eleventy config dir options
  const dirs = {
    input: 'site/src',
    output: 'site/dist',
    data: 'data/global',
    layouts: 'layouts',
  };

  // Add watch targets
  eleventyConfig.addWatchTarget('./site/src/filters/');
  eleventyConfig.addWatchTarget('./site/src/shortcodes/');
  eleventyConfig.addWatchTarget('./site/src/transforms/');
  eleventyConfig.addWatchTarget('./site/src/collections/');
  eleventyConfig.addWatchTarget('components/');
  eleventyConfig.addWatchTarget('tools/');

  // Dynamically get the path for all project filters, shortcodes, tranforms, collections and layouts
  const paths = {
    filters: path.join(process.cwd(), './site/src/filters/**/*.js'),
    shortcodes: path.join(process.cwd(), './site/src/shortcodes/**/*.js'),
    transforms: path.join(process.cwd(), './site/src/transforms/**/*.js'),
    collections: path.join(process.cwd(), './site/src/collections/**/*.js'),
    layouts: path.join(process.cwd(), './site/src/layouts/**/*.njk'),
  };

  // Returns an array of matching entries for the paths
  const layouts = glob.sync(paths.layouts);
  const filters = glob.sync(paths.filters);
  const shortcodes = glob.sync(paths.shortcodes);
  const transforms = glob.sync(paths.transforms);
  const collections = glob.sync(paths.collections);

  // Add aliases for each found layouts
  layouts.forEach((layout) => eleventyConfig.addLayoutAlias(path.basename(layout, '.njk'), path.basename(layout)));
  // Add all found filters
  filters.forEach((filter) => eleventyConfig.addFilter(path.basename(filter, '.js'), require(filter)));
  // Add all found shortcodes
  shortcodes.forEach((shortcode) => eleventyConfig.addShortcode(path.basename(shortcode, '.js'), require(shortcode)));
  // Add all found transforms
  transforms.forEach((transform) => eleventyConfig.addTransform(path.basename(transform, '.js'), require(transform)));
  // Add all found collections
  collections.forEach((collection) => eleventyConfig.addCollection(path.basename(collection, '.js'), require(collection)));

  // Opts in to a full deep merge when combining the Data Cascade
  eleventyConfig.setDataDeepMerge(true);

  // robots.txt passthrough
  eleventyConfig.addPassthroughCopy('./site/src/robots.txt');

  // Setup 404 for browsersync live reload on development environments
  if (process.env.ELEVENTY_ENV == 'development') {
    eleventyConfig.setBrowserSyncConfig({
      https: true,
      open: 'local',
      callbacks: {
        ready: (err, browserSync) => {
          const content_404 = fs.readFileSync('./site/dist/404.html');
          browserSync.addMiddleware('*', (req, res) => {
            res.write(content_404);
            res.end();
          });
        },
      },
    });
  }

  return {
    dir: dirs,
    passthroughFileCopy: true,
  };
};
