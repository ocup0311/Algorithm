// According to Wikipedia's article: "The Game of Life, also known simply as Life,
// is a cellular automaton devised by the British mathematician John Horton Conway in 1970."

// The board is made up of an m x n grid of cells, where each cell has an initial state:
// live (represented by a 1) or dead (represented by a 0). Each cell interacts with its
// eight neighbors (horizontal, vertical, diagonal) using the following four rules
// (taken from the above Wikipedia article):

// Any live cell with fewer than two live neighbors dies as if caused by under-population.
// Any live cell with two or three live neighbors lives on to the next generation.
// Any live cell with more than three live neighbors dies, as if by over-population.
// Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
// The next state is created by applying the above rules simultaneously to every cell in the
// current state, where births and deaths occur simultaneously. Given the current state of
// the m x n grid board, return the next state.

// Example 1:
// Input: board = [[0,1,0],[0,0,1],[1,1,1],[0,0,0]]
// Output: [[0,0,0],[1,0,1],[0,1,1],[0,1,0]]

// Example 2:
// Input: board = [[1,1],[1,0]]
// Output: [[1,1],[1,1]]

// Constraints:
// m == board.length
// n == board[i].length
// 1 <= m, n <= 25
// board[i][j] is 0 or 1.

// Follow up:
// Could you solve it in-place? Remember that the board needs to be updated simultaneously:
// You cannot update some cells first and then use their updated values to update other cells.
// In this question, we represent the board using a 2D array. In principle, the board is infinite,
// which would cause problems when the active area encroaches upon the border of the array
// (i.e., live cells reach the border). How would you address these problems?

/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

// Notice --------------------------------------------------------
// in-place

// 1. ------------------------------------------------------------
// 使用 row * 2 空間
// Runtime: 80.77% / 65 ms
// Memory Usage: 86.05% / 41.9 MB
const gameOfLife1 = (board) => {
  const tmpRow = [[], []]

  // function
  const check = (ptrR, ptrC) => {
    let count = 0

    // 1,2,3
    for (let i = ptrC - 1; i < ptrC + 2; i++) {
      if (tmpRow[0][i]) count++
    }

    // 7,8,9
    if (board[ptrR + 1]) {
      for (let i = ptrC - 1; i < ptrC + 2; i++) {
        if (board[ptrR + 1][i]) count++
      }
    }

    // 4,6
    if (tmpRow[1][ptrC - 1]) count++
    if (board[ptrR][ptrC + 1]) count++

    return count
  }

  // run
  for (let ptrR = 0; ptrR < board.length; ptrR++) {
    for (let ptrC = 0; ptrC < board[0].length; ptrC++) {
      const n = board[ptrR][ptrC]
      const count = check(ptrR, ptrC)

      if (count === 2 && n === 1) board[ptrR][ptrC] = 1
      else if (count === 3) board[ptrR][ptrC] = 1
      else board[ptrR][ptrC] = 0

      tmpRow[1][ptrC] = n
    }

    tmpRow.reverse()
  }
}

// 2. ------------------------------------------------------------
// 使用 row + 1 空間
// Runtime: 97.95% / 55 ms
// Memory Usage: 81.03% / 42 MB
const gameOfLife2 = (board) => {
  const preRow = []
  let preCell = 0

  // function
  const check = (ptrR, ptrC) => {
    const [row1, row2, row3] = [preRow, board[ptrR], board[ptrR + 1]]
    let count = 0

    // 1,2,3
    for (let i = ptrC - 1; i < ptrC + 2; i++) {
      if (row1[i]) count++
    }

    // 7,8,9
    if (row3) {
      for (let i = ptrC - 1; i < ptrC + 2; i++) {
        if (row3[i]) count++
      }
    }

    // 4,6
    if (preCell) count++
    if (row2[ptrC + 1]) count++

    return count
  }

  // run
  for (let ptrR = 0; ptrR < board.length; ptrR++) {
    const curRow = board[ptrR]

    for (let ptrC = 0; ptrC < curRow.length; ptrC++) {
      const n = curRow[ptrC]
      const count = check(ptrR, ptrC)

      if (count === 2 && n === 1) curRow[ptrC] = 1
      else if (count === 3) curRow[ptrC] = 1
      else curRow[ptrC] = 0

      preRow[ptrC - 1] = preCell
      preCell = n
    }

    preRow[curRow.length - 1] = preCell
    preCell = 0
  }
}

// 3. ------------------------------------------------------------
// Runtime: 55 ms
// Memory Usage: 43.9 MB
const gameOfLife = (board) => {
  // CONST
  const DEAD = 'dead'
  const LIVE = 'live'
  const PAIR = new Map([
    [DEAD, 0],
    [LIVE, 1],
  ])

  // var
  const lenR = board.length
  const lenC = board[0].length

  // function
  const isDead = (x) => x <= 0 || x === DEAD
  const isLive = (x) => 0 < x || x === LIVE
  const check = (r, c) => {
    const neighbors = [
      [r - 1, c + 1],
      [r - 1, c],
      [r - 1, c - 1],
      [r, c - 1],
      [r, c + 1],
      [r + 1, c - 1],
      [r + 1, c],
      [r + 1, c + 1],
    ]
    let count = 0

    neighbors.forEach(([r, c]) => isLive(board[r]?.[c]) && count++)

    return count
  }

  // run
  for (let r = 0; r < lenR; r++) {
    for (let c = 0; c < lenC; c++) {
      const cell = board[r][c]
      const count = check(r, c)

      if (isLive(cell) && (count < 2 || 3 < count)) board[r][c] = DEAD
      if (isDead(cell) && count === 3) board[r][c] = LIVE
    }
  }

  for (let r = 0; r < lenR; r++) {
    for (let c = 0; c < lenC; c++) {
      const cell = board[r][c]

      if (PAIR.has(cell)) board[r][c] = PAIR.get(cell)
    }
  }
}
