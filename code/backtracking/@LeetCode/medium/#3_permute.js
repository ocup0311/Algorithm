// Given an array nums of distinct integers, return all the possible permutations.
// You can return the answer in any order.

// Example 1:
// Input: nums = [1,2,3]
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

// Example 2:
// Input: nums = [0,1]
// Output: [[0,1],[1,0]]

// Example 3:
// Input: nums = [1]
// Output: [[1]]

// Constraints:
// 1 <= nums.length <= 6
// -10 <= nums[i] <= 10
// All the integers of nums are unique.

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// Notice --------------------------------------------------------

// 1. ------------------------------------------------------------
// Runtime: 82.32% / 79 ms
// Memory Usage: 66.46% / 45 MB
const permute1 = (nums) => {
  // var
  let result = [nums.slice(0, 1)]

  // function
  const insertN = (n) => (t, path) => {
    for (let i = 0; i <= path.length; i++) {
      const newPath = path.slice(0, i).concat([n], path.slice(i))
      t.push(newPath)
    }
    return t
  }

  // run
  for (let i = 1; i < nums.length; i++) {
    result = result.reduce(insertN(nums[i]), [])
  }

  return result
}

// 2. ------------------------------------------------------------
// Runtime: 84 ms
// Memory Usage: 44.6 MB
const permute2 = (nums) => {
  if (nums.length === 1) return [[...nums]]

  // function
  const insertN = (n) => (t, path) => {
    for (let i = 0; i <= path.length; i++) {
      const newPath = path.slice(0, i).concat([n], path.slice(i))
      t.push(newPath)
    }
    return t
  }

  // run
  const [firstNum, ...restNums] = nums
  const preResult = permute(restNums)
  const result = preResult.reduce(insertN(firstNum), [])

  return result
}

// 3. ------------------------------------------------------------
// Runtime: 92 ms
// Memory Usage: 46.7 MB
const permute = (nums) => {
  // function
  const makeResult = (restNums, path = []) => {
    if (path.length === nums.length) return [path]

    const insertN = (t, n, i, self) => {
      const newRest = self.slice(0, i).concat(self.slice(i + 1))
      const newPath = path.concat(n)
      const newResult = makeResult(newRest, newPath)

      return t.concat(newResult)
    }

    return restNums.reduce(insertN, [])
  }

  // run
  const result = makeResult(nums)

  return result
}
