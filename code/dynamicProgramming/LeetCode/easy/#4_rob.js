// You are a professional robber planning to rob houses along a street. Each house has a
// certain amount of money stashed, the only constraint stopping you from robbing each of
// them is that adjacent houses have security systems connected and it will automatically
// contact the police if two adjacent houses were broken into on the same night.

// Given an integer array nums representing the amount of money of each house, return the
// maximum amount of money you can rob tonight without alerting the police.

// Example 1:
// Input: nums = [1,2,3,1]
// Output: 4
// Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
// Total amount you can rob = 1 + 3 = 4.

// Example 2:
// Input: nums = [2,7,9,3,1]
// Output: 12
// Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
// Total amount you can rob = 2 + 9 + 1 = 12.

// Constraints:
// 1 <= nums.length <= 100
// 0 <= nums[i] <= 400

/**
 * @param {number[]} nums
 * @return {number}
 */

// Notice --------------------------------------------------------
// 1. 不可搶鄰居
// 2. 可能會跳兩格？ --> 可以
// 3. 不會有負數

// 1. ------------------------------------------------------------
// Runtime: 61.30% / 71 ms
// Memory: 85.12% / 41.7 MB
// nums:     [1, 1, 3, 1, 1, 5]
// cache: [0, 1, 1, 4, 4, 5, 9]
const rob = (nums) => {
  const n = nums.length
  const cache = new Array(n + 1)

  cache[0] = 0
  cache[1] = nums[0]

  for (let i = 2; i < n + 1; i++) {
    const includeSelf = nums[i - 1] + cache[i - 2]
    const ignoreSelf = cache[i - 1]

    cache[i] = Math.max(includeSelf, ignoreSelf)
  }

  return cache[n]
}
