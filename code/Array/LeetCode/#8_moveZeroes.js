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

// Notice --------------------------------------------------------
// 1. 不能複製 Array

// 1. ------------------------------------------------------------
// Runtime: 80.21% / 97 ms
// Memory: 27.86% / 47.1 MB
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
