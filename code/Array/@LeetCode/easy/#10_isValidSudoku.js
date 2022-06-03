// Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be
// validated according to the following rules:

// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
// Note:

// A Sudoku board (partially filled) could be valid but is not necessarily solvable.
// Only the filled cells need to be validated according to the mentioned rules.

// Example 1:
// Input: board =
// [["5","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]]
// Output: true

// Example 2:
// Input: board =
// [["8","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]]
// Output: false
// Explanation: Same as Example 1, except with the 5 in the top left corner being
// modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.

// Constraints:
// board.length == 9
// board[i].length == 9
// board[i][j] is a digit 1-9 or '.'.

/**
 * @param {character[][]} board
 * @return {boolean}
 */

// Notice --------------------------------------------------------
// 1. 不需要確定他是有解答的數獨
// 2. 上一次搞錯題意：是「3x3 九宮格內不重複」，非「對角線不重複」

// 1. ------------------------------------------------------------
// Runtime: 77.97% / 88 ms
// Memory Usage: 44.56% / 45.9 MB
const isValidSudoku = (board) => {
  // var
  const validValue = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
  const counter = {
    row: [{}, {}, {}, {}, {}, {}, {}, {}, {}],
    col: [{}, {}, {}, {}, {}, {}, {}, {}, {}],
    grid: [
      [{}, {}, {}],
      [{}, {}, {}],
      [{}, {}, {}],
    ],
  }

  // function
  const isFilled = (x) => x !== '.'
  const isValidValue = (x) => validValue.some((v) => v === x)
  const isDuplicate = (v, i, j, x, y) =>
    counter.row[i][v] || counter.col[j][v] || counter.grid[x][y][v]

  // run
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const value = board[i][j]
      const x = Math.floor(i / 3)
      const y = Math.floor(j / 3)

      if (!isFilled(value)) continue
      if (!isValidValue(value)) return false
      if (isDuplicate(value, i, j, x, y)) return false

      counter.row[i][value] = true
      counter.col[j][value] = true
      counter.grid[x][y][value] = true
    }
  }

  return true
}
