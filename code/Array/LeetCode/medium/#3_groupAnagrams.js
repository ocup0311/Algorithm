// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
// typically using all the original letters exactly once.

// Example 1:
// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// Example 2:
// Input: strs = [""]
// Output: [[""]]

// Example 3:
// Input: strs = ["a"]
// Output: [["a"]]

// Constraints:
// 1 <= strs.length <= 10^4
// 0 <= strs[i].length <= 100
// strs[i] consists of lowercase English letters.

/**
 * @param {string[]} strs
 * @return {string[][]}
 */

// Notice --------------------------------------------------------
// 1. 只有小寫
// 2. 不管順序

// 1. ------------------------------------------------------------
// Runtime: 4091 ms
// Memory: 71.3 MB
const groupAnagrams = (strs) => {
  // var
  const cloneStrs = [...strs]
  const result = []

  // function
  const makeCounter = (str) => {
    const obj = {}

    for (let i = 0; i < str.length; i++) {
      obj[str[i]] = obj[str[i]] + 1 || 1
    }

    return obj
  }
  const check = (cache, str2) => {
    const cloneCache = { ...cache }

    for (let i = 0; i < str2.length; i++) {
      if (!cloneCache[str2[i]]) return false
      cloneCache[str2[i]] = cloneCache[str2[i]] - 1
      if (!cloneCache[str2[i]]) delete cloneCache[str2[i]]
    }

    return Object.keys(cloneCache).length === 0
  }

  // run
  cloneStrs.forEach((curStr, idx) => {
    if (curStr === null) return

    const counter = makeCounter(curStr)
    const newSet = [curStr]

    for (let i = idx + 1; i < cloneStrs.length; i++) {
      if (cloneStrs[i] === null) continue
      if (cloneStrs[i].length !== curStr.length) continue
      if (check(counter, cloneStrs[i])) {
        newSet.push(cloneStrs[i])
        cloneStrs[i] = null
      }
    }

    result.push(newSet)
  })

  return result
}

// 2. ------------------------------------------------------------
// 先排列 或 先分組
