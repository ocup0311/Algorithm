// Implement strStr().

// Given two strings needle and haystack, return the index of the first occurrence of needle
// in haystack, or -1 if needle is not part of haystack.

// Clarification:

// What should we return when needle is an empty string? This is a great question to ask
// during an interview.

// For the purpose of this problem, we will return 0 when needle is an empty string. This
// is consistent to C's strstr() and Java's indexOf().

// Example 1:

// Input: haystack = "hello", needle = "ll"
// Output: 2
// Example 2:

// Input: haystack = "aaaaa", needle = "bba"
// Output: -1

// Constraints:

// 1 <= haystack.length, needle.length <= 104
// haystack and needle consist of only lowercase English characters.

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

// Notice --------------------------------------------------------
// 1. 空的 needle 回傳 0

// 1. ------------------------------------------------------------
// Runtime: 91.33% / 61 ms
// Memory: 60.70% / 42.3 MB
const strStr1 = (haystack, needle) => {
  if (needle.length === 0) return 0
  if (haystack.length < needle.length) return -1

  for (let i = 0; i < haystack.length - needle.length + 1; i++) {
    let check = true
    let ptr = 0

    while (ptr < needle.length && check) {
      if (haystack[i + ptr] !== needle[ptr]) check = false
      ptr++
    }

    if (check) return i
  }

  return -1
}

// 2. ------------------------------------------------------------
// Runtime: 95.05% / 59 ms
// Memory: 74.78% / 42.1 MB
const strStr2 = (haystack, needle) => {
  if (needle.length === 0) return 0
  if (haystack.length < needle.length) return -1

  const size = needle.length

  for (let i = 0; i < haystack.length - size + 1; i++) {
    const subStr = haystack.slice(i, i + size)

    if (subStr === needle) return i
  }

  return -1
}
