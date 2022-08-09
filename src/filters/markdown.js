const markdownIt = require('markdown-it')({
  html: true,
  breaks: true,
  linkify: false
});

module.exports = (value) => {
  return markdownIt.render(value);
};
