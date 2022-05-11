// Given an array of integers nums sorted in non-decreasing order,
// find the starting and ending position of a given target value.

// If target is not found in the array, return [-1, -1].

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:
// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]

// Example 2:
// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]

// Example 3:
// Input: nums = [], target = 0
// Output: [-1,-1]

// Constraints:
// 0 <= nums.length <= 10^5
// -10^9 <= nums[i] <= 10^9
// nums is a non-decreasing array.
// -10^9 <= target <= 10^9

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// Notice --------------------------------------------------------
// 1. 已排序
// 2. 沒找到回傳 [-1,-1]

// 1. ------------------------------------------------------------
// Runtime: 88.55% / 62 ms
// Memory Usage: 59.21% / 42.7 MB
const searchRange1 = (nums, target) => {
  if (nums.length === 0) return [-1, -1]

  const result = [Infinity, -1]

  const find = (ptrS, ptrE) => {
    while (ptrS < ptrE) {
      const ptrM = Math.floor((ptrS + ptrE) / 2)

      if (target === nums[ptrM]) {
        result[0] = Math.min(result[0], ptrM)
        result[1] = Math.max(result[1], ptrM)
        find(ptrS, ptrM)
      }

      if (target < nums[ptrM]) ptrE = ptrM
      else ptrS = ptrM + 1
    }
  }

  find(0, nums.length)

  return result[0] > result[1] ? [-1, -1] : result
}

// 2. ------------------------------------------------------------
// Runtime: 79.78% / 66 ms
// Memory Usage: 86.84% / 42.3 MB
const searchRange = (nums, target) => {
  if (nums.length === 0) return [-1, -1]

  const findS = (ptrS, ptrE) => {
    while (ptrS < ptrE) {
      const ptrM = Math.floor((ptrS + ptrE) / 2)

      if (target > nums[ptrM]) ptrS = ptrM + 1
      else ptrE = ptrM
    }

    return ptrS
  }
  const findE = (ptrS, ptrE) => {
    while (ptrS < ptrE) {
      const ptrM = Math.ceil((ptrS + ptrE) / 2)

      if (target < nums[ptrM]) ptrE = ptrM - 1
      else ptrS = ptrM
    }

    return ptrS
  }

  // run
  const idxS = findS(0, nums.length - 1)
  const idxE = findE(0, nums.length - 1)

  return nums[idxS] === target ? [idxS, idxE] : [-1, -1]
}
