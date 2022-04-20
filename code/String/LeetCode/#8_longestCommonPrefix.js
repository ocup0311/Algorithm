// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:
// Input: strs = ["flower","flow","flight"]
// Output: "fl"

// Example 2:
// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

// Constraints:
// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lower-case English letters.

/**
 * @param {string[]} strs
 * @return {string}
 */

// Notice --------------------------------------------------------
// 1. 沒有則回傳 ''
// 2. 只有小寫英文
// 3. 有沒有可能只有一個或沒有 str?

// 1. ------------------------------------------------------------
// Runtime: 64.43% / 77 ms
// Memory: 29.21% / 43.7 MB
const longestCommonPrefix1 = (strs) => {
  const [first, ...others] = strs
  let ptr = 0

  while (ptr < first.length) {
    for (let i = 0; i < others.length; i++) {
      if (others[i][ptr] !== first[ptr]) return first.slice(0, ptr)
    }
    ptr++
  }

  return first.slice(0, ptr)
}

// 2. ------------------------------------------------------------
const longestCommonPrefix2 = (strs) => {
  const first = strs[0]
  let ptr = 0

  while (ptr < first.length) {
    for (let i = 1; i < strs.length; i++) {
      if (strs[i][ptr] !== first[ptr]) return first.slice(0, ptr)
    }
    ptr++
  }

  return first.slice(0, ptr)
}

// 3. ------------------------------------------------------------
// Runtime: 86.82% / 66 ms
// Memory: 64.74% / 42.6 MB
const longestCommonPrefix3 = (strs) => {
  const [first, ...others] = strs
  let [idxStart, idxEnd] = [0, first.length]

  // function
  const isAllSame = (s, e) =>
    others.every((v) => v.slice(s, e) === first.slice(s, e))

  // run
  while (idxStart < idxEnd) {
    const idxMiddle = Math.ceil((idxStart + idxEnd) / 2)

    if (isAllSame(idxStart, idxMiddle)) idxStart = idxMiddle
    else idxEnd = idxMiddle - 1
  }

  return first.slice(0, idxEnd)
}
