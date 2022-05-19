// Given two integers dividend and divisor, divide two integers without using multiplication,
// division, and mod operator.

// The integer division should truncate toward zero, which means losing its fractional part.
// For example, 8.345 would be truncated to 8, and -2.7335 would be truncated to -2.

// Return the quotient after dividing dividend by divisor.

// Note: Assume we are dealing with an environment that could only store integers within the
// 32-bit signed integer range: [−2^31, 2^31 − 1]. For this problem, if the quotient is strictly
// greater than 2^31 - 1, then return 2^31 - 1, and if the quotient is strictly less than -2^31,
// then return -2^31.

// Example 1:
// Input: dividend = 10, divisor = 3
// Output: 3
// Explanation: 10/3 = 3.33333.. which is truncated to 3.

// Example 2:
// Input: dividend = 7, divisor = -3
// Output: -2
// Explanation: 7/-3 = -2.33333.. which is truncated to -2.

// Constraints:
// -2^31 <= dividend, divisor <= 2^31 - 1
// divisor != 0

/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */

// Notice --------------------------------------------------------
// 1. 不使用 * / %
// 2. 8.345 --> 8
// 3. -9.25 --> -9

// 1. ------------------------------------------------------------
// fail
// 13 / 992 test cases passed.
// Input: (-2147483648,-1)
// Output: 2147483648
// Expected: 2147483647
const divide1 = (dividend, divisor) => {
  const sign = dividend > 0 === divisor > 0 ? 1 : -1
  const newDivisor = Math.abs(divisor)
  let restN = Math.abs(dividend)
  let result = 0

  while (restN >= newDivisor) {
    restN = restN - newDivisor
    result++
  }

  return sign * result
}

// 2. ------------------------------------------------------------
// Time Limit Exceeded
// 14 / 992 test cases passed.
// Last executed input:(-2147483648, 2)
const divide2 = (dividend, divisor) => {
  const [INT_MIN, INT_MAX] = [-(2 ** 30) - 2 ** 30, 2 ** 30 - 1 + 2 ** 30]

  if (dividend === divisor) return 1
  if (dividend === INT_MIN && divisor === -1) return INT_MAX

  const sign = dividend > 0 === divisor > 0 ? 1 : -1
  const newDivisor = Math.abs(divisor)
  let restN = dividend === INT_MIN ? Math.abs(dividend + 1) : Math.abs(dividend)
  let result = 0

  while (restN >= newDivisor) {
    if (dividend === INT_MIN && result === 1) restN++

    restN = restN - newDivisor
    result++
  }

  return sign * result
}

// 3. ------------------------------------------------------------
// Runtime: 74.30% / 85 ms
// Memory Usage: 5.88% / 45.1 MB
const divide = (dividend, divisor) => {
  // CONST
  const [INT_MIN, INT_MAX] = [-(2 ** 30) - 2 ** 30, 2 ** 30 - 1 + 2 ** 30]

  // exception
  if (divisor === 1) return dividend
  if (dividend === divisor) return 1
  if (dividend === INT_MIN && divisor === -1) return INT_MAX

  // var
  const sign = dividend > 0 === divisor > 0 ? '+' : '-'
  const dvs = Math.abs(divisor)
  let dvd = dividend === INT_MIN ? Math.abs(dividend + 1) : Math.abs(dividend)
  let TAG_MIN = 0
  let result = 0

  // function
  const pad0ToEnd = (str) => str.padEnd(str.length + 1, '0')

  // run
  while (dvd >= dvs) {
    if (dividend === INT_MIN) {
      if (TAG_MIN === 1) dvd++
      TAG_MIN++
    }

    let dvsLast = dvs.toString()
    let dvsTemp = pad0ToEnd(dvsLast)
    let times = '1'

    while (dvd >= Number(dvsTemp)) {
      dvsLast = dvsTemp
      times = pad0ToEnd(times)

      dvsTemp = pad0ToEnd(dvsTemp)
    }

    dvd = dvd - Number(dvsLast)
    result = result + Number(times)
  }

  return Number(sign + result)
}
