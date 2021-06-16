module.exports = (value) => {
  return "https://wa.me/55" + value.replace(/[^0-9]/g, '');
};
