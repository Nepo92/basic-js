const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const copy = [...arr];
  const sorted = [...copy.filter((el) => el > 0).sort((a, b) => a - b)];

  for (let i = 0; i < copy.length; i++) {
    if (copy[i] !== -1) {
      copy[i] = sorted.shift();
    }
  }

  return copy;
}

module.exports = {
  sortByHeight
};
