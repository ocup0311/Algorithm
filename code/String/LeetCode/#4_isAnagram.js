// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word
// or phrase, typically using all the original letters exactly once.

// Example 1:
// Input: s = "anagram", t = "nagaram"
// Output: true

// Example 2:
// Input: s = "rat", t = "car"
// Output: false

// Constraints:
// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.

// Follow up: What if the inputs contain Unicode characters? How would you adapt your
// solution to such a case?

// Notice --------------------------------------------------------
// 1. 只有小寫
// 2. 只會用原有的來組合，且不能少？

// 1. ------------------------------------------------------------
// Runtime: 86.01% /  81 ms
// Memory: 79.45% / 43.2 MB
const isAnagram = (s, t) => {
  if (s.length !== t.length) return false

  const cache = {}

  for (let i = 0; i < s.length; i++) {
    cache[s[i]] = cache[s[i]] + 1 || 1
  }

  for (let i = 0; i < t.length; i++) {
    if (!cache[t[i]]) return false
    cache[t[i]]--
  }

  return true
}
