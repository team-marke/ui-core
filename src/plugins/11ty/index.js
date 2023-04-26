const glob = require('glob');
const path = require('path');

module.exports = function (eleventyConfig) {
  // Dynamically search and add all core-components
  const coreComponents = glob.sync(path.resolve(__dirname, '../../core-components/**/*.js'));
  for (const component of coreComponents) {
    eleventyConfig.addShortcode(path.parse(component).name, require(component));
  }

  // Dynamically search and add all components
  const components = glob.sync(path.resolve(__dirname, '../../components/**/*.mk.js'));
  for (const component of components) {
    const componentName = path.parse(component).base.replace(/\.mk\.js/, "");
    eleventyConfig.addPairedShortcode(componentName, require(component));
  }

  // Dynamically search and add all js filters
  const filters = glob.sync(path.resolve(__dirname, '../../filters/**/*.js'));
  filters.forEach((filter) => eleventyConfig.addFilter(path.basename(filter, '.js'), require(filter)));

  // Dynamically search and add all js transforms
  const transforms = glob.sync(path.resolve(__dirname, '../../transforms/**/*.js'));
  transforms.forEach((transform) => eleventyConfig.addTransform(path.basename(transform, '.js'), require(transform)));
};
