// Given an integer array nums, return true if any value appears at least twice in the array,
// and return false if every element is distinct.

// Example 1:
// Input: nums = [1,2,3,1]
// Output: true

// Example 2:
// Input: nums = [1,2,3,4]
// Output: false

// Example 3:
// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true

// Constraints:
// 1 <= nums.length <= 10^5
// -10^9 <= nums[i] <= 10^9

/**
 * @param {number[]} nums
 * @return {boolean}
 */

// Notice --------------------------------------------------------

// 1. ------------------------------------------------------------
// Runtime: 92.06% / 83 ms
// Memory: 20.34% / 51.7 MB
const containsDuplicate = (nums) => {
  const counter = {}

  for (let i = 0; i < nums.length; i++) {
    if (counter[nums[i]]) return true
    counter[nums[i]] = true
  }

  return false
}
