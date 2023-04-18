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
// T(n): O(n)
// S(n): O(n)
const solution1 = () => {
  const containsDuplicate = (nums) => {
    const counter = {}

    for (let i = 0; i < nums.length; i++) {
      if (counter[nums[i]]) return true
      counter[nums[i]] = true
    }

    return false
  }
}

// 二刷補充：
// 1. ------------------------------------------------------------
// 似乎使用 Map 略快，但相較 Object 略佔空間
// TODO: 有空可以去補充閱讀 V8 的底層
// T(n): O(n)
// S(n): O(n)
const solution1a = () => {
  const containsDuplicate = (nums) => {
    const map = new Map()

    for (let i = 0; i < nums.length; i++) {
      if (map.has(nums[i])) return true
      map.set(nums[i], true)
    }

    return false
  }
}

// 2. ------------------------------------------------------------
// 跑出來的表現差不多，但我覺得此方法會先做出完整的 Set，無法像 Object & Map 有機會提早 return，因此較為浪費
// T(n): O(n)
// S(n): O(n)
const solution2a = () => {
  const containsDuplicate = (nums) => {
    const set = new Set(nums)

    return set.size === nums.length ? false : true
  }
}
