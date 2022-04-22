// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// Example 1:
// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps

// Example 2:
// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step

// Constraints:
// 1 <= n <= 45

// Notice --------------------------------------------------------
// 1. 一次可以爬 1~2 階梯 --> 有幾種可能抵達終點？

// 1. ------------------------------------------------------------
// 21 / 45 test cases passed.
// Time Limit Exceeded
// Last executed input: 44
const climbStairs1 = (n) => {
  // var
  const cache = {}
  let numOfWay = 0

  // function
  const climb = (stair) => {
    if (stair < 0) return null
    if (stair === 0) return 0
    if (cache[stair]) return cache[stair]

    const result = { 1: climb(stair - 1), 2: climb(stair - 2) }

    cache[stair] = result

    return result
  }

  const countByDFS = (node) => {
    if (node === null) return
    if (node === 0) {
      numOfWay++
      return
    }

    countByDFS(node[1])
    countByDFS(node[2])
  }

  // run
  const collection = climb(n)

  countByDFS(collection)

  return numOfWay
}

// 2. ------------------------------------------------------------
// Runtime: 63.61% / 69 ms
// Memory: 52.55% / 41.9 MB
const climbStairs2 = (n) => {
  // var
  const cache = {}

  // function
  const count = (stair) => {
    if (stair < 0) return 0
    if (stair === 0) return 1

    if (cache[stair]) return cache[stair]

    const ways = count(stair - 1) + count(stair - 2)

    cache[stair] = ways

    return ways
  }

  return count(n)
}
