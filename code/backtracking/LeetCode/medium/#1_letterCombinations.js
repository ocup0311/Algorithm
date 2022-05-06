// Given a string containing digits from 2-9 inclusive, return all possible letter
// combinations that the number could represent. Return the answer in any order.

// A mapping of digit to letters (just like on the telephone buttons) is given below.
// Note that 1 does not map to any letters.

// Example 1:
// Input: digits = "23"
// Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]

// Example 2:
// Input: digits = ""
// Output: []

// Example 3:
// Input: digits = "2"
// Output: ["a","b","c"]

// Constraints:
// 0 <= digits.length <= 4
// digits[i] is a digit in the range ['2', '9'].

/**
 * @param {string} digits
 * @return {string[]}
 */

// Notice --------------------------------------------------------

// 1. ------------------------------------------------------------
// Runtime: 64.79% / 69 ms
// Memory Usage: 39.37% / 42.3 MB
const letterCombinations1 = (digits) => {
  // exception
  if (!digits) return []

  // var
  const pair = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
  }
  let output = ['']

  // run
  for (let i = 0; i < digits.length; i++) {
    output = output.reduce(
      (t, v) => t.concat(pair[digits[i]].map((p) => v + p)),
      []
    )
  }

  return output
}

// 2. ------------------------------------------------------------
// Runtime: 108 ms
// Memory Usage: 41.8 MB
const letterCombinations = (digits) => {
  // exception
  if (!digits) return []

  // var
  const pair = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
  }
  const output = []
  const metadata = digits.split('').map((num) => ({
    num,
    ptr: pair[num].length - 1,
    max: pair[num].length - 1,
  }))
  const max = digits.length - 1
  let ptr = max

  // run
  while (ptr >= 0) {
    ptr = max

    const str = metadata.map((v) => pair[v.num][v.ptr]).join('')
    output.push(str)

    metadata[ptr].ptr--

    while (metadata[ptr].ptr < 0) {
      metadata[ptr].ptr = metadata[ptr].max
      ptr--

      if (ptr < 0) return output
      metadata[ptr].ptr--
    }
  }
}
