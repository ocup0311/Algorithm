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
const singleNumber1 = (nums) => {
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

// 二刷補充：
// 1. ------------------------------------------------------------
// T(n): O(n)
// S(n): O(n)
const singleNumber1a = (nums) => {
  if (nums.length === 1) return nums[0]

  const map1 = new Map()
  const map2 = new Map()

  for (let i = 0; i < nums.length; i++) {
    if (map1.has(nums[i])) {
      map1.delete(nums[i])
      map2.set(nums[i], true)
    } else {
      map1.set(nums[i], true)
    }
  }

  return map1.keys().next().value
}

// 2. ------------------------------------------------------------
// T(n): O(nlogn)
// S(n): O(1)
const singleNumber2a = (nums) => {
  if (nums.length === 1) return nums[0]

  nums.sort((a, b) => a - b)

  for (let i = 0; i < nums.length; i = i + 2) {
    if (nums[i] !== nums[i + 1]) return nums[i]
  }
}

// 3. ------------------------------------------------------------
// T(n): O(n)
// S(n): O(1)
// 使用 XOR 運算邏輯 (single 1 --> 1)
const singleNumber3a = (nums) => {
  if (nums.length === 1) return nums[0]

  return nums.reduce((acc, cur) => acc ^ cur, 0)
}
