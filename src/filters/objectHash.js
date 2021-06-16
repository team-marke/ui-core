const hash = require('object-hash');

module.exports = (value) => {
  return hash.MD5(value);
};
