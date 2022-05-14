// Given a string s, return the longest palindromic substring in s.

// Example 1:
// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.

// Example 2:
// Input: s = "cbbd"
// Output: "bb"

// Constraints:
// 1 <= s.length <= 1000
// s consist of only digits and English letters.

/**
 * @param {string} s
 * @return {string}
 */

// Notice --------------------------------------------------------
// 1. 只有英文＋數字

// 1. ------------------------------------------------------------
// Runtime: 96.44% / 86 ms
// Memory Usage: 53.39% / 46.8 MB
const longestPalindrome1 = (s) => {
  let result = [0, 0]

  // function
  const getShortPalindrome = (cache, char, ptrS, str) => {
    if (char === str[ptrS + 1]) cache.push([ptrS, ptrS + 1])
    if (char === str[ptrS + 2]) cache.push([ptrS, ptrS + 2])

    return cache
  }
  const getLongPalindrome = ([ptrS, ptrE]) => {
    while (ptrS > 0 && ptrE < s.length - 1) {
      if (s[ptrS - 1] !== s[ptrE + 1]) break

      ptrS--
      ptrE++
    }
    if (result[1] - result[0] < ptrE - ptrS) result = [ptrS, ptrE]
  }

  // run
  s.split('').reduce(getShortPalindrome, []).forEach(getLongPalindrome)

  return s.slice(result[0], result[1] + 1)
}

// 2. ------------------------------------------------------------
// 修改命名、更加 FP
// Runtime: 118 ms
// Memory Usage: 47 MB
const longestPalindrome2 = (s) => {
  // function
  const getShortestPalindromes = (candidateSet, char, ptrS) => {
    if (char === s[ptrS + 1]) candidateSet.push([ptrS, ptrS + 1])
    if (char === s[ptrS + 2]) candidateSet.push([ptrS, ptrS + 2])

    return candidateSet
  }
  const getLongestPalindrome = ([ptrSL, ptrEL], [ptrS, ptrE]) => {
    while (ptrS > 0 && ptrE < s.length - 1) {
      if (s[ptrS - 1] !== s[ptrE + 1]) break

      ptrS--
      ptrE++
    }
    if (ptrEL - ptrSL < ptrE - ptrS) return [ptrS, ptrE]

    return [ptrSL, ptrEL]
  }

  // run
  const [ptrS, ptrE] = s
    .split('')
    .reduce(getShortestPalindromes, [])
    .reduce(getLongestPalindrome, [0, 0])

  return s.slice(ptrS, ptrE + 1)
}

// 3. ------------------------------------------------------------
// 多加 exception
// Runtime: 100 ms
// Memory Usage: 47.2 MB
const longestPalindrome3 = (s) => {
  // function
  const getShortestPalindromes = (candidateSet, char, ptrS) => {
    if (char === s[ptrS + 1]) candidateSet.push([ptrS, ptrS + 1])
    if (char === s[ptrS + 2]) candidateSet.push([ptrS, ptrS + 2])

    return candidateSet
  }
  const getLongestPalindrome = ([ptrSL, ptrEL], [ptrS, ptrE]) => {
    const lenLon = ptrEL - ptrSL + 1
    const lenCur = ptrE - ptrS + 1
    const lenExt = Math.max(ptrS, s.length - 1 - ptrE) * 2
    if (lenCur + lenExt <= lenLon) return [ptrSL, ptrEL]

    while (ptrS > 0 && ptrE < s.length - 1) {
      if (s[ptrS - 1] !== s[ptrE + 1]) break

      ptrS--
      ptrE++
    }
    if (ptrEL - ptrSL < ptrE - ptrS) return [ptrS, ptrE]

    return [ptrSL, ptrEL]
  }

  // run
  const [ptrS, ptrE] = s
    .split('')
    .reduce(getShortestPalindromes, [])
    .reduce(getLongestPalindrome, [0, 0])

  return s.slice(ptrS, ptrE + 1)
}

// 4. ------------------------------------------------------------
// Runtime: 115 ms
// Memory Usage: 46.8 MB
const longestPalindrome = (s) => {
  // function
  const getShortestPalindromes = (str) => {
    return (candidateSet, char, ptrS) => {
      if (char === str[ptrS + 1]) candidateSet.push([ptrS, ptrS + 1])
      if (char === str[ptrS + 2]) candidateSet.push([ptrS, ptrS + 2])

      return candidateSet
    }
  }
  const getLongestPalindrome = (str) => {
    return ([ptrSL, ptrEL], [ptrS, ptrE]) => {
      // exception
      const lenLon = ptrEL - ptrSL + 1
      const lenCur = ptrE - ptrS + 1
      const lenExt = Math.max(ptrS, str.length - 1 - ptrE) * 2
      if (lenCur + lenExt <= lenLon) return [ptrSL, ptrEL]

      // run
      while (ptrS > 0 && ptrE < str.length - 1) {
        if (str[ptrS - 1] !== str[ptrE + 1]) break

        ptrS--
        ptrE++
      }
      if (ptrEL - ptrSL < ptrE - ptrS) return [ptrS, ptrE]

      return [ptrSL, ptrEL]
    }
  }

  // run
  const [ptrS, ptrE] = s
    .split('')
    .reduce(getShortestPalindromes(s), [])
    .reduce(getLongestPalindrome(s), [0, 0])

  return s.slice(ptrS, ptrE + 1)
}
