// Given two strings s and t of lengths m and n respectively, return the minimum window
// substring of s such that every character in t (including duplicates) is included in the
// window. If there is no such substring, return the empty string "".

// The testcases will be generated such that the answer is unique.

// A substring is a contiguous sequence of characters within the string.

// Example 1:
// Input: s = "ADOBECODEBANC", t = "ABC"
// Output: "BANC"
// Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.

// Example 2:
// Input: s = "a", t = "a"
// Output: "a"
// Explanation: The entire string s is the minimum window.

// Example 3:
// Input: s = "a", t = "aa"
// Output: ""
// Explanation: Both 'a's from t must be included in the window.
// Since the largest window of s only has one 'a', return empty string.

// Constraints:
// m == s.length
// n == t.length
// 1 <= m, n <= 10^5
// s and t consist of uppercase and lowercase English letters.

// Follow up: Could you find an algorithm that runs in O(m + n) time?

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */

// Notice --------------------------------------------------------
// 1. 有分大小寫
// t 有重複的字，則 subStr 也要有足夠的重複次數 (ex. s = "a", t = "aa"  -->  output = "")
// 3. T(n): O(m + n)

// 1. ------------------------------------------------------------
// Runtime: 72.81% / 109 ms
// Memory Usage: 39.55% / 46.6 MB
const minWindow1 = (s, t) => {
  // exception
  if (s.length < t.length) return ''

  // var
  const Target = new Map()
  const Lack = new Map()
  const Over = new Map()
  let [ptrS, ptrE] = [0, 0]
  let [minS, minE] = [0, 0]
  let minLen = Infinity

  // function
  const isFit = () => Lack.size === 0
  const isShorter = () => ptrE - ptrS < minLen
  const isEndS = () => ptrS > s.length - t.length
  const isEndE = () => ptrE >= s.length
  const update = () => {
    minS = ptrS
    minE = ptrE
    minLen = minE - minS + 1
  }
  const moveS = () => {
    const char = s[ptrS]

    if (Target.has(char)) {
      const overN = Over.get(char) ?? 0
      const lackN = Lack.get(char) ?? 0

      if (overN) Over.set(char, overN - 1)
      else Lack.set(char, lackN + 1)
    }

    ptrS++
  }
  const moveE = () => {
    const char = s[ptrE]

    if (Target.has(char)) {
      const lackN = Lack.get(char) ?? 0
      const overN = Over.get(char) ?? 0

      if (lackN) Lack.set(char, lackN - 1)
      else Over.set(char, overN + 1)

      if (Lack.get(char) === 0) Lack.delete(char)
    }

    ptrE++
  }

  // run
  for (const char of t) {
    const valueT = Target.get(char) ?? 0
    const valueL = Lack.get(char) ?? 0

    Target.set(char, valueT + 1)
    Lack.set(char, valueL + 1)
  }

  while (true) {
    while (isFit()) {
      if (isShorter()) update()
      if (isEndS()) return s.slice(minS, minE)
      moveS()
    }

    while (!isFit()) {
      if (isEndE()) return s.slice(minS, minE)
      moveE()
    }
  }
}

// 2. ------------------------------------------------------------
// 使用 remainLen 就不需要再用 Target, Lack, Over 三個，可以合一
// Runtime: 123 ms
// Memory Usage: 44.7 MB
const minWindow = (s, t) => {
  // exception
  if (s.length < t.length) return ''

  // var
  const countor = {}
  let remainLen = t.length
  let [ptrS, ptrE] = [0, 0]
  let minS = 0
  let minLen = Infinity

  // function
  const isFit = () => remainLen === 0
  const isShorter = () => ptrE - ptrS < minLen
  const isTarget = (char) => typeof countor[char] === 'number'
  const update = () => {
    minS = ptrS
    minLen = ptrE - ptrS
  }

  // run
  for (const char of t) countor[char] ? countor[char]++ : (countor[char] = 1)

  while (ptrE < s.length) {
    const charE = s[ptrE]

    if (countor[charE] > 0) remainLen--
    if (isTarget(charE)) countor[charE]--
    ptrE++

    while (isFit()) {
      const charS = s[ptrS]

      if (isShorter()) update()
      if (isTarget(charS)) countor[charS]++
      ptrS++

      if (countor[charS] > 0) remainLen++
    }
  }

  return minLen === Infinity ? '' : s.slice(minS, minS + minLen)
}
