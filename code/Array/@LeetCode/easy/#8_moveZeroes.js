// Given an integer array nums, move all 0's to the end of it while maintaining the
// relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:

// Input: nums = [0]
// Output: [0]

// Constraints:

// 1 <= nums.length <= 10^4
// -2^31 <= nums[i] <= 2^31 - 1

// Follow up: Could you minimize the total number of operations done?

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// Notice --------------------------------------------------------
// 1. 不能複製 Array

// 1. ------------------------------------------------------------
// Runtime: 80.21% / 97 ms
// Memory: 27.86% / 47.1 MB
// T(n): O(n)
// S(n): O(1)
const solution1 = () => {
  const moveZeroes = (nums) => {
    let ptr1 = 0
    let ptr2 = 0

    while (ptr1 < nums.length) {
      if (nums[ptr1] === 0) {
        ptr1++
        continue
      }

      if (ptr1 !== ptr2) {
        nums[ptr2] = nums[ptr1]
      }

      ptr1++
      ptr2++
    }

    while (ptr2 < nums.length) {
      nums[ptr2] = 0
      ptr2++
    }
  }
}

// 二刷
// --> 以 0 的比重來看，40% 為分界，
// --> 40% ~ 100% 選擇 solution2a
// --> 0% ~ 40% 選擇 solution1a
// --> 平均下來 solution2a 較划算
// 1. ------------------------------------------------------------
// T(n): O(n)
// S(n): O(1)
// 概算：6X+6Y (X: 非0  Y: 0)
const solution1a = () => {
  const moveZeroes = (nums) => {
    let ptr = 0

    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === 0) continue
      if (ptr !== i) nums[ptr] = nums[i]

      ptr++
    }

    while (ptr < nums.length) {
      nums[ptr] = 0
      ptr++
    }

    return
  }
}

// 2. ------------------------------------------------------------
// T(n): O(n)
// S(n): O(1)
// 概算：8X+3Y (X: 非0  Y: 0)
const solution2a = () => {
  const swap = (arr, idx1, idx2) => {
    let tmp = arr[idx1]
    arr[idx1] = arr[idx2]
    arr[idx2] = tmp
  }

  const moveZeroes = (nums) => {
    let ptr = 0

    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === 0) continue
      if (ptr !== i) swap(nums, ptr, i)

      ptr++
    }

    return
  }
}
