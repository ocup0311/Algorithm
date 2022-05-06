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
const permute = (nums) => {
  // var
  let output = [nums.slice(0, 1)]
  let ptr = 1

  // function
  const addOneNum = (nums, ptr) => (set, preArr) => {
    for (let i = 0; i <= preArr.length; i++) {
      const newArr = preArr.slice(0, i).concat(nums[ptr], preArr.slice(i))
      set.push(newArr)
    }
    return set
  }

  // run
  while (ptr < nums.length) {
    output = output.reduce(addOneNum(nums, ptr), [])

    ptr++
  }

  return output
}
