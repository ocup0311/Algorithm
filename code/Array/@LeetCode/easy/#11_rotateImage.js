// You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

// You have to rotate the image in-place, which means you have to modify the input
// 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

// Example 1:
// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [[7,4,1],[8,5,2],[9,6,3]]

// Example 2:
// Input: matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
// Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]

// Constraints:
// n == matrix.length == matrix[i].length
// 1 <= n <= 20
// -1000 <= matrix[i][j] <= 1000

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

// Notice --------------------------------------------------------
// 1. 不可建立另一個 matrix

// Note ----------------------------------------------------------
// 一開始想出可行作法後，卡在 for range, k, l 的取捨。
// --> 可先畫出 5x5 圖幫助思考 --> 先定下 for range 比較容易 --> 再來思考 k, l 細節

// 1. ------------------------------------------------------------
// 此方法是將 matrix 切成 1/4，將其視為整塊轉一圈
// Runtime: 85.00% / 62 ms
// Memory: 75.54% / 42.1 MB
// T(m): O(m)
// S(m): O(1)
const solution1 = () => {
  const rotateImage = (matrix) => {
    const lastIndex = matrix.length - 1
    const halfLength = Math.floor(matrix.length / 2)
    const restLength = matrix.length % 2

    for (let i = 0; i < halfLength + restLength; i++) {
      for (let j = 0; j < halfLength; j++) {
        const k = lastIndex - i
        const l = lastIndex - j
        const temp = matrix[i][j]

        matrix[i][j] = matrix[l][i]
        matrix[l][i] = matrix[k][l]
        matrix[k][l] = matrix[j][k]
        matrix[j][k] = temp
      }
    }
  }
}

// 二刷：
// 1. ------------------------------------------------------------
// 此方法是從最外圈開始轉一圈，再依次往內縮
// T(m): O(m)
// S(m): O(1)
const solution1a = () => {
  const rotate = (matrix) => {
    let i = 0
    let j = matrix.length - 1

    while (i < j) {
      let a = i
      let b = j

      while (a < j) {
        rotatePoint(matrix, a, b, i, j)
        a++
        b--
      }

      i++
      j--
    }
  }

  // function
  function swap(matrix, point1, point2) {
    const tmp = matrix[point1[0]][point1[1]]
    matrix[point1[0]][point1[1]] = matrix[point2[0]][point2[1]]
    matrix[point2[0]][point2[1]] = tmp
  }
  function rotatePoint(matrix, a, b, i, j) {
    const head = [i, a]
    swap(matrix, head, [a, j])
    swap(matrix, head, [j, b])
    swap(matrix, head, [b, i])
  }
}

// 2. ------------------------------------------------------------
// 從 solution1a 整理而來
// T(m): O(m)
// S(m): O(1)
const solution2a = () => {
  const rotate = (matrix) => {
    let borderS = 0
    let borderE = matrix.length - 1

    while (borderS < borderE) {
      for (let ptr = 0; borderS + ptr < borderE; ptr++) {
        rotatePoint(matrix, borderS, borderE, ptr)
      }

      borderS++
      borderE--
    }
  }

  // function
  function swap(matrix, point1, point2) {
    const tmp = matrix[point1[0]][point1[1]]
    matrix[point1[0]][point1[1]] = matrix[point2[0]][point2[1]]
    matrix[point2[0]][point2[1]] = tmp
  }
  function rotatePoint(matrix, idxS, idxE, ptr) {
    const head = [idxS, idxS + ptr]
    swap(matrix, head, [idxS + ptr, idxE])
    swap(matrix, head, [idxE, idxE - ptr])
    swap(matrix, head, [idxE - ptr, idxS])
  }
}

// 3. ------------------------------------------------------------
// 先進行 transpose (m x n --> n x m) 再進行 reflect (左右鏡像)
// T(m): O(m)
// S(m): O(1)
const solution3a = () => {
  const rotate = (matrix) => {
    transpose(matrix)
    reflect(matrix)
  }

  // function
  function transpose(matrix) {
    const len = matrix.length
    for (let i = 0; i < len; i++) {
      for (let j = i + 1; j < len; j++) {
        swap(matrix, [j, i], [i, j])
      }
    }
  }
  function reflect(matrix) {
    const len = matrix.length
    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len / 2; j++) {
        swap(matrix, [i, j], [i, len - j - 1])
      }
    }
  }
  function swap(matrix, point1, point2) {
    const tmp = matrix[point1[0]][point1[1]]
    matrix[point1[0]][point1[1]] = matrix[point2[0]][point2[1]]
    matrix[point2[0]][point2[1]] = tmp
  }
}
