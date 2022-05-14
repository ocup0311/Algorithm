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
const plusOne1 = (digits) => {
  const output = [...digits]
  let carry = 1
  let ptr = digits.length - 1

  while (carry === 1) {
    const num = output[ptr] + 1

    if (num < 10) {
      output[ptr] = num
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

// 2. ------------------------------------------------------------
// Runtime: 92.84% / 57 ms
// Memory: 38.78% / 42.3 MB
const plus = (digits, plusNum) => {
  const output = [...digits]
  let carry = plusNum
  let ptr = digits.length - 1

  while (carry > 0) {
    const num = output[ptr] + carry

    output[ptr] = num % 10
    carry = Math.floor(num / 10)

    if (ptr === 0 && carry > 0) {
      output.unshift(carry)
      break
    }

    ptr--
  }

  return output
}

const plusOne2 = (digits) => plus(digits, 1)

// 3. ------------------------------------------------------------
// Runtime: 91.98% / 59 ms
// Memory: 61.01% / 42 MB
const plusOne = (digits) => {
  const output = [...digits]
  let carry = 1
  let ptr = digits.length - 1

  while (true) {
    const num = output[ptr] + carry

    if (num < 10) {
      output[ptr] = num
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
