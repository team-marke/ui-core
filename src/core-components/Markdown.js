const markdownIt = require('markdown-it')({
  html: true,
  breaks: true,
  linkify: false,
});

function Markdonw(value) {
  return markdownIt.render(value);
}

module.exports = Markdonw;
