// Given a non-empty array of integers nums, every element appears twice except for one.
// Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

// Example 1:
// Input: nums = [2,2,1]
// Output: 1

// Example 2:
// Input: nums = [4,1,2,1,2]
// Output: 4

// Example 3:
// Input: nums = [1]
// Output: 1

// Constraints:
// 1 <= nums.length <= 3 * 104
// -3 * 104 <= nums[i] <= 3 * 104
// Each element in the array appears twice except for one element which appears only once.

/**
 * @param {number[]} nums
 * @return {number}
 */

// Notice --------------------------------------------------------
// 1. 不能複製 Array
// 2. 只有一個烙單

// 1. ------------------------------------------------------------
// Runtime: 85.86% / 74 ms
// Memory: 14.56% / 48.2 MB
const singleNumber = (nums) => {
  const single = {}
  const twice = {}

  for (let i = 0; i < nums.length; i++) {
    if (single[nums[i]]) {
      twice[nums[i]] = true
      delete single[nums[i]]
    } else single[nums[i]] = true
  }

  return Object.keys(single)[0]
}
