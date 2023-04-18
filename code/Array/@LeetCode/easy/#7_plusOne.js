// You are given a large integer represented as an integer array digits, where each digits[i]
// is the ith digit of the integer. The digits are ordered from most significant to least
// significant in left-to-right order. The large integer does not contain any leading 0's.

// Increment the large integer by one and return the resulting array of digits.

// Example 1:
// Input: digits = [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Incrementing by one gives 123 + 1 = 124.
// Thus, the result should be [1,2,4].

// Example 2:
// Input: digits = [4,3,2,1]
// Output: [4,3,2,2]
// Explanation: The array represents the integer 4321.
// Incrementing by one gives 4321 + 1 = 4322.
// Thus, the result should be [4,3,2,2].

// Example 3:
// Input: digits = [9]
// Output: [1,0]
// Explanation: The array represents the integer 9.
// Incrementing by one gives 9 + 1 = 10.
// Thus, the result should be [1,0].

// Constraints:
// 1 <= digits.length <= 100
// 0 <= digits[i] <= 9
// digits does not contain any leading 0's.

/**
 * @param {number[]} digits
 * @return {number[]}
 */

// Notice --------------------------------------------------------
// 1. 需要進位

// 1. ------------------------------------------------------------
// Runtime: 71.325 / 68 ms
// Memory: 50.17% / 42.2 MB
// T(n): O(n)
// S(n): O(n)
const solution1 = () => {
  const plusOne = (digits) => {
    const output = [...digits]
    let carry = 1
    let ptr = digits.length - 1

    while (carry === 1) {
      const digit = output[ptr] + 1

      if (digit < 10) {
        output[ptr] = digit
        carry = 0
      } else if (ptr > 0) {
        output[ptr] = 0
        ptr--
      } else {
        output[ptr] = 0
        output.unshift(1)
        carry = 0
      }
    }

    return output
  }
}

// 2. ------------------------------------------------------------
// Runtime: 92.84% / 57 ms
// Memory: 38.78% / 42.3 MB
// T(n): O(n)
// S(n): O(n)
const solution2 = () => {
  const plusDigitToDigits = (digits, summand) => {
    if (!(summand < 10)) throw 'summand should be a digit'

    const output = [...digits]
    let carry = summand
    let ptr = digits.length - 1

    while (carry > 0 && ptr >= 0) {
      const digit = digits[ptr] + carry

      output[ptr] = digit % 10
      carry = Math.floor(digit / 10)

      ptr--
    }

    if (carry > 0) output.unshift(carry)

    return output
  }

  const plusOne = (digits) => plusDigitToDigits(digits, 1)
}

// 3. ------------------------------------------------------------
// Runtime: 91.98% / 59 ms
// Memory: 61.01% / 42 MB
// T(n): O(n)
// S(n): O(n)
const solution3 = () => {
  const plusOne = (digits) => {
    const output = [...digits]
    let carry = 1
    let ptr = digits.length - 1

    while (true) {
      const digit = output[ptr] + carry

      if (digit < 10) {
        output[ptr] = digit
        break
      }

      output[ptr] = 0

      if (ptr === 0) {
        output.unshift(carry)
        break
      }

      ptr--
    }

    return output
  }
}

// 二刷補充 ===============================================================
// 1. ------------------------------------------------------------
// 從 solution2 改來，使用 new Array() 可以略少點時間，但變得更不簡潔，各有好壞
// T(n): O(n)
// S(n): O(n)
const solution1a = () => {
  const plusDigitToDigits = (digits, summand) => {
    if (!(summand < 10)) throw 'summand should be a digit'

    const output = new Array(digits)
    let carry = summand
    let ptr = digits.length - 1

    while (carry > 0 && ptr >= 0) {
      const digit = digits[ptr] + carry

      output[ptr] = digit % 10
      carry = Math.floor(digit / 10)

      ptr--
    }

    while (ptr >= 0) {
      output[ptr] = digits[ptr]
      ptr--
    }

    if (carry > 0) output.unshift(carry)

    return output
  }

  const plusOne = (digits) => plusDigitToDigits(digits, 1)
}
