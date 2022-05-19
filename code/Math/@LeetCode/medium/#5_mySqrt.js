// Sqrt(x)

// Solution
// Given a non-negative integer x, compute and return the square root of x.

// Since the return type is an integer, the decimal digits are truncated,
// and only the integer part of the result is returned.

// Note: You are not allowed to use any built-in exponent function or operator,
// such as pow(x, 0.5) or x ** 0.5.

// Example 1:
// Input: x = 4
// Output: 2

// Example 2:
// Input: x = 8
// Output: 2
// Explanation: The square root of 8 is 2.82842..., and since the decimal part is truncated,
// 2 is returned.

// Constraints:
// 0 <= x <= 2^31 - 1

/**
 * @param {number} x
 * @return {number}
 */

// Notice --------------------------------------------------------
// 1. 不使用 **, Math.pow()

// 1. ------------------------------------------------------------
// Runtime: 88.50% / 76 ms
// Memory Usage: 84.73% / 43.2 MB
const mySqrt1 = (x) => {
  let ptrS = 0
  let ptrE = x / 2

  while (ptrS < ptrE) {
    const ptrM = Math.ceil((ptrE + ptrS) / 2)
    const square = ptrM * ptrM

    if (x === square) return ptrM

    if (x > square) ptrS = ptrM
    else ptrE = ptrM - 1
  }

  return ptrE
}

// 2. ------------------------------------------------------------
// Runtime: 68 ms
// Memory Usage: 43.7 MB
const mySqrt = (x) => {
  let ptrS = 0
  let ptrE = x

  while (ptrS <= ptrE) {
    const ptrM = Math.ceil((ptrE + ptrS) / 2)
    const square = ptrM * ptrM

    if (x === square) return ptrM

    if (x > square) ptrS = ptrM + 1
    else ptrE = ptrM - 1
  }

  return ptrE
}
