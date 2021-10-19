const UserConfig = require('@11ty/eleventy/src/UserConfig');
const glob = require('fast-glob');
const path = require('path');

/**
 * Marke UI 11ty plugin
 * @param {UserConfig} eleventyConfig Config API
 */
module.exports = function (eleventyConfig) {
  // Dynamically search and add all js filters
  const filters = glob.sync(path.resolve(__dirname, '../../filters/**/*.js'));
  filters.forEach((filter) => eleventyConfig.addFilter(path.basename(filter, '.js'), require(filter)));
  // Add shortcodes from utils
  eleventyConfig.addShortcode('image', require('../../utils/image'));
  eleventyConfig.addShortcode('imageUrl', require('../../utils/imageUrl'));
};
