// Given an array of integers nums and an integer target, return indices of the
// two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may
// not use the same element twice.

// You can return the answer in any order.

// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Example 3:
// Input: nums = [3,3], target = 6
// Output: [0,1]

// Constraints:
// 2 <= nums.length <= 10^4
// -10^9 <= nums[i] <= 10^9
// -10^9 <= target <= 10^9
// Only one valid answer exists.

// Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// Notice --------------------------------------------------------
// 1. 有唯一解
// 2. 沒有排序

// 1. ------------------------------------------------------------
// Runtime: 96.27% / 64 ms
// Memory: 47.07% / 42.7 MB
// T(n): O(n)
// S(n): O(n)
const solution1 = () => {
  const twoSum = (nums, target) => {
    const hashmap = {}

    for (let i = 0; i < nums.length; i++) {
      if (hashmap[nums[i]] !== undefined) return [i, hashmap[nums[i]]]

      hashmap[target - nums[i]] = i
    }
  }
}

// 1. ------------------------------------------------------------
// T(n): O(n)
// S(n): O(n)
// 之前測試：可能因為 Object 的 key 都需轉為 string，所以當 number 的 key 時，使用 Map 會略快一些
const solution1a = () => {
  const twoSum = (nums, target) => {
    const hashmap = new Map()

    for (let i = 0; i < nums.length; i++) {
      if (hashmap.has(nums[i])) return [hashmap.get(nums[i]), i]

      hashmap.set(target - nums[i], i)
    }

    throw 'Invaid input of twoSum!'
  }
}
