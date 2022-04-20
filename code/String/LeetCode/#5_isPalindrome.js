// A phrase is a palindrome if, after converting all uppercase letters into lowercase
// letters and removing all non-alphanumeric characters, it reads the same forward
// and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

// Example 1:
// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

// Example 2:
// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.

// Example 3:
// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.

// Constraints:
// 1 <= s.length <= 2 * 105
// s consists only of printable ASCII characters.

// Notice --------------------------------------------------------
// 1. 只看英文字母 ＆ 數字
// 2. 不分大小寫

// 1. ------------------------------------------------------------
// Runtime: 72.33% / 83 ms
// Memory: 80.42% / 44.3 MB
const isPalindrome = (s) => {
  const modifiedS = s.toLowerCase()
  let ptrL = 0
  let ptrR = s.length - 1

  // function
  const isChar = (char) => {
    const charA = 97
    const charZ = 122
    const char0 = 48
    const char9 = 57

    if (char >= charA && char <= charZ) return true
    if (char >= char0 && char <= char9) return true

    return false
  }

  // run
  while (ptrL < ptrR) {
    const charL = modifiedS.charCodeAt(ptrL)
    const charR = modifiedS.charCodeAt(ptrR)

    if (!isChar(charL)) {
      ptrL++
      continue
    }
    if (!isChar(charR)) {
      ptrR--
      continue
    }

    if (charL !== charR) return false

    ptrL++
    ptrR--
  }

  return true
}
