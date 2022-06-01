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
// Runtime: 76.28% / 65 ms
// Memory Usage: 73.97% / 41.8 MB
const getSum1 = (a, b) => {
  if (b === 0) return a

  const sum = a ^ b
  const carry = (a & b) << 1

  return getSum(sum, carry)
}

// 2. ------------------------------------------------------------
// Runtime: 66 ms
// Memory Usage: 41.5 MB
const getSum = (a, b) => {
  let sum = a
  let carry = b

  while (carry !== 0) {
    const newSum = sum ^ carry

    carry = (sum & carry) << 1
    sum = newSum
  }

  return sum
}
