// Given a string s, find the first non-repeating character in it and return its index.
// If it does not exist, return -1.

// Example 1:
// Input: s = "leetcode"
// Output: 0

// Example 2:
// Input: s = "loveleetcode"
// Output: 2

// Example 3:
// Input: s = "aabb"
// Output: -1

// Constraints:
// 1 <= s.length <= 105
// s consists of only lowercase English letters.

// Notice --------------------------------------------------------
// 1. 只有小寫
// 2. 找到第一個沒有重複的字母

// 1. ------------------------------------------------------------
// Runtime: 97.62% / 84 ms
// Memory: 39.61% / 46 MB
const firstUniqChar1 = (s) => {
  const cache = {}

  for (let i = 0; i < s.length; i++) {
    let isRepeat = cache[s[i]] || false

    for (let j = i + 1; j < s.length && !isRepeat; j++) {
      if (s[i] === s[j]) {
        isRepeat = true
        cache[s[i]] = true
      }
    }

    if (!isRepeat) return i
  }

  return -1
}

// 2. ------------------------------------------------------------
// Runtime: 78.83% / 110 ms
// Memory: 52.19% / 45.7 MB
const firstUniqChar2 = (s) => {
  const cache = {}

  for (let i = 0; i < s.length; i++) {
    cache[s[i]] = cache[s[i]] + 1 || 1
  }

  for (let i = 0; i < s.length; i++) {
    if (cache[s[i]] === 1) return i
  }

  return -1
}
