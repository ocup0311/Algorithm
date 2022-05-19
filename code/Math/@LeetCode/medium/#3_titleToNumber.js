// Given a string columnTitle that represents the column title as appears in an Excel sheet,
// return its corresponding column number.

// For example:
// A -> 1
// B -> 2
// C -> 3
// ...
// Z -> 26
// AA -> 27
// AB -> 28
// ...

// Example 1:
// Input: columnTitle = "A"
// Output: 1

// Example 2:
// Input: columnTitle = "AB"
// Output: 28

// Example 3:
// Input: columnTitle = "ZY"
// Output: 701

// Constraints:
// 1 <= columnTitle.length <= 7
// columnTitle consists only of uppercase English letters.
// columnTitle is in the range ["A", "FXSHRXW"].

/**
 * @param {string} columnTitle
 * @return {number}
 */

// Notice --------------------------------------------------------

// 1. ------------------------------------------------------------
// Runtime: 67.58% / 84 ms
// Memory Usage: 80.02% / 43.1 MB
const titleToNumber1 = (columnTitle) => {
  const pairs = {
    A: 1,
    B: 2,
    C: 3,
    D: 4,
    E: 5,
    F: 6,
    G: 7,
    H: 8,
    I: 9,
    J: 10,
    K: 11,
    L: 12,
    M: 13,
    N: 14,
    O: 15,
    P: 16,
    Q: 17,
    R: 18,
    S: 19,
    T: 20,
    U: 21,
    V: 22,
    W: 23,
    X: 24,
    Y: 25,
    Z: 26,
  }

  let ptr = columnTitle.length - 1
  let n = 0
  let result = 0

  while (ptr >= 0) {
    const char = columnTitle[ptr]
    result = result + pairs[char] * 26 ** n

    ptr--
    n++
  }

  return result
}

// 2. ------------------------------------------------------------
// Runtime: 86 ms
// Memory Usage: 43.9 MB
const titleToNumber2 = (columnTitle) => {
  const A = 'A'.charCodeAt()

  let ptr = columnTitle.length - 1
  let n = 0
  let result = 0

  while (ptr >= 0) {
    const char = columnTitle[ptr].charCodeAt()
    const pair = char - A + 1
    result = result + pair * 26 ** n

    ptr--
    n++
  }

  return result
}

// 3. ------------------------------------------------------------
// Runtime: 83 ms
// Memory Usage: 42.9 MB
const A = 'A'.charCodeAt()
const titleToNumber3 = (columnTitle) => {
  if (columnTitle === '') return 0

  const restC = columnTitle.slice(1)
  const char = columnTitle[0].charCodeAt()
  const pair = char - A + 1
  const n = columnTitle.length - 1
  const result = pair * 26 ** n

  return result + titleToNumber3(restC)
}

// 4. ------------------------------------------------------------
// from 2
// Runtime: 91.51% / 72 ms
// Memory Usage: 81.70% / 43 MB
const titleToNumber = (columnTitle) => {
  const A = 'A'.charCodeAt()

  let n = 1
  let result = 0

  for (let i = columnTitle.length - 1; i >= 0; i--) {
    const char = columnTitle[i].charCodeAt()
    const pair = char - A + 1
    result = result + pair * n

    n = n * 26
  }

  return result
}
