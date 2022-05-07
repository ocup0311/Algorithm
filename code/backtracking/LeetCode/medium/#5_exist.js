// Given an m x n grid of characters board and a string word, return true if word exists in the grid.

// The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are
// horizontally or vertically neighboring. The same letter cell may not be used more than once.

// Example 1:
// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
// Output: true

// Example 2:
// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
// Output: true

// Example 3:
// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
// Output: false

// Constraints:
// m == board.length
// n = board[i].length
// 1 <= m, n <= 6
// 1 <= word.length <= 15
// board and word consists of only lowercase and uppercase English letters.

// Follow up: Could you use search pruning to make your solution faster with a larger board?

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

// Notice --------------------------------------------------------
// 1. 水平或垂直相鄰者
// 2. 一個 cell 只能用一次
// 3. 只有大小寫英文 --> 大小寫是否是為相同？

// 1. ------------------------------------------------------------
// Runtime: 3627 ms
// Memory Usage: 49.4 MB
const exist1 = (board, word) => {
  const store = new Map()
  const lenRow = board.length
  const lenCol = board[0].length

  const isValid = (row, col) => {
    return (
      !store.get(`${row}#${col}`) &&
      row > -1 &&
      row < lenRow &&
      col > -1 &&
      col < lenCol
    )
  }
  const check = (row, col, ptr = 0) => {
    if (board[row][col] !== word[ptr]) return false
    if (ptr === word.length - 1) return true

    store.set(`${row}#${col}`, true)

    let result = false

    if (isValid(row - 1, col)) {
      result = result || check(row - 1, col, ptr + 1)
      store.set(`${row - 1}#${col}`, false)
    }
    if (isValid(row + 1, col)) {
      result = result || check(row + 1, col, ptr + 1)
      store.set(`${row + 1}#${col}`, false)
    }
    if (isValid(row, col - 1)) {
      result = result || check(row, col - 1, ptr + 1)
      store.set(`${row}#${col - 1}`, false)
    }
    if (isValid(row, col + 1)) {
      result = result || check(row, col + 1, ptr + 1)
      store.set(`${row}#${col + 1}`, false)
    }

    return result
  }

  for (let row = 0; row < lenRow; row++) {
    for (let col = 0; col < lenCol; col++) {
      if (check(row, col)) return true
      store.clear()
    }
  }

  return false
}

// 2. ------------------------------------------------------------
// Runtime: 1732 ms
// Memory Usage: 50.4 MB
const exist2 = (board, word) => {
  // var
  const store = new Map()
  const lenRow = board.length
  const lenCol = board[0].length

  // function
  const isValid = (row, col) => {
    return (
      !store.get(`${row}#${col}`) &&
      row > -1 &&
      row < lenRow &&
      col > -1 &&
      col < lenCol
    )
  }
  const check = (row, col, ptr = 0) => {
    if (board[row][col] !== word[ptr]) return false
    if (ptr === word.length - 1) return true

    store.set(`${row}#${col}`, true)

    const cadidates = [
      [row - 1, col],
      [row + 1, col],
      [row, col - 1],
      [row, col + 1],
    ]

    const result = cadidates.some(
      (cell) => isValid(cell[0], cell[1]) && check(cell[0], cell[1], ptr + 1)
    )

    store.set(`${row}#${col}`, false)

    return result
  }

  // run
  for (let row = 0; row < lenRow; row++) {
    for (let col = 0; col < lenCol; col++) {
      if (check(row, col)) return true
    }
  }

  return false
}

// 3. ------------------------------------------------------------
// XXXXX fail
// 不能存後續結果  <-- 因為 track 不同。
const exist3 = (board, word) => {
  //   // var
  //   const store = {}
  //   const track = new Map()
  //   const lenRow = board.length
  //   const lenCol = board[0].length
  //   // function
  //   const isValid = (row, col) => {
  //     return (
  //       !track.get(`${row}#${col}`) &&
  //       row > -1 &&
  //       row < lenRow &&
  //       col > -1 &&
  //       col < lenCol
  //     )
  //   }
  //   const check = (row, col, ptr = 0) => {
  //     const key = `${row}#${col}`
  //     if (store[key]?.[ptr] !== undefined) return store[key][ptr]
  //     if (board[row][col] !== word[ptr]) {
  //       store[key] ? (store[key][ptr] = false) : (store[key] = { [ptr]: false })
  //       return false
  //     }
  //     if (ptr === word.length - 1) return true
  //     track.set(key, true)
  //     const cadidates = [
  //       [row - 1, col],
  //       [row + 1, col],
  //       [row, col - 1],
  //       [row, col + 1],
  //     ]
  //     const result = cadidates.some(
  //       (cell) => isValid(cell[0], cell[1]) && check(cell[0], cell[1], ptr + 1)
  //     )
  //     track.set(key, false)
  //     store[key] ? (store[key][ptr] = result) : (store[key] = { [ptr]: result })
  //     return result
  //   }
  //   // run
  //   for (let row = 0; row < lenRow; row++) {
  //     for (let col = 0; col < lenCol; col++) {
  //       if (check(row, col)) return true
  //     }
  //   }
  //   return false
}

// 4. ------------------------------------------------------------
// 直接改 input
// Runtime: 67.20% / 513 ms
// Memory Usage: 5.94% / 50.5 MB
const exist4 = (board, word) => {
  // var
  const lenRow = board.length
  const lenCol = board[0].length

  // function
  const isValid = (B, r, c) =>
    r > -1 && r < lenRow && c > -1 && c < lenCol && B[r][c]

  const check = (B, W, row, col, ptr = 0) => {
    if (B[row][col] !== W[ptr]) return false
    if (ptr === W.length - 1) return true

    B[row][col] = null

    const cadidates = [
      [row - 1, col],
      [row + 1, col],
      [row, col - 1],
      [row, col + 1],
    ]

    const checkCadidates = (B, W, p) => {
      return ([r, c]) => isValid(B, r, c) && check(B, W, r, c, p + 1)
    }

    if (cadidates.some(checkCadidates(B, W, ptr))) return true

    B[row][col] = W[ptr]

    return false
  }

  // run
  for (let row = 0; row < lenRow; row++) {
    for (let col = 0; col < lenCol; col++) {
      if (check(board, word, row, col)) return true
    }
  }

  return false
}
