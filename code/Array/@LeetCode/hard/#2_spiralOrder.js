// Given an m x n matrix, return all elements of the matrix in spiral order.

// Example 1:
// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [1,2,3,6,9,8,7,4,5]

// Example 2:
// Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
// Output: [1,2,3,4,8,12,11,10,9,5,6,7]

// Constraints:
// m == matrix.length
// n == matrix[i].length
// 1 <= m, n <= 10
// -100 <= matrix[i][j] <= 100

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */

// Notice --------------------------------------------------------

// 1. ------------------------------------------------------------
// Runtime: 27.91% / 89 ms
// Memory Usage: 49.81% / 41.9 MB
const spiralOrder1 = (matrix) => {
  const output = []
  let [top, bottom, left, right] = [-1, matrix.length, -1, matrix[0].length]
  let [ptrR, ptrC] = [0, 0]

  // function
  const goRight = () => {
    while (ptrC < right) {
      output.push(matrix[ptrR][ptrC])
      ptrC++
    }

    ptrR++
    ptrC--
    top++
  }
  const goBottom = () => {
    while (ptrR < bottom) {
      output.push(matrix[ptrR][ptrC])
      ptrR++
    }

    ptrC--
    ptrR--
    right--
  }
  const goLeft = () => {
    while (ptrC > left) {
      output.push(matrix[ptrR][ptrC])
      ptrC--
    }

    ptrR--
    ptrC++
    bottom--
  }
  const goTop = () => {
    while (ptrR > top) {
      output.push(matrix[ptrR][ptrC])
      ptrR--
    }

    ptrC++
    ptrR++
    left++
  }

  // run
  while (true) {
    if (ptrC === right) return output
    goRight()

    if (ptrR === bottom) return output
    goBottom()

    if (ptrC === left) return output
    goLeft()

    if (ptrR === top) return output
    goTop()
  }
}

// 2. ------------------------------------------------------------
// new Array first
// Runtime: 83.62% / 63 ms
// Memory Usage: 84.24% / 41.7 MB
const spiralOrder2 = (matrix) => {
  const [numR, numC] = [matrix.length, matrix[0].length]
  const output = new Array(numR * numC)

  let [top, bottom, left, right] = [-1, numR, -1, numC]
  let [ptrR, ptrC, ptrO] = [0, 0, 0]

  // function
  const goRight = () => {
    while (ptrC < right) {
      output[ptrO] = matrix[ptrR][ptrC]
      ptrO++
      ptrC++
    }

    ptrR++
    ptrC--
    top++
  }
  const goBottom = () => {
    while (ptrR < bottom) {
      output[ptrO] = matrix[ptrR][ptrC]
      ptrO++
      ptrR++
    }

    ptrC--
    ptrR--
    right--
  }
  const goLeft = () => {
    while (ptrC > left) {
      output[ptrO] = matrix[ptrR][ptrC]
      ptrO++
      ptrC--
    }

    ptrR--
    ptrC++
    bottom--
  }
  const goTop = () => {
    while (ptrR > top) {
      output[ptrO] = matrix[ptrR][ptrC]
      ptrO++
      ptrR--
    }

    ptrC++
    ptrR++
    left++
  }

  // run
  while (true) {
    if (ptrO === output.length) return output
    goRight()

    if (ptrO === output.length) return output
    goBottom()

    if (ptrO === output.length) return output
    goLeft()

    if (ptrO === output.length) return output
    goTop()
  }
}

// 3. ------------------------------------------------------------
// clean up
// Runtime: 66 ms
// Memory Usage: 42.1 MB
const spiralOrder = (matrix) => {
  const [numR, numC] = [matrix.length, matrix[0].length]
  const output = new Array(numR * numC)

  const border = { top: 0, bottom: numR, left: -1, right: numC }
  let [ptrR, ptrC, ptrO] = [0, 0, 0]
  let direction = 'right'

  // function
  const goto = {
    right: () => {
      while (ptrC < border[direction]) {
        output[ptrO] = matrix[ptrR][ptrC]
        ptrO++
        ptrC++
      }

      ptrR++
      ptrC--
      border[direction]--
      direction = 'bottom'
    },
    bottom: () => {
      while (ptrR < border[direction]) {
        output[ptrO] = matrix[ptrR][ptrC]
        ptrO++
        ptrR++
      }

      ptrC--
      ptrR--
      border[direction]--
      direction = 'left'
    },
    left: () => {
      while (ptrC > border[direction]) {
        output[ptrO] = matrix[ptrR][ptrC]
        ptrO++
        ptrC--
      }

      ptrR--
      ptrC++
      border[direction]++
      direction = 'top'
    },
    top: () => {
      while (ptrR > border[direction]) {
        output[ptrO] = matrix[ptrR][ptrC]
        ptrO++
        ptrR--
      }

      ptrC++
      ptrR++
      border[direction]++
      direction = 'right'
    },
  }

  // run
  while (ptrO < output.length) {
    goto[direction]()
  }

  return output
}
