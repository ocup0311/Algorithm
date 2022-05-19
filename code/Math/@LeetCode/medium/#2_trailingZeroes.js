// Given an integer n, return the number of trailing zeroes in n!.

// Note that n! = n * (n - 1) * (n - 2) * ... * 3 * 2 * 1.

// Example 1:
// Input: n = 3
// Output: 0
// Explanation: 3! = 6, no trailing zero.

// Example 2:
// Input: n = 5
// Output: 1
// Explanation: 5! = 120, one trailing zero.

// Example 3:
// Input: n = 0
// Output: 0

// Constraints:
// 0 <= n <= 10^4

// Follow up: Could you write a solution that works in logarithmic time complexity?

/**
 * @param {number} n
 * @return {number}
 */

// Notice --------------------------------------------------------
// 1. 尾巴有多少 0

// 1. ------------------------------------------------------------
// Runtime: 74.02% / 71 ms
// Memory Usage: 44.48% / 42.5 MB
const trailingZeroes1 = (n) => {
  let restN = n
  let result = 0

  while (restN) {
    restN = Math.floor(restN / 5)
    result = result + restN
  }

  return result
}

// 2. ------------------------------------------------------------
// Runtime: 70 ms
// Memory Usage: 41.9 MB
const trailingZeroes = (n) => {
  const restN = Math.floor(n / 5)
  const result = restN ? restN + trailingZeroes(restN) : 0

  return result
}
