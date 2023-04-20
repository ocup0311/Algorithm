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
const solution1 = () => {
  const isValidSudoku = (board) => {
    // var
    const validValue = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
    const hashmap = {
      row: [{}, {}, {}, {}, {}, {}, {}, {}, {}],
      col: [{}, {}, {}, {}, {}, {}, {}, {}, {}],
      grid: [
        [{}, {}, {}],
        [{}, {}, {}],
        [{}, {}, {}],
      ],
    }

    // function
    const isEmpty = (x) => x === '.'
    const isValid = (x) => validValue.some((v) => v === x)
    const isDuplicate = (v, i, j, x, y) =>
      hashmap.row[i][v] || hashmap.col[j][v] || hashmap.grid[x][y][v]

    // run
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        const value = board[i][j]
        const x = Math.floor(i / 3)
        const y = Math.floor(j / 3)

        if (isEmpty(value)) continue
        if (!isValid(value)) return false
        if (isDuplicate(value, i, j, x, y)) return false

        hashmap.row[i][value] = true
        hashmap.col[j][value] = true
        hashmap.grid[x][y][value] = true
      }
    }

    return true
  }
}

// 二刷：
// 1. ------------------------------------------------------------
// T(n): O(n)
// S(n): O(n)
// 同一刷方法，只將 isValid 改成先轉為數字再比大小（可研究 比對 9 次 ＆ 轉成數字再比對，哪個較為耗時，但可確定可以少一點空間）
// 此方法的好處是，利用更多空間，使得只需跑一輪就將三種情況都比對完成
const solution1a = () => {
  const isValidSudoku = (board) => {
    // var
    const hashmap = {
      row: [{}, {}, {}, {}, {}, {}, {}, {}, {}],
      col: [{}, {}, {}, {}, {}, {}, {}, {}, {}],
      grid: [
        [{}, {}, {}],
        [{}, {}, {}],
        [{}, {}, {}],
      ],
    }

    // function
    const isEmpty = (x) => x === '.'
    const isValid = (x) => x > 0 && x < 10
    const isDuplicate = (v, i, j, x, y) =>
      hashmap.row[i][v] || hashmap.col[j][v] || hashmap.grid[x][y][v]

    // run
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        const value = board[i][j]
        const x = Math.floor(i / 3)
        const y = Math.floor(j / 3)

        if (isEmpty(value)) continue
        if (!isValid(value)) return false
        if (isDuplicate(value, i, j, x, y)) return false

        hashmap.row[i][value] = true
        hashmap.col[j][value] = true
        hashmap.grid[x][y][value] = true
      }
    }

    return true
  }
}

// 2. ------------------------------------------------------------
// T(n): O(n)
// S(n): O(logn)
// 此方法可以更節省空間
// 而時間複雜度一樣，但需三輪分開跑（只多開銷兩次組成 loop 的基本時間，細部操作耗時相同，差別只在於分開與同時做）
const solution2a = () => {
  const isValidSudoku = function (board) {
    // function
    const isEmpty = (x) => x === '.'
    const isValid = (x) => x > 0 && x < 10
    const isDuplicate = (set, value) => set.has(value)

    const getRowValue = (i, j) => board[i][j]
    const getColValue = (i, j) => board[j][i]
    const getGridValue = (i, j) => {
      const x = 3 * Math.floor(i / 3) + Math.floor(j / 3)
      const y = 3 * (i % 3) + (j % 3)

      return board[x][y]
    }

    const check = (getValue) => {
      for (let i = 0; i < 9; i++) {
        const set = new Set()

        for (let j = 0; j < 9; j++) {
          const value = getValue(i, j)

          if (isEmpty(value)) continue
          if (isDuplicate(set, value)) return false
          if (!isValid(value)) return false

          set.add(value)
        }
      }

      return true
    }

    // run
    if (!check(getRowValue)) return false
    if (!check(getColValue)) return false
    if (!check(getGridValue)) return false

    return true
  }
}
