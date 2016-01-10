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
  t.notOk(isCSSColorHex('000'))
  t.notOk(isCSSColorHex('AAAAAA'))
  t.notOk(isCSSColorHex('aaaaaa'))
})

test('should return false for hexes with other than 3 or 6 hex characters', t => {
  t.notOk(isCSSColorHex('#1'))
  t.notOk(isCSSColorHex('#a'))
  t.notOk(isCSSColorHex('#A'))
  t.notOk(isCSSColorHex('#12'))
  t.notOk(isCSSColorHex('#Ab'))
  t.notOk(isCSSColorHex('#1234'))
  t.notOk(isCSSColorHex('#AbCd'))
  t.notOk(isCSSColorHex('#12345'))
  t.notOk(isCSSColorHex('#AbCdE'))
  t.notOk(isCSSColorHex('#1234567'))
  t.notOk(isCSSColorHex('#aBcDeFf'))
})

test('should return false for invalid hex characters', t => {
  t.notOk(isCSSColorHex('#XYZ'))
  t.notOk(isCSSColorHex('#xyz'))
  t.notOk(isCSSColorHex('#XYZXYZ'))
  t.notOk(isCSSColorHex('#xyz'))
  t.notOk(isCSSColorHex('#!!!???'))
})

test('should true for valid color hexes', t => {
  t.ok(isCSSColorHex('#000'))
  t.ok(isCSSColorHex('#AAA'))
  t.ok(isCSSColorHex('#aaa'))
  t.ok(isCSSColorHex('#000000'))
  t.ok(isCSSColorHex('#FF99CC'))
  t.ok(isCSSColorHex('#ff99cc'))
  t.ok(isCSSColorHex('#ff99CC'))
})
