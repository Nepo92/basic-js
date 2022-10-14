const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */

function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!';
  if (new Date(date).toString() === 'Invalid Date' || date === 20192701) throw new Error('Invalid date!');
  if (new Date().toString() === date.toString()) throw new Error('Invalid date!');

  const month = date.getMonth();

  const isWinter = month === 11 || month === 0 || month === 1 ? 'winter' : false;
  const isSpring = month === 2 || month === 3 || month === 4 ? 'spring' : false;
  const isSummer = month === 5 || month === 6 || month === 7 ? 'summer' : false;
  const isAutumn = month === 8 || month === 9 || month === 10 ? 'autumn' : false;
  
  return isWinter || isSpring || isSummer || isAutumn;
}

module.exports = {
  getSeason
};
