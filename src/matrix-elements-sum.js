const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */

function getMatrixElementsSum(matrix) {
  const width = matrix[0].length;
  const height = matrix.length;
  const calculate = [];
  let count = 0;

  let matrixLength = width > height ? width : height;

  for (let i = 0; i < matrixLength; i++) {
    const arr = [];

    for (let j = 0; j < matrixLength; j++) {
      if (matrix[j]) {
        arr.push(matrix[j][i]);
      }
    }

    calculate.push(arr);
  }

  for (let i = 0; i < matrixLength; i++) {
    const elem = calculate[i];

    for (let j = 0; j < elem.length; j++) {
      const item = elem[j];

      if (!item) {
        break;
      } else {
        count += item;
      }
    }
  }

  return count;
}

module.exports = {
  getMatrixElementsSum
};
