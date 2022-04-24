// Write a function that takes an unsigned integer and returns the number of '1' bits
// it has (also known as the Hamming weight).

// Note:

// Note that in some languages, such as Java, there is no unsigned integer type. In this case,
// the input will be given as a signed integer type. It should not affect your implementation,
// as the integer's internal binary representation is the same, whether it is signed or unsigned.
// In Java, the compiler represents the signed integers using 2's complement notation. Therefore,
// in Example 3, the input represents the signed integer. -3.

// Example 1:
// Input: n = 00000000000000000000000000001011
// Output: 3
// Explanation: The input binary string 00000000000000000000000000001011 has a total of three '1' bits.

// Example 2:
// Input: n = 00000000000000000000000010000000
// Output: 1
// Explanation: The input binary string 00000000000000000000000010000000 has a total of one '1' bit.

// Example 3:
// Input: n = 11111111111111111111111111111101
// Output: 31
// Explanation: The input binary string 11111111111111111111111111111101 has a total of thirty one '1' bits.

// Constraints:
// The input must be a binary string of length 32.

// Follow up: If this function is called many times, how would you optimize it?

/**
 * @param {number} n - a positive integer
 * @return {number}
 */

// Notice --------------------------------------------------------
// 1. 沒有正負

// 1. ------------------------------------------------------------
// Runtime: 50.90% / 87 ms
// Memory: 99.37% / 41.7 MB
const hammingWeight1 = (n) => {
  let num = n
  let result = 0

  while (num > 0) {
    result = result + (num % 2)
    num = Math.floor(num / 2)
  }

  return result
}

// 2. ------------------------------------------------------------
// Runtime: 71.48% / 75 ms
// Memory: 50.96% / 42.6 MB
const hammingWeight2 = (() => {
  const cache = {}

  return (n) => {
    let num = n
    let result = 0

    while (num > 0) {
      if (cache[n]) {
        result = cache[n] + result
        break
      }

      result = result + (num % 2)
      num = Math.floor(num / 2)
    }

    cache[n] = result

    return result
  }
})()

// 3. ------------------------------------------------------------
// Runtime: 97.34% / 60 ms
// Memory: 61.92% / 42.6 MB
const hammingWeight = (n) => {
  let num = n.toString(2)
  let count = 0

  for (let i = 0; i < num.length; i++) {
    if (num[i] === '1') count++
  }

  return count
}
