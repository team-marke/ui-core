require('dotenv').config();
const UserConfig = require('@11ty/eleventy/src/UserConfig');
const glob = require('fast-glob');
const path = require('path');
const fs = require('fs');
const del = require('del');
const rssPlugin = require('@11ty/eleventy-plugin-rss');
const eleventyNavigation = require('@11ty/eleventy-navigation');
const Nunjucks = require('nunjucks');

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
  if (process.env.ELEVENTY_ENV == 'development') {
    global.nunjucksEnvironment = new Nunjucks.Environment(
      new Nunjucks.FileSystemLoader('src/layouts', { watch: true, noCache: false })
    );
  } else {
    global.nunjucksEnvironment = new Nunjucks.Environment(new Nunjucks.FileSystemLoader('src/layouts'));
  }
  eleventyConfig.setLibrary('njk', global.nunjucksEnvironment);

  // Eleventy config dir options
  const dirs = {
    input: 'src',
    output: 'dist',
    data: 'data/global',
    layouts: 'layouts',
  };

  // Add watch targets
  eleventyConfig.addWatchTarget('./src/filters/');
  eleventyConfig.addWatchTarget('./src/shortcodes/');
  eleventyConfig.addWatchTarget('./src/transforms/');
  eleventyConfig.addWatchTarget('./src/collections/');

  // Dynamically get the path for all project filters, shortcodes, tranforms, collections and layouts
  const paths = {
    filters: path.join(process.cwd(), './src/filters/*.js'),
    shortcodes: path.join(process.cwd(), './src/shortcodes/*.js'),
    transforms: path.join(process.cwd(), './src/transforms/*.js'),
    collections: path.join(process.cwd(), './src/collections/*.js'),
    layouts: path.join(process.cwd(), './src/layouts/*.njk'),
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

  // Add eleventy plugins
  eleventyConfig.addPlugin(rssPlugin);
  eleventyConfig.addPlugin(eleventyNavigation);

  // Opts in to a full deep merge when combining the Data Cascade
  eleventyConfig.setDataDeepMerge(true);

  // robots.txt passthrough
  eleventyConfig.addPassthroughCopy('src/robots.txt');

  // Setup 404 for browsersync live reload on development environments
  if (process.env.ELEVENTY_ENV == 'development') {
    eleventyConfig.setBrowserSyncConfig({
      https: true,
      open: 'local',
      callbacks: {
        ready: (err, browserSync) => {
          const content_404 = fs.readFileSync('dist/404.html');
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
