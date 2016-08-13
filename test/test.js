'use strict'
import isCSSColorHex from '../lib/'
import test from 'ava'

test('should throw error if value is not passed', t => {
  const shouldThrow = () => isCSSColorHex()
  t.throws(shouldThrow, /Expected value to be a String/)
})

test('should throw error if value is undefined', t => {
  const shouldThrow = () => isCSSColorHex(undefined)
  t.throws(shouldThrow, /Expected value to be a String/)
})

test('should throw error if value is null', t => {
  const shouldThrow = () => isCSSColorHex(null)
  t.throws(shouldThrow, /Expected value to be a String/)
})

test('should throw error if value is an array', t => {
  const shouldThrow = () => isCSSColorHex([])
  t.throws(shouldThrow, /Expected value to be a String/)
})

test('should throw error if value is an object', t => {
  const shouldThrow = () => isCSSColorHex({})
  t.throws(shouldThrow, /Expected value to be a String/)
})

test('should throw error if value is a number', t => {
  const shouldThrow = () => isCSSColorHex(1)
  t.throws(shouldThrow, /Expected value to be a String/)
})

test('should return false for string not prefixed with hash', t => {
  t.falsy(isCSSColorHex('000'))
  t.falsy(isCSSColorHex('AAAAAA'))
  t.falsy(isCSSColorHex('aaaaaa'))
  t.falsy(isCSSColorHex('000F'))
  t.falsy(isCSSColorHex('aaaaaaff'))
})

test('should return false for hexes with other than 3, 4, 6, or 8 hex characters', t => {
  t.falsy(isCSSColorHex('#1'))
  t.falsy(isCSSColorHex('#a'))
  t.falsy(isCSSColorHex('#A'))
  t.falsy(isCSSColorHex('#12'))
  t.falsy(isCSSColorHex('#Ab'))
  t.falsy(isCSSColorHex('#12345'))
  t.falsy(isCSSColorHex('#AbCdE'))
  t.falsy(isCSSColorHex('#1234567'))
  t.falsy(isCSSColorHex('#aBcDeFf'))
})

test('should return false for invalid hex characters', t => {
  t.falsy(isCSSColorHex('#XYZ'))
  t.falsy(isCSSColorHex('#xyz'))
  t.falsy(isCSSColorHex('#XYZXYZ'))
  t.falsy(isCSSColorHex('#xyz'))
  t.falsy(isCSSColorHex('#!!!???'))
  t.falsy(isCSSColorHex('#000x'))
  t.falsy(isCSSColorHex('#000000xx'))
})

test('should true for valid color hexes', t => {
  t.truthy(isCSSColorHex('#000'))
  t.truthy(isCSSColorHex('#AAA'))
  t.truthy(isCSSColorHex('#aaa'))
  t.truthy(isCSSColorHex('#aaaa'))
  t.truthy(isCSSColorHex('#000000'))
  t.truthy(isCSSColorHex('#FF99CC'))
  t.truthy(isCSSColorHex('#ff99cc'))
  t.truthy(isCSSColorHex('#ff99CC'))
  t.truthy(isCSSColorHex('#ff99CCaa'))
})
