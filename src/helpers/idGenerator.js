const crypto = require('crypto');

function IdGenerator(size = 6) {
  const radom = crypto.randomBytes(size / 2).toString('hex');
  return `mk-${radom}`;
}

module.exports = IdGenerator;
