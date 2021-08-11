module.exports = (prefix = 'ui-id') => {
  const id = Math.floor(Math.random() * 500000);
  return `${prefix}-${id}`;
};
