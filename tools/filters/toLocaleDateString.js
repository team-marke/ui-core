/**
 * Filters a date as a string value to locale format.
 * @param {string} dateStr Date string in RFC2822 or ISO 8601 format.
 * @param {string} locale A locale string tag.
 * @param {Intl.DateTimeFormatOptions} options An object that contains one or more properties that specify comparison options.
 * @returns {string} Localized and formatted date string.
 */
module.exports = (dateStr, locale = 'pt-BR', options = {}) => {
  const date = new Date(dateStr);
  return date.toLocaleDateString(locale, options);
};