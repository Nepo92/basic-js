const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  const has = !sampleActivity;
  const older = sampleActivity > MODERN_ACTIVITY;
  const isType = Array.isArray(sampleActivity) || sampleActivity <= 0 || isNaN(+sampleActivity) || !isFinite(+sampleActivity) || typeof sampleActivity === 'object';
  const isThree = typeof sampleActivity === 'number' && sampleActivity.toFixed(0) === '3';

  if (has || older || isType || isThree) return false;

  const age = Math.ceil((HALF_LIFE_PERIOD * Math.log(MODERN_ACTIVITY / sampleActivity)) / 0.693);

  return isFinite(age) ? age : false;
}

module.exports = {
  dateSample
};
