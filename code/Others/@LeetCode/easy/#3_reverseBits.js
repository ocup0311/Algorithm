// Reverse bits of a given 32 bits unsigned integer.

// Note:
// Note that in some languages, such as Java, there is no unsigned integer type. In this case,
// both input and output will be given as a signed integer type. They should not affect your
// implementation, as the integer's internal binary representation is the same, whether it is
// signed or unsigned.
// In Java, the compiler represents the signed integers using 2's complement notation. Therefore,
// in Example 2 above, the input represents the signed integer -3 and the output represents the
// signed integer -1073741825.

// Example 1:
// Input: n = 00000010100101000001111010011100
// Output:    964176192 (00111001011110000010100101000000)
// Explanation: The input binary string 00000010100101000001111010011100 represents the
// unsigned integer 43261596, so return 964176192 which its binary representation is
// 00111001011110000010100101000000.

// Example 2:
// Input: n = 11111111111111111111111111111101
// Output:   3221225471 (10111111111111111111111111111111)
// Explanation: The input binary string 11111111111111111111111111111101 represents
// the unsigned integer 4294967293, so return 3221225471 which its binary representation is
// 10111111111111111111111111111111.

// Constraints:
// The input must be a binary string of length 32

// Follow up: If this function is called many times, how would you optimize it?

/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */

// Notice --------------------------------------------------------
// 1. 32 bits unsigned int
// 2. 如何優化重複計算

// 1. ------------------------------------------------------------
// Runtime: 95.68% / 64 ms
// Memory: 94.55% / 43.6 MB
const reverseBits1 = (n) => {
  let restN = n
  let result = ''

  for (let i = 0; i < 32; i++) {
    result = result + (restN & 1)
    restN = restN >>> 1
  }

  return parseInt(result, 2)
}

// 2. ------------------------------------------------------------
// 優化補零
// Runtime: 95.68% / 64 ms
// Memory: 54.37% / 44.2 MB
const padEnd0 = (str, n) => {
  const data = [
    '',
    '0',
    '00',
    '000',
    '0000',
    '00000',
    '000000',
    '0000000',
    '00000000',
    '000000000',
    '0000000000',
    '00000000000',
    '000000000000',
    '0000000000000',
    '00000000000000',
    '000000000000000',
    '0000000000000000',
    '00000000000000000',
    '000000000000000000',
    '0000000000000000000',
    '00000000000000000000',
    '000000000000000000000',
    '0000000000000000000000',
    '00000000000000000000000',
    '000000000000000000000000',
    '0000000000000000000000000',
    '00000000000000000000000000',
    '000000000000000000000000000',
    '0000000000000000000000000000',
    '00000000000000000000000000000',
    '000000000000000000000000000000',
    '0000000000000000000000000000000',
    '00000000000000000000000000000000',
  ]

  return str + data[n]
}

const reverseBits2 = (n) => {
  let restN = n
  let result = ''

  for (let i = 0; i < 32; i++) {
    if (!restN) {
      result = padEnd0(result, 32 - i)
      break
    }

    result = result + (restN & 1)
    restN = restN >>> 1
  }

  return parseInt(result, 2)
}

// 3. ------------------------------------------------------------
// 優化補零＋重複計算
// Runtime: 99.49% / 55 ms
// Memory: 43.78% / 44.3 MB
const reverseBits = (() => {
  const cache = {}

  const padEnd0 = (str, n) => {
    const data = [
      '',
      '0',
      '00',
      '000',
      '0000',
      '00000',
      '000000',
      '0000000',
      '00000000',
      '000000000',
      '0000000000',
      '00000000000',
      '000000000000',
      '0000000000000',
      '00000000000000',
      '000000000000000',
      '0000000000000000',
      '00000000000000000',
      '000000000000000000',
      '0000000000000000000',
      '00000000000000000000',
      '000000000000000000000',
      '0000000000000000000000',
      '00000000000000000000000',
      '000000000000000000000000',
      '0000000000000000000000000',
      '00000000000000000000000000',
      '000000000000000000000000000',
      '0000000000000000000000000000',
      '00000000000000000000000000000',
      '000000000000000000000000000000',
      '0000000000000000000000000000000',
      '00000000000000000000000000000000',
    ]

    return str + data[n]
  }

  return (n) => {
    let restN = n
    let restDigit = 32
    let result = ''

    while (restN) {
      if (cache[restN]) {
        result = result + cache[restN].result
        restDigit = restDigit - cache[restN].digit
        break
      }

      result = result + (restN & 1)
      restN = restN >>> 1
      restDigit--
    }

    cache[n] = { result, digit: 32 - restDigit }

    if (restDigit > 0) result = padEnd0(result, restDigit)

    return parseInt(result, 2)
  }
})()
