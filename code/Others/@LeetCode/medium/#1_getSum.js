// Given two integers a and b, return the sum of the two integers without using the operators + and -.

// Example 1:
// Input: a = 1, b = 2
// Output: 3

// Example 2:
// Input: a = 2, b = 3
// Output: 5

// Constraints:
// -1000 <= a, b <= 1000

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */

// Notice --------------------------------------------------------

// 1. ------------------------------------------------------------
const getSum = (a, b) => {
  if (b === 0) return a

  const sum = a ^ b
  const carry = (a & b) << 1

  return getSum(sum, carry)
}
