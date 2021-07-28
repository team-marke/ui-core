/**
 * Filters a date as a string value in ISO format.
 * @param {string} dataString Date in RFC2822 or ISO 8601 format.
 */
 module.exports = (dataString) => {
    const date = new Date(dataString);
    return date.toISOString();
  };