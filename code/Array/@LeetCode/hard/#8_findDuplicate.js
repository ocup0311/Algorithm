// Given an array of integers nums containing n + 1 integers where each integer is
// in the range [1, n] inclusive.

// There is only one repeated number in nums, return this repeated number.

// You must solve the problem without modifying the array nums and uses only constant extra space.

// Example 1:
// Input: nums = [1,3,4,2,2]
// Output: 2

// Example 2:
// Input: nums = [3,1,3,4,2]
// Output: 3

// Constraints:
// 1 <= n <= 10^5
// nums.length == n + 1
// 1 <= nums[i] <= n
// All the integers in nums appear only once except for precisely one integer which appears
// two or more times.

// Follow up:
// How can we prove that at least one duplicate number must exist in nums?
// Can you solve the problem in linear runtime complexity?

/**
 * @param {number[]} nums
 * @return {number}
 */

// Notice --------------------------------------------------------
// 1. T(n): O(n), S(n): O(1)
// 2. 重複的數可能不只兩次
// 3. 只有正整數

// 1. ------------------------------------------------------------
// Runtime: 76.16% / 102 ms
// Memory Usage: 96.32% / 49.4 MB
const findDuplicate = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    const value = Math.abs(nums[i])

    if (nums[value] < 0) return value

    nums[value] = -Math.abs(nums[value])
  }
}
