
/**
 * Returns a limited array with the curent value and offset values
 * @param {Array} all
 * @param {String} current
 * @param {Number} offset
 * @returns {Array} Sliced sub array
 */
module.exports = (all, current, offset = 2) => {
  const curIndex = all.indexOf(current);
  let beginIndex = curIndex - offset > 0 ? curIndex - offset : 0;
  let endIndex = curIndex + offset < all.length - 1 ? curIndex + offset : all.length - 1;
  const hrefs = all.map((value, index) => {
    return {
      href: value,
      paginationNumber: index + 1
    };
  });
  return hrefs.slice(beginIndex, endIndex + 1);
};
