const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 function repeater(str, options) {
  let {
    repeatTimes, 
    separator, 
    addition, 
    additionRepeatTimes, 
    additionSeparator
  } = options;
  
  let result = '';

  if (repeatTimes) {
    for (let i = 0; i < repeatTimes; i++) {
      result += String(str);

      if (String(addition) !== 'undefined') {
        if (additionRepeatTimes) {
          for (let j = 0; j < additionRepeatTimes; j++) {
            result += String(addition);
  
            if (additionSeparator && j !== additionRepeatTimes - 1) {
              result += additionSeparator;
            } else if (!additionSeparator && j !== additionRepeatTimes - 1) {
              result += '|';
            }
          }
        } else {
          result += String(addition);
        }
      }

      if (separator && i !== repeatTimes - 1) {
        result += separator;
      } else if (!separator && i !== repeatTimes - 1) {
        result += '+';
      }
    }
  } else {
    result += str;

    if (addition) {
      if (additionRepeatTimes) {
        for (let i = 0; i < additionRepeatTimes; i++) {
          result += addition;

          if (additionSeparator) {
            result += additionSeparator;
          }
        }
      } else {
        result += addition;
      }
    }
  }

  return result;
 }

module.exports = {
  repeater
};
