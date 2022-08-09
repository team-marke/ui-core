const htmlmin = require('html-minifier');

module.exports = (content, outputPath) => {
  if (process.env.ELEVENTY_ENV == 'production' && outputPath && outputPath.endsWith('.html')) {
    let minified = htmlmin.minify(content, {
      useShortDoctype: true,
      removeComments: true,
      collapseWhitespace: true,
    });
    return minified;
  }
  return content;
};
