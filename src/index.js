'use strict'

/**
 * Determine if a value is a valid CSS color hex
 * @param {String} value - a string to determine if valid CSS color hex
 * @throws {Error} - if value is not a String
 * @return {Boolean} - is string a valid CSS color hex?
 */
module.exports = value => {
  if (typeof value !== 'string') {
    throw new Error('Expected value to be a String')
  }

  return (/^#([0-9a-fA-F]{3,4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/).test(value)
}
