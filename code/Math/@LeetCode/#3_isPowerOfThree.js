// Given an integer n, return true if it is a power of three. Otherwise, return false.

// An integer n is a power of three, if there exists an integer x such that n == 3x.

// Example 1:
// Input: n = 27
// Output: true

// Example 2:
// Input: n = 0
// Output: false

// Example 3:
// Input: n = 9
// Output: true

// Constraints:
// -2^31 <= n <= 2^31 - 1

// Follow up: Could you solve it without loops/recursion?

/**
 * @param {number} n
 * @return {boolean}
 */

// Notice --------------------------------------------------------
// 1. 不用 loop/recursion

// 1. ------------------------------------------------------------
// Runtime: 70.30% / 249 ms
// Memory: 55.33% / 51.3 MB
const isPowerOfThree1 = (n) => {
  if (n <= 0) return false

  let temp = n

  while (temp > 1) {
    if (temp % 3 !== 0) return false

    temp = temp / 3
  }

  return true
}

// 2. ------------------------------------------------------------
// Runtime: 80.39% / 219 ms
// Memory: 29.05% / 51.5 MB
const round = (n, precision = 12) => {
  const factor = Math.pow(10, precision)

  return Math.round(n * factor) / factor
}

const isPowerOfThree = (n) => {
  const logNBase3 = round(Math.log(n) / Math.log(3))

  return Number.isInteger(logNBase3)
}
