// Implement the myAtoi(string s) function, which converts a string to a 32-bit signed
// integer (similar to C/C++'s atoi function).

// The algorithm for myAtoi(string s) is as follows:

// Read in and ignore any leading whitespace.
// Check if the next character (if not already at the end of the string) is '-' or '+'.
// Read this character in if it is either. This determines if the final result is negative
// or positive respectively. Assume the result is positive if neither is present.
// Read in next the characters until the next non-digit character or the end of the input
// is reached. The rest of the string is ignored.

// Convert these digits into an integer (i.e. "123" -> 123, "0032" -> 32). If no digits were
// read, then the integer is 0. Change the sign as necessary (from step 2).
// If the integer is out of the 32-bit signed integer range [-231, 231 - 1], then clamp the
// integer so that it remains in the range. Specifically, integers less than -231 should be
// clamped to -231, and integers greater than 231 - 1 should be clamped to 231 - 1.
// Return the integer as the final result.
// Note:

// Only the space character ' ' is considered a whitespace character.
// Do not ignore any characters other than the leading whitespace or the rest of the string
// after the digits.

// Example 1: ------------------------------------------------------------------------------
// Input: s = "42"
// Output: 42
// Explanation: The underlined characters are what is read in, the caret is the current reader position.
// Step 1: "42" (no characters read because there is no leading whitespace)
//          ^
// Step 2: "42" (no characters read because there is neither a '-' nor '+')
//          ^
// Step 3: "42" ("42" is read in)
//            ^
// The parsed integer is 42.
// Since 42 is in the range [-231, 231 - 1], the final result is 42.

// Example 2: ------------------------------------------------------------------------------
// Input: s = "   -42"
// Output: -42
// Explanation:
// Step 1: "   -42" (leading whitespace is read and ignored)
//             ^
// Step 2: "   -42" ('-' is read, so the result should be negative)
//              ^
// Step 3: "   -42" ("42" is read in)
//                ^
// The parsed integer is -42.
// Since -42 is in the range [-231, 231 - 1], the final result is -42.

// Example 3: ------------------------------------------------------------------------------
// Input: s = "4193 with words"
// Output: 4193
// Explanation:
// Step 1: "4193 with words" (no characters read because there is no leading whitespace)
//          ^
// Step 2: "4193 with words" (no characters read because there is neither a '-' nor '+')
//          ^
// Step 3: "4193 with words" ("4193" is read in; reading stops because the next character is a non-digit)
//              ^
// The parsed integer is 4193.
// Since 4193 is in the range [-231, 231 - 1], the final result is 4193.

// Constraints:
// 0 <= s.length <= 200
// s consists of English letters (lower-case and upper-case), digits (0-9), ' ', '+', '-', and '.'.

/**
 * @param {string} s
 * @return {number}
 */

// Notice --------------------------------------------------------
// 1. 回傳字串中第一組 Number
// 2. 開頭只能省略空白，只有開頭省略
// 3. 不能超出 int 範圍，則回傳極限值
// 4. 類似 parseInt

// 1. ------------------------------------------------------------
// 快速用內建方法釐清需求
const myAtoi1 = (s) => {
  const INT_MAX = 2 ** 30 - 1 + 2 ** 30
  const INT_MIN = -(2 ** 30) - 2 ** 30

  let num = parseInt(s)

  if (num > INT_MAX) return INT_MAX
  if (num < INT_MIN) return INT_MIN

  return num || 0
}

// 2. ------------------------------------------------------------
// Runtime: 97.62% / 66 ms
// Memory: 50.00% / 44.9 MB
const myAtoi2 = (s) => {
  // exception
  if (s.length === 0) return 0

  // CONST
  const INT_MAX = 2 ** 30 - 1 + 2 ** 30
  const INT_MIN = -(2 ** 30) - 2 ** 30
  const SPACE = ' '
  const ZERO = '0'
  const SIGN = [
    ['-', INT_MIN],
    ['+', INT_MAX],
  ]
  const DIGIT = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

  // var
  const maxLen = INT_MAX.toString().length
  let limit = 0
  let str = ''
  let sign = false

  // function
  const checkSign = (index) =>
    SIGN.some((v, i) => {
      if (v[0] === s[index]) {
        sign = v[0]
        limit = v[1]

        return true
      }

      return false
    })

  // run
  for (let i = 0; i < s.length; i++) {
    if (s[i] === SPACE && !sign) continue

    if (!sign && checkSign(i)) continue

    if (!sign) {
      sign = '+'
      limit = INT_MAX
    }

    if (!DIGIT.includes(s[i])) break

    if (s[i] === ZERO && str === '') continue

    if (str.length >= maxLen) return limit

    if (
      (str.length === maxLen - 1 && str > Math.abs(limit / 10)) ||
      (str == Math.trunc(Math.abs(limit / 10)) && s[i] >= Math.abs(limit % 10))
    )
      return limit

    str = str + s[i]
  }

  // exception
  if (str === '') return 0

  return Number(sign + str)
}

// 3. ------------------------------------------------------------
const myAtoi3 = (s) => {
  // exception
  if (s.length === 0) return 0

  // CONST
  const [INT_MAX, INT_MIN] = [2 ** 30 - 1 + 2 ** 30, -(2 ** 30) - 2 ** 30]
  const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
  const SIGN = { P: '+', N: '-' }
  const IGNORE = { S: ' ', Z: '0' }
  const STAGE = { PREV: 'prev', POST: 'post' }

  // var
  const maxLen = INT_MAX.toString().length
  let stage = STAGE.PREV
  let limit = 0
  let sign = ''
  let strDigit = ''

  // function
  const isPrevStage = () => stage === STAGE.PREV
  const isIgnoreSpace = (char) => char === IGNORE.S
  const isNegative = (char) => char === SIGN.N
  const isPositive = (char) => char === SIGN.P
  const isIgnoreZero = (str, char) => char === IGNORE.Z && str === ''

  const isNonDigit = (char) => !DIGITS.includes(char)
  const isTooLong = (str) => str.length >= maxLen
  const isOverLimit = (str, char) =>
    (str.length === maxLen - 1 && str > Math.abs(limit / 10)) ||
    (str == Math.trunc(Math.abs(limit / 10)) && char >= Math.abs(limit % 10))

  // run
  for (let i = 0; i < s.length; i++) {
    const charI = s[i]

    // prev
    if (isPrevStage()) {
      if (!sign) {
        if (isIgnoreSpace(charI)) continue

        if (isNegative(charI)) {
          sign = SIGN.N
          limit = INT_MIN
          continue
        }

        sign = SIGN.P
        limit = INT_MAX

        if (isPositive(charI)) continue
      }

      if (isIgnoreZero(strDigit, charI)) continue

      stage = STAGE.POST
    }

    // post
    if (isNonDigit(charI)) break
    if (isTooLong(strDigit)) return limit
    if (isOverLimit(strDigit, charI)) return limit

    strDigit = strDigit + charI
  }

  // exception
  if (strDigit === '') return 0

  return Number(sign + strDigit)
}
