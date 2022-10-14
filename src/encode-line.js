const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const arr = [];
  const cache = [];

  let count = 0;

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    const obj = {};
    obj[char] = ++count;

    for (let j = i + 1; j <= str.length; j++) {
      if (char === str[j]) {
        obj[char] = ++count;
      } else {
        count = 0;

        if (!str[j] && str[i - 1] !== str[i]) {
          cache.length = 0;
        }

        if (!cache.includes(char)) {
          cache.push(char);
          arr.push(obj);
        }

        break;
      }
    }
  }

  return arr.map((item) => {
    const entries = Object.entries(item);
    const [key,value] = entries.flat(1); 

    return (value > 1 ? value : '') + key;
  }).join('');
}

module.exports = {
  encodeLine
};
