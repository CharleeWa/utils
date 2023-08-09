import { isNumber } from './is'

/**
 * Pads a given number with a leading zero if it's between 0 and 9 (inclusive).
 * @param num - The number to pad.
 * @returns The padded number as a string, or an Error if input is not a valid number.
 * @throws {Error} If the input is not a valid number.
 */
export function padNumber(num: number): string | Error {
  if (!isNumber(num))
    throw new Error(`${num} is not a valid number`)

  if (num >= 0 && num <= 9)
    return `0${num}`
  else
    return `${num}`
}
