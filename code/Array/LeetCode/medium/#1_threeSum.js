// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]]
// such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

// Example 1:
// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]

// Example 2:
// Input: nums = []
// Output: []

// Example 3:
// Input: nums = [0]
// Output: []

// Constraints:
// 0 <= nums.length <= 3000
// -10^5 <= nums[i] <= 10^5

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// Notice --------------------------------------------------------
// 1. 忽略重複的答案組合 (e.g. A: [-1,0,1] & A: [1,-1,0] 只算一個 A)
// 2. 可能有一樣的項目 (e.g. A: [-2,1,1])
// 3. 但一個項目只能用一次。 (e.g. Q: [1,0,-2,2],  A 不能是: [1,1,-2])

// 1. ------------------------------------------------------------
// Runtime: 9.52% / 2854 ms
// Memory: 6.51% / 74.9 MB
const threeSum1 = (() => {
  // cache
  let result = []
  let used = {}

  // function
  const twoSum = (nums, num) => {
    const cache = {}

    for (let i = 0; i < nums.length; i++) {
      const n = nums[i]

      if (cache[n] === 'used') continue
      if (used[n]) continue

      if (cache[n] !== undefined) {
        result.push([num, n, cache[n]])
        cache[cache[n]] = 'used'
        cache[n] = 'used'
      } else {
        cache[-num - n] = n
      }
    }
  }

  // main
  return (nums) => {
    result = []
    used = {}
    const len = nums.length

    for (let i = 0; i < len; i++) {
      const num = nums.pop()

      if (!used[num]) twoSum(nums, num)
      used[num] = true
    }

    return result
  }
})()
