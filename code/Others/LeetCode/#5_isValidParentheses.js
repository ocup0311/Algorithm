// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
// determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

// Example 1:
// Input: s = "()"
// Output: true

// Example 2:
// Input: s = "()[]{}"
// Output: true

// Example 3:
// Input: s = "(]"
// Output: false

// Constraints:
// 1 <= s.length <= 10^4
// s consists of parentheses only '()[]{}'.

/**
 * @param {string} s
 * @return {boolean}
 */

// Notice --------------------------------------------------------
// 1. input string 只有 '(', ')', '[', ']', '{', '}'，判斷其是否為關閉的

// 1. ------------------------------------------------------------
// Runtime: 64.97% / 74 ms
// Memory: 95.23% / 41.8 MB
const isValid1 = (s) => {
  const data = { ')': '(', ']': '[', '}': '{' }
  const stack = []

  for (let i = 0; i < s.length; i++) {
    const pair = data[s[i]]

    console.log(pair, s[i], i)
    if (pair) {
      if (pair !== stack.pop()) return false
    } else {
      stack.push(s[i])
    }
  }

  return stack.length === 0
}

// 2. ------------------------------------------------------------
// Runtime: 89.01% / 62 ms
// Memory: 71.18% / 42.2 MB
const isValid = (s) => {
  const data = { ')': '(', ']': '[', '}': '{' }
  const stack = new Array(s.length)
  let ptr = -1

  for (let i = 0; i < s.length; i++) {
    const pair = data[s[i]]

    if (pair) {
      if (pair !== stack[ptr]) return false
      ptr--
    } else {
      ptr++
      stack[ptr] = s[i]
    }
  }

  return ptr === -1
}
