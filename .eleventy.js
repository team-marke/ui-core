const glob = require('glob');
const path = require('path');
const navigationPlugin = require('@11ty/eleventy-navigation');
const mkuiPlugin = require('./src/plugins/11ty');
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const Nunjucks = require('nunjucks');

module.exports = (eleventyConfig) => {
  // Setup nunjucks environment instance for template layouts
  const commonLoaderOptions = {
    trimBlocks: true,
    lstripBlocks: true,
  };
  if (process.env.ELEVENTY_ENV == 'development') {
    global.nunjucksEnvironment = new Nunjucks.Environment([
      new Nunjucks.FileSystemLoader(['site/layouts'], {
        ...commonLoaderOptions,
        watch: true,
      }),
      new Nunjucks.NodeResolveLoader({ ...commonLoaderOptions, watch: true }),
    ]);
  } else {
    global.nunjucksEnvironment = new Nunjucks.Environment([
      new Nunjucks.FileSystemLoader(['site/layouts'], { ...commonLoaderOptions }),
      new Nunjucks.NodeResolveLoader({ ...commonLoaderOptions }),
    ]);
  }
  eleventyConfig.setLibrary('njk', global.nunjucksEnvironment);

  // Add eleventy plugins
  eleventyConfig.addPlugin(navigationPlugin);
  eleventyConfig.addPlugin(mkuiPlugin);
  eleventyConfig.addPlugin(syntaxHighlight);

  // Eleventy config dir options
  const dirs = {
    input: 'site',
    output: 'dist',
    data: 'data/global',
    layouts: 'layouts',
  };

  // Dynamically get the path for all project filters, shortcodes, tranforms, collections and layouts
  const paths = {
    filters: path.join(process.cwd(), './site/filters/**/*.js'),
    shortcodes: path.join(process.cwd(), './site/shortcodes/**/*.js'),
    transforms: path.join(process.cwd(), './site/transforms/**/*.js'),
    layouts: path.join(process.cwd(), './site/layouts/**/*.njk'),
  };

  // Returns an array of matching entries for the paths
  const layouts = glob.sync(paths.layouts);
  const filters = glob.sync(paths.filters);
  const shortcodes = glob.sync(paths.shortcodes);
  const transforms = glob.sync(paths.transforms);

  // Add aliases for each found layouts
  // layouts.forEach((layout) => {
  //   console.log(layout);
  //   return eleventyConfig.addLayoutAlias(path.basename(layout, '.njk'), path.basename(layout))
  // });
  // Add all found filters
  filters.forEach((filter) => eleventyConfig.addFilter(path.basename(filter, '.js'), require(filter)));
  // Add all found shortcodes
  shortcodes.forEach((shortcode) => eleventyConfig.addShortcode(path.basename(shortcode, '.js'), require(shortcode)));
  // Add all found transforms
  transforms.forEach((transform) => eleventyConfig.addTransform(path.basename(transform, '.js'), require(transform)));

  // Opts in to a full deep merge when combining the Data Cascade
  eleventyConfig.setDataDeepMerge(true);

  // robots.txt passthrough
  eleventyConfig.addPassthroughCopy('./site/robots.txt');

  return {
    dir: dirs,
    passthroughFileCopy: true,
  };
};
