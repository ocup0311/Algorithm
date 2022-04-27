// Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.

// You must do it in place.

// Example 1:
// Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
// Output: [[1,0,1],[0,0,0],[1,0,1]]

// Example 2:
// Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
// Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]

// Constraints:
// m == matrix.length
// n == matrix[0].length
// 1 <= m, n <= 200
// -2^31 <= matrix[i][j] <= 2^31 - 1

// Follow up:
// A straightforward solution using O(mn) space is probably a bad idea.
// A simple improvement uses O(m + n) space, but still not the best solution.
// Could you devise a constant space solution?

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

// Notice --------------------------------------------------------
// 1. 使整排整列都成為 0
// 2. 是否可用更少 "空間": O(rc) --> O(r+c) --> O(1)

// 1. ------------------------------------------------------------
// Runtime: 7.18% / 173 ms
// Memory: 99.35% / 44.1 MB
// O(r+c) space
const setZeroes1 = (matrix) => {
  const hasZeroRow = new Array(matrix.length).fill(false)
  const hasZeroCol = new Array(matrix[0].length).fill(false)
  const ZEROROW = new Array(hasZeroCol.length).fill(0)

  for (let r = 0; r < hasZeroRow.length; r++) {
    for (let c = 0; c < hasZeroCol.length; c++) {
      if (matrix[r][c] === 0) {
        hasZeroRow[r] = true
        hasZeroCol[c] = true
      }
    }
  }

  for (let r = 0; r < hasZeroRow.length; r++) {
    if (hasZeroRow[r]) matrix[r] = ZEROROW
  }

  for (let c = 0; c < hasZeroCol.length; c++) {
    if (hasZeroCol[c]) {
      for (let r = 0; r < hasZeroRow.length; r++) {
        matrix[r][c] = 0
      }
    }
  }

  return
}

// 2. ------------------------------------------------------------
// Runtime: 66.99% / 97 ms
// Memory: 67.23% / 44.9 MB
// O(1) space
const setZeroes = (matrix) => {
  const lenRow = matrix.length
  const lenCol = matrix[0].length
  const lastRow = lenRow - 1
  let hasZeroLastRow = false

  for (let c = 0; c < lenCol; c++) {
    if (matrix[lastRow][c] === 0) hasZeroLastRow = true
  }

  for (let r = 0; r < lenRow - 1; r++) {
    let hasZero = false

    for (let c = 0; c < lenCol; c++) {
      if (matrix[r][c] === 0) {
        hasZero = true
        matrix[lastRow][c] = 0
      }
    }

    if (hasZero) {
      for (let c = 0; c < lenCol; c++) {
        matrix[r][c] = 0
      }
    }
  }

  for (let c = 0; c < lenCol; c++) {
    if (matrix[lastRow][c] === 0) {
      for (let r = 0; r < lenRow; r++) {
        matrix[r][c] = 0
      }
    }
  }

  if (hasZeroLastRow) {
    for (let c = 0; c < lenCol; c++) {
      matrix[lastRow][c] = 0
    }
  }

  return
}
