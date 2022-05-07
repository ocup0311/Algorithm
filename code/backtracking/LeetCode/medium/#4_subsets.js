// Given an integer array nums of unique elements, return all possible subsets (the power set).

// The solution set must not contain duplicate subsets. Return the solution in any order.

// Example 1:
// Input: nums = [1,2,3]
// Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

// Example 2:
// Input: nums = [0]
// Output: [[],[0]]

// Constraints:
// 1 <= nums.length <= 10
// -10 <= nums[i] <= 10
// All the numbers of nums are unique.

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// Notice --------------------------------------------------------

// 1. ------------------------------------------------------------
// Runtime: 64.29% / 77 ms
// Memory Usage: 44.41% / 44.2 MB
const subsets = (nums) => {
  if (nums.length === 0) return [[]]

  const [n, ...restNums] = nums
  const preSubsets = subsets(restNums)
  const newSubsets = preSubsets.reduce(
    (sets, subset) => sets.concat([subset, [n, ...subset]]),
    []
  )

  return newSubsets
}
