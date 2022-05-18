// Write an algorithm to determine if a number n is happy.

// A happy number is a number defined by the following process:

// Starting with any positive integer, replace the number by the sum of the squares of its digits.
// Repeat the process until the number equals 1 (where it will stay),
// or it loops endlessly in a cycle which does not include 1.
// Those numbers for which this process ends in 1 are happy.
// Return true if n is a happy number, and false if not.

// Example 1:
// Input: n = 19
// Output: true
// Explanation:
// 12 + 92 = 82
// 82 + 22 = 68
// 62 + 82 = 100
// 12 + 02 + 02 = 1

// Example 2:
// Input: n = 2
// Output: false

// Constraints:
// 1 <= n <= 2^31 - 1

/**
 * @param {number} n
 * @return {boolean}
 */

// Notice --------------------------------------------------------
// 1. 題意並非是 loop 到只剩個位數。而是: 是否不管如何 loop 都無法變成 1

// 1. ------------------------------------------------------------
// fail
// 403 / 404 test cases passed.
// Input:1111111
// Output:false
// Expected:true
const isHappy1 = (n) => {
  const result = n
    .toString()
    .split('')
    .reduce((t, v) => t + v ** 2, 0)

  if (result > 9) return isHappy(result)
  if (result === 1) return true

  return false
}

// 2. ------------------------------------------------------------
// 96.86% / Runtime: 61 ms
// Memory Usage: 89.84% / 42.4 MB
const isHappy2 = (n) => {
  const result = n
    .toString()
    .split('')
    .reduce((t, v) => t + v ** 2, 0)

  if (result > 9) return isHappy(result)
  if (result === 1 || result === 7) return true

  return false
}

// 3. ------------------------------------------------------------
// Floyd's Cycle-Finding Algorithm
// 判斷快的追上慢的後，是否為 1
// Runtime: 106 ms
// Memory Usage: 44.2 MB
const isHappy3 = (n) => {
  // var
  let quick = n
  let slow = n

  // function
  const makeSquare = (num) => {
    return num
      .toString()
      .split('')
      .reduce((t, v) => t + v ** 2, 0)
  }

  // run
  while (true) {
    slow = makeSquare(slow)
    quick = makeSquare(makeSquare(quick))

    if (slow === quick) return slow === 1
  }
}

// 3. ------------------------------------------------------------
// Runtime: 63 ms
// Memory Usage: 44.1 MB
const isHappy = (n) => {
  // var
  const hashMap = new Map()
  let result = n

  // function
  const makeSquare = (num) => {
    return num
      .toString()
      .split('')
      .reduce((t, v) => t + v ** 2, 0)
  }

  // run
  while (true) {
    result = makeSquare(result)

    if (result === 1) return true
    if (hashMap.has(result)) return false

    hashMap.set(result, true)
  }
}
