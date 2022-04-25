// Given an integer numRows, return the first numRows of Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

// Example 1:
// Input: numRows = 5
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

// Example 2:
// Input: numRows = 1
// Output: [[1]]

// Constraints:
// 1 <= numRows <= 30

/**
 * @param {number} numRows
 * @return {number[][]}
 */

// Notice --------------------------------------------------------
// 1. numRows 至少 1

// 1. ------------------------------------------------------------
// Runtime: 72.42% / 65 ms
// Memory: 85.93% / 41.8 MB
const generate = (() => {
  // var
  let cache = []

  // function
  const makeLayer = (upperArr) => {
    const newArr = new Array(upperArr.length + 1).fill(1)

    for (let i = 0; i < upperArr.length; i++) {
      if (upperArr[i + 1]) newArr[i + 1] = upperArr[i] + upperArr[i + 1]
    }

    return newArr
  }

  // main
  return (numRows) => {
    // exception
    if (numRows <= cache.length) return cache.slice(0, numRows)

    // var
    const result = new Array(numRows).fill([1])

    // run
    for (let i = 1; i < numRows; i++) {
      result[i] = makeLayer(result[i - 1])
    }

    cache = result

    return result
  }
})()
