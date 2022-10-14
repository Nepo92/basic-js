const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const firstLayer = [];
  const secondLayer = [];
  const thirdLayer = [];

  domains.forEach((item) => {
    const arr = item.split('.');
    const first = '.' + arr[arr.length - 1];
    const second = '.' + arr[arr.length - 2] + '.' + arr[arr.length - 1];
    const third = arr[arr.length - 3] ? '.' + arr[arr.length - 3] +'.' + arr[arr.length - 2] + '.' + arr[arr.length - 1] : undefined;

    firstLayer.push(first);
    secondLayer.push(second);
    thirdLayer.push(third);
  })

  const first = firstLayer.filter((el) => el);
  const second = secondLayer.filter((el) => el);
  const third = thirdLayer.filter((el) => el);

  const obj = {};

  if (first.length) {
    obj['.com'] = first.length;
  }

  if (second.length) {
    obj['.com.epam'] = second.length;
  }

  if (third.length) {
    obj['.com.epam.info'] = third.length; 
  }

  return obj;
}

module.exports = {
  getDNSStats
};
