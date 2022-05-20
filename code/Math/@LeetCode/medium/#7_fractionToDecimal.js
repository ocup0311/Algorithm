// Given two integers representing the numerator and denominator of a fraction,
// return the fraction in string format.

// If the fractional part is repeating, enclose the repeating part in parentheses.

// If multiple answers are possible, return any of them.

// It is guaranteed that the length of the answer string is less than 104 for all the given inputs.

// Example 1:
// Input: numerator = 1, denominator = 2
// Output: "0.5"

// Example 2:
// Input: numerator = 2, denominator = 1
// Output: "2"

// Example 3:
// Input: numerator = 4, denominator = 333
// Output: "0.(012)"

// Constraints:
// -2^31 <= numerator, denominator <= 2^31 - 1
// denominator != 0

/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */

// Notice --------------------------------------------------------
// 1. 循環小數 --> 用 () 表示如： "0.(012)"
// 2. 如果有多個答案，則全部列出 <-- 有可能有多個答案嗎？

// 1. ------------------------------------------------------------
const fractionToDecimal = (numerator, denominator) => {
  // exception
  if (denominator === 1) return numerator.toString()
  if (numerator === denominator) return '1'

  // var
  const sign = numerator > 0 === denominator > 0 ? '' : '-'
  const num = Math.abs(numerator)
  const den = Math.abs(denominator)
  const left = Math.floor(num / den).toString()
  let n3 = num % den

  if (n3 === 0) return left === '0' ? left : sign + left

  const cache = new Map()
  let right = ''

  while (n3 !== 0) {
    let n4 = Math.floor((n3 * 10) / den)
    let n5 = (n3 * 10) % den

    if (cache.has(n3)) {
      let zero = 0

      n3 = n5

      while (n4 === 0) {
        n4 = Math.floor((n3 * 10) / den)
        n5 = (n3 * 10) % den

        n3 = n5

        zero++
      }

      const idx = right.indexOf(n4) - zero

      return `${sign}${left}.${right.slice(0, idx)}(${right.slice(idx)})`
    }

    cache.set(n3, true)
    n3 = n5
    right = right + n4

    if (n5 === 0) return sign + left + '.' + right
  }
}
