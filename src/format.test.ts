import { expect, it } from 'vitest'
import { padNumber } from './format'

it('valid number', () => {
  expect(padNumber(0)).toBe('00')
  expect(padNumber(9)).toBe('09')
  expect(padNumber(10)).toBe('10')
})

it('invalid number', () => {
  expect(() => padNumber('xx' as any)).toThrowError(/^xx is not a valid number$/)
})
