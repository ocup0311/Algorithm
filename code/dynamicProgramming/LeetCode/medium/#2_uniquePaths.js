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
