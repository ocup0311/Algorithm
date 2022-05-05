// Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water),
// return the number of islands.

// An island is surrounded by water and is formed by connecting adjacent lands horizontally or
// vertically. You may assume all four edges of the grid are all surrounded by water.

// Example 1:
// Input: grid = [
//   ["1","1","1","1","0"],
//   ["1","1","0","1","0"],
//   ["1","1","0","0","0"],
//   ["0","0","0","0","0"]
// ]
// Output: 1

// Example 2:
// Input: grid = [
//   ["1","1","0","0","0"],
//   ["1","1","0","0","0"],
//   ["0","0","1","0","0"],
//   ["0","0","0","1","1"]
// ]
// Output: 3

// Constraints:
// m == grid.length
// n == grid[i].length
// 1 <= m, n <= 300
// grid[i][j] is '0' or '1'.

/**
 * @param {character[][]} grid
 * @return {number}
 */

// Notice --------------------------------------------------------
// 1. "水平" 跟 "垂直" 相鄰為一個島嶼

// 1. ------------------------------------------------------------
// Runtime: 60.60% / 107 ms
// Memory Usage: 73.19% / 45 MB
const numIslands1 = (grid) => {
  // var
  let result = 0

  // function
  const check = (row, col) => {
    if (grid[row][col] === '1') {
      grid[row][col] = null
      if (row > 0) check(row - 1, col)
      if (col > 0) check(row, col - 1)
      if (row < grid.length - 1) check(row + 1, col)
      if (col < grid[0].length - 1) check(row, col + 1)
    }
  }

  // run
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] === '1') {
        check(row, col)
        result++
      }
    }
  }

  return result
}

// 2. ------------------------------------------------------------
// Runtime: 114 ms
// Memory Usage: 50.6 MB
const numIslands = (grid) => {
  // var
  let result = 0

  // function
  const check = (cell) => {
    const queue = [cell]

    while (queue.length > 0) {
      const [row, col] = queue.pop()

      if (grid[row][col] === '1') {
        grid[row][col] = null
        if (row > 0) queue.push([row - 1, col])
        if (col > 0) queue.push([row, col - 1])
        if (row < grid.length - 1) queue.push([row + 1, col])
        if (col < grid[0].length - 1) queue.push([row, col + 1])
      }
    }
  }

  // run
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] === '1') {
        check([row, col])
        result++
      }
    }
  }

  return result
}
