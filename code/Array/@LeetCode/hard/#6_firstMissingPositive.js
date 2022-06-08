// Given an unsorted integer array nums, return the smallest missing positive integer.

// You must implement an algorithm that runs in O(n) time and uses constant extra space.

// Example 1:
// Input: nums = [1,2,0]
// Output: 3

// Example 2:
// Input: nums = [3,4,-1,1]
// Output: 2

// Example 3:
// Input: nums = [7,8,9,11,12]
// Output: 1

// Constraints:
// 1 <= nums.length <= 5 * 10^5
// -2^31 <= nums[i] <= 2^31 - 1

/**
 * @param {number[]} nums
 * @return {number}
 */

// Notice --------------------------------------------------------
// 1. T(n): O(n) , S(n): O(1)
// 2. 未排序
// 3. 最小 錯過 正整數
// 4. 可能會有相同的項目 (e.g. [1,1,2,3])

// 1. ------------------------------------------------------------
// fail: 12 / 173 test cases passed.
// Last executed input: [1,1]
const firstMissingPositive1 = (nums) => {
  const max = nums.length
  let ptr = 0

  // function
  const swap = (idx1, idx2) => {
    ;[nums[idx1], nums[idx2]] = [nums[idx2], nums[idx1]]
  }

  // run
  while (ptr < max) {
    const n = nums[ptr]

    if (n < 1 || n > max) {
      ptr++
      continue
    }

    if (n === ptr + 1) {
      ptr++
      continue
    }

    swap(ptr, n - 1)
  }

  for (let i = 0; i < max; i++) {
    if (nums[i] !== i + 1) return i + 1
  }

  return max + 1
}

// 2. ------------------------------------------------------------
// 方法： [3, 5, 10, 30, -1, 1, 2, 7] --> [ 1,  2, 3, 30, 5, 10, 7, -1 ] --> 4
// fix from 1：處理相同的項目
// Runtime: 78.72% / 119 ms
// Memory Usage: 79.41% / 59.6 MB
const firstMissingPositive2 = (nums) => {
  const max = nums.length

  // function
  const swap = (idx1, idx2) => {
    ;[nums[idx1], nums[idx2]] = [nums[idx2], nums[idx1]]
  }

  // run
  for (let i = 0; i < max; i++) {
    const n = nums[i]

    if (n < 1 || n > max) continue
    if (n === i + 1) continue
    if (n === nums[n - 1]) continue

    swap(i, n - 1)
    i--
  }

  for (let i = 0; i < max; i++) {
    if (nums[i] !== i + 1) return i + 1
  }

  return max + 1
}

// 3. ------------------------------------------------------------
// 方法： [3, 5, 10, 30, -1, 1, 2, 7] --> [ ---, 5, 3,  1,  2, 7 ] --> [ ---, -5, -3, -1,  2, -7 ] --> 4
const firstMissingPositive = (nums) => {
  const max = nums.length
  let start = 0

  // function
  const swap = (idx1, idx2) => {
    ;[nums[idx1], nums[idx2]] = [nums[idx2], nums[idx1]]
  }

  // run
  for (let i = 0; i < max; i++) {
    if (nums[i] < 1 || nums[i] > max) {
      swap(start, i)
      start++
    }
  }

  for (let i = start; i < max; i++) {
    const value = Math.abs(nums[i])
    const key = start + value - 1

    if (nums[key] > 0) nums[key] = -nums[key]
  }

  for (let i = start; i < max; i++) {
    if (nums[i] > 0) return i - start + 1
  }

  return max - start + 1
}
