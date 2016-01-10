'use strict'

/**
 * Determine if a value is a valid CSS color hex
 * @param {String} value - a string to determine if valid CSS color hex
 * @throws {Error} - if value is not a String
 * @return {Boolean} - is string a valid CSS color hex?
 */
module.exports = function (value) {
  if (typeof value !== 'string') {
    throw new Error('Expected value to be a String')
  }

  return (/^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/).test(value)
}
