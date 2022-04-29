// Given a string s, find the length of the longest substring without repeating characters.

// Example 1:
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

// Example 2:
// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.

// Example 3:
// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

// Constraints:
// 0 <= s.length <= 5 * 10^4
// s consists of English letters, digits, symbols and spaces.

// Notice --------------------------------------------------------

// 1. ------------------------------------------------------------
// Runtime: 81.64% / 100 ms
// Memory: 35.87% / 48.9 MB
const lengthOfLongestSubstring1 = (s) => {
  const counter = {}
  let lenMax = 0
  let ptrS = -1

  // function
  const runEach = (char, ptrE, str) => {
    if (counter[char]) {
      while (char !== str[++ptrS]) counter[str[ptrS]] = false
      return
    }

    counter[char] = true
    lenMax = Math.max(lenMax, ptrE - ptrS)
  }

  // run
  s.split('').forEach(runEach)

  return lenMax
}

// 2. ------------------------------------------------------------
// Runtime: 118 ms
// Memory Usage: 49.5 MB
const lengthOfLongestSubstring2 = (s) => {
  const counter = {}
  let lenMax = 0
  let ptrS = 0

  // function
  const runEach = (char, ptrE, str) => {
    if (counter[char]) {
      while (char !== str[ptrS]) {
        counter[str[ptrS]] = false
        ptrS++
      }
      ptrS++
    } else {
      counter[char] = true
      lenMax = Math.max(lenMax, ptrE - ptrS + 1)
    }
  }

  // run
  s.split('').forEach(runEach)

  return lenMax
}

// 3. ------------------------------------------------------------
// Runtime: 99 ms
// Memory Usage: 48.6 MB
const lengthOfLongestSubstring = (s) => {
  const cache = {}
  let lenMax = 0
  let ptrS = 0

  // function
  const runEach = (char, ptrE) => {
    if (char in cache) ptrS = Math.max(ptrS, cache[char] + 1)

    cache[char] = ptrE
    lenMax = Math.max(lenMax, ptrE - ptrS + 1)
  }

  // run
  s.split('').forEach(runEach)

  return lenMax
}
