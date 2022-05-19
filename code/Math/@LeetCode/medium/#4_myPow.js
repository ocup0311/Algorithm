// Implement pow(x, n), which calculates x raised to the power n (i.e., xn).

// Example 1:
// Input: x = 2.00000, n = 10
// Output: 1024.00000

// Example 2:
// Input: x = 2.10000, n = 3
// Output: 9.26100

// Example 3:
// Input: x = 2.00000, n = -2
// Output: 0.25000
// Explanation: 2-2 = 1/22 = 1/4 = 0.25

// Constraints:
// -100.0 < x < 100.0
// -2^31 <= n <= 2^31-1
// -10^4 <= xn <= 10^4

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */

// Notice --------------------------------------------------------

// 1. ------------------------------------------------------------
// 300 / 305 test cases passed.
// Last executed input: (1.00000, -2147483648)
const myPow2 = (x, n) => {
  // exception
  if (n === 0) return 1

  // var
  let result = x
  let pow = 1

  // run
  while (pow !== n) {
    if (pow > n) {
      result = result / x
      pow--
    } else {
      result = result * x
      pow++
    }
  }

  return result
}

// 2. ------------------------------------------------------------
// Runtime: 90.25% / 63 ms
// Memory Usage: 18.92% / 42.4 MB
const myPow = (x, n) => {
  if (n === 0) return 1

  const pow = n > 0 ? n : -n
  const base = n > 0 ? x : 1 / x
  const square = base * base
  const halfPow = Math.floor(pow / 2)
  const extra = pow % 2 === 0 ? 1 : base
  const result = myPow(square, halfPow) * extra

  return result
}
