/**
 * Split a string into a array
 * @param {string} string The string that will be splited.
 * @param {string} separator The pattern describing where each split should occur.
 * @param {boolean} excludeLast If set to true excludes the last elemento of the array.
 */
module.exports = (string, separator, excludeLast = false) => {
  const array = string.split(separator)
  if (excludeLast) {
    array.pop();
  }
  return array;
};
