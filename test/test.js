/* global describe, it */
'use strict'
import isCSSColorHex from '../lib/'
import {expect} from 'chai'

describe('is-css-color-hex', () => {
  describe('error handling', () => {
    it('should throw error if value is not passed', () => {
      const test = () => isCSSColorHex()
      expect(test).to.throw(Error, /Expected value to be a String/)
    })

    it('should throw error if value is undefined', () => {
      const test = () => isCSSColorHex(undefined)
      expect(test).to.throw(Error, /Expected value to be a String/)
    })

    it('should throw error if value is null', () => {
      const test = () => isCSSColorHex(null)
      expect(test).to.throw(Error, /Expected value to be a String/)
    })

    it('should throw error if value is an array', () => {
      const test = () => isCSSColorHex([])
      expect(test).to.throw(Error, /Expected value to be a String/)
    })

    it('should throw error if value is an object', () => {
      const test = () => isCSSColorHex({})
      expect(test).to.throw(Error, /Expected value to be a String/)
    })

    it('should throw error if value is a number', () => {
      const test = () => isCSSColorHex(1)
      expect(test).to.throw(Error, /Expected value to be a String/)
    })
  })

  describe('invalid CSS color hexes', () => {
    it('should return false for string not prefixed with hash', () => {
      expect(isCSSColorHex('000')).to.eql(false)
      expect(isCSSColorHex('AAAAAA')).to.eql(false)
      expect(isCSSColorHex('aaaaaa')).to.eql(false)
    })

    it('should return false for hexes with other than 3 or 6 hex characters', () => {
      expect(isCSSColorHex('#1')).to.eql(false)
      expect(isCSSColorHex('#a')).to.eql(false)
      expect(isCSSColorHex('#A')).to.eql(false)
      expect(isCSSColorHex('#12')).to.eql(false)
      expect(isCSSColorHex('#Ab')).to.eql(false)
      expect(isCSSColorHex('#1234')).to.eql(false)
      expect(isCSSColorHex('#AbCd')).to.eql(false)
      expect(isCSSColorHex('#12345')).to.eql(false)
      expect(isCSSColorHex('#AbCdE')).to.eql(false)
      expect(isCSSColorHex('#1234567')).to.eql(false)
      expect(isCSSColorHex('#aBcDeFf')).to.eql(false)
    })

    it('should return false for invalid hex characters', () => {
      expect(isCSSColorHex('#XYZ')).to.eql(false)
      expect(isCSSColorHex('#xyz')).to.eql(false)
      expect(isCSSColorHex('#XYZXYZ')).to.eql(false)
      expect(isCSSColorHex('#xyz')).to.eql(false)
      expect(isCSSColorHex('#!!!???')).to.eql(false)
    })
  })

  describe('valid CSS color hexes', () => {
    it('should true for valid color hexes', () => {
      expect(isCSSColorHex('#000')).to.eql(true)
      expect(isCSSColorHex('#AAA')).to.eql(true)
      expect(isCSSColorHex('#aaa')).to.eql(true)
      expect(isCSSColorHex('#000000')).to.eql(true)
      expect(isCSSColorHex('#FF99CC')).to.eql(true)
      expect(isCSSColorHex('#ff99cc')).to.eql(true)
      expect(isCSSColorHex('#ff99CC')).to.eql(true)
    })
  })
})
