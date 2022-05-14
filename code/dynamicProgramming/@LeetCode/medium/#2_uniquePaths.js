// There is a robot on an m x n grid. The robot is initially located at the top-left corner
// (i.e., grid[0][0]).
// The robot tries to move to the bottom-right corner
// (i.e., grid[m - 1][n - 1]).
// The robot can only move either down or right at any point in time.

// Given the two integers m and n, return the number of possible unique paths that the robot
// can take to reach the bottom-right corner.

// The test cases are generated so that the answer will be less than or equal to 2 * 109.

// Example 1:
// Input: m = 3, n = 7
// Output: 28

// Example 2:
// Input: m = 3, n = 2
// Output: 3
// Explanation: From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
// 1. Right -> Down -> Down
// 2. Down -> Down -> Right
// 3. Down -> Right -> Down

// Constraints:
// 1 <= m, n <= 100

// Notice --------------------------------------------------------
// 1. 有幾種走法

// 1. ------------------------------------------------------------
// 排列組合解
// 箭頭有：往下 m-1 個，往右 n-1 個。總共 m+n-2 個。m+n-2 個箭頭中，取 m-1 個往下。 --> 組合：(m+n-2) 取 (m-1)
// Runtime: 90.01% / 62 ms
// Memory Usage: 86.16% / 41.9 MB
const Factorial = (() => {
  const cache = [1, 1]

  return (n) => {
    if (cache[n]) return cache[n]

    cache[n] = n * Factorial(n - 1)

    return cache[n]
  }
})()

const uniquePaths1 = (m, n) => {
  const downN = m - 1
  const rightN = n - 1
  const totalN = downN + rightN

  const totalP = Factorial(totalN)
  const downP = Factorial(downN)
  const rightP = Factorial(rightN)

  return totalP / (downP * rightP)
}

// 2. ------------------------------------------------------------
// from 1：不 cache 每次重算
// Runtime: 60 ms
// Memory Usage: 41.6 MB
const uniquePaths2 = (m, n) => {
  // var
  const downN = m - 1
  const rightN = n - 1
  const totalN = downN + rightN

  // function
  const Factorial = (n) => {
    if ((n === 0) | (n === 1)) return 1

    return n * Factorial(n - 1)
  }

  // run
  const totalP = Factorial(totalN)
  const downP = Factorial(downN)
  const rightP = Factorial(rightN)

  return totalP / (downP * rightP)
}

// 3. ------------------------------------------------------------
// 第一排＆第一列，每格都只有一種方式抵達。
// 第 [i + 1][j + 1] 格，只有兩種方式抵達：(1)從 [i][j + 1] 來 (2) 從 [i + 1][j] 來
// -->  DP[i + 1][j + 1] = DP[i][j + 1] + DP[i + 1][j]
// Runtime: 72 ms
// Memory Usage: 41.9 MB
const uniquePaths3 = (m, n) => {
  // exception
  if (m === 1 || n === 1) return 1

  // var
  const matrix = new Array(m).fill(new Array(n).fill(1))

  // run
  for (let ptrR = 1; ptrR < m; ptrR++) {
    const preRow = matrix[ptrR - 1]
    const newRow = new Array(n).fill(1)

    for (let ptrC = 1; ptrC < n; ptrC++) {
      newRow[ptrC] = preRow[ptrC] + newRow[ptrC - 1]
    }

    matrix[ptrR] = newRow
  }

  return matrix[m - 1][n - 1]
}

// 4. ------------------------------------------------------------
// 可以不留前面的 data
// Runtime: 65 ms
// Memory Usage: 41.4 MB
const uniquePaths4 = (m, n) => {
  // exception
  if (m === 1 || n === 1) return 1

  // var
  const data = Array(m).fill(1)

  // run
  for (let ptrR = 1; ptrR < n; ptrR++) {
    for (let ptrC = 1; ptrC < m; ptrC++) {
      data[ptrC] = data[ptrC] + data[ptrC - 1]
    }
  }

  return data[m - 1]
}
