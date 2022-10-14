const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  const result = email.split('@')[1].length > 2 ? email.split('@')[email.split('@').length - 1] : email.split('@')[1];
  const hasDot = result.split('.');

  return hasDot.length > 2 ? hasDot.splice(1, hasDot.length - 1).join('') : result;
}

module.exports = {
  getEmailDomain
};
