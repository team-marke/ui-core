module.exports = (input) => {
  return input.replace(/\s{2,}/g, '').replace(/\'/g, '"');
};
