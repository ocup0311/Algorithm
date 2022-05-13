// Write an efficient algorithm that searches for a value target in an m x n integer matrix matrix.
// This matrix has the following properties:

// Integers in each row are sorted in ascending from left to right.
// Integers in each column are sorted in ascending from top to bottom.

// Example 1:
// Input: matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 5
// Output: true

// Example 2:
// Input: matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 20
// Output: false

// Constraints:
// m == matrix.length
// n == matrix[i].length
// 1 <= n, m <= 300
// -10^9 <= matrix[i][j] <= 10^9
// All the integers in each row are sorted in ascending order.
// All the integers in each column are sorted in ascending order.
// -10^9 <= target <= 10^9

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

// Notice --------------------------------------------------------
// 1. 排序 小 --> 大  =>=>  左 --> 右 ＆ 上 --> 下

// 1. ------------------------------------------------------------
// Runtime: 30.18% / 2832 ms
// Memory Usage: 50.8 MB
const searchMatrix = (matrix, target) => {
  if (matrix.length === 0 || matrix[0].length === 0) return false

  let idxRS = 0
  let idxRE = matrix.length - 1
  let idxCS = 0
  let idxCE = matrix[0].length - 1

  // run
  while (idxRS <= idxRE && idxCS <= idxCE) {
    let ptrRS = idxRS
    let ptrRE = idxRE
    let ptrCS = idxCS
    let ptrCE = idxCE

    while (ptrRS <= ptrRE) {
      const ptrRM = Math.floor((ptrRS + ptrRE) / 2)

      if (target === matrix[ptrRM][idxCS]) return true

      if (target < matrix[ptrRM][idxCS]) {
        idxRE = ptrRM - 1
        ptrRE = ptrRM - 1
      } else {
        ptrRS = ptrRM + 1
      }
    }

    while (ptrCS <= ptrCE) {
      const ptrCM = Math.floor((ptrCS + ptrCE) / 2)

      if (target === matrix[idxRS][ptrCM]) return true

      if (target < matrix[idxRS][ptrCM]) {
        idxCE = ptrCM - 1
        ptrCE = ptrCM - 1
      } else {
        ptrCS = ptrCM + 1
      }
    }

    ptrRS = idxRS
    ptrRE = idxRE
    ptrCS = idxCS
    ptrCE = idxCE

    while (ptrRS <= ptrRE) {
      const ptrRM = Math.floor((ptrRS + ptrRE) / 2)

      if (target === matrix[ptrRM][idxCE]) return true

      if (target > matrix[ptrRM][idxCE]) {
        idxRS = ptrRM + 1
        ptrRS = ptrRM + 1
      } else {
        ptrRE = ptrRM - 1
      }
    }

    while (ptrCS <= ptrCE) {
      const ptrCM = Math.floor((ptrCS + ptrCE) / 2)

      if (target === matrix[idxRE][ptrCM]) return true

      if (target > matrix[idxRE][ptrCM]) {
        idxCS = ptrCM + 1
        ptrCS = ptrCM + 1
      } else {
        ptrCE = ptrCM - 1
      }
    }
  }

  return false
}
