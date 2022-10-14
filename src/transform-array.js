const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
 function transform(arr) {
  if (!Array.isArray(arr) || !arr) throw new Error('\'arr\' parameter must be an instance of the Array!');

  const result = [];
  const copy = [...arr];

  let changeNext = false;

  for (let i = 0; i < copy.length; i++) {
    const current = copy[i];

    if (changeNext) {
      changeNext = false;
      continue;
    }
  
    if (current === '--discard-next') {
      changeNext = true;
      result[i] = undefined;
      result[i + 1] = undefined;
  
      continue;
    };
  
    if (current === '--discard-prev') {
      result.splice(i - 1, 1);
      continue;
    };
  
    if (current === '--double-next') {
      changeNext = true;
      result[i] = copy[i + 1];
      result.push(result[i]);
      continue;
    }
  
    if (current === '--double-prev') {
      result[i] = result[i - 1];
  
      continue;
    }
  
    result.push(current);
  }

  return result.filter((el) => el);
}

module.exports = {
  transform
};