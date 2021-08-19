/**
 * Filters a date as a string value in ISO format.
 * @param {string} dateStr Date in RFC2822 or ISO 8601 format.
 */
module.exports = (dateStr) => {
  const date = new Date(dateStr);
  return date.toISOString();
};
