const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  if (!names.length) return [];

  const arr = names.map((item, index, arr) => {
    return {
      name: item,
      coincedence: arr.filter((el) => el == item).length,
    }
  }).filter((el) => el.coincedence > 1);

  const array = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length; j++) {
      if (arr[i].name !== arr[j].name) {
        array.push(arr[i])
      }
    }
  }

  if (!array.length && arr[0]) array.push(arr[0]);

  let count = -1;
  let repeatedCount = 0;

  return  array.length ? [...names.map((item) => {
    const current = array.find((el) => el.name === item.split('(')[0]);
    
    if (current) {
      const repeted = item.split('(').length > 1;

      if (!repeted) {
        count++;
      } else {
        repeatedCount++;
      }

      const suffix = count === 0 ? '' : `(${count})`;

      const result = item + (repeted ? `(${repeatedCount})` : suffix);

      return result;
    } else {
      return item;
    }
  })] : names;
}

module.exports = {
  renameFiles
};
