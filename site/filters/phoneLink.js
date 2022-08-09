module.exports = (value) => {
  return "tel:" + value.replace(/[^0-9]/g, '');
};
