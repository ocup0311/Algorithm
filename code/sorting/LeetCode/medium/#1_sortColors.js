// Given an array nums with n objects colored red, white, or blue, sort them in-place
// so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

// We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

// You must solve this problem without using the library's sort function.

// Example 1:
// Input: nums = [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]

// Example 2:
// Input: nums = [2,0,1]
// Output: [0,1,2]

// Constraints:
// n == nums.length
// 1 <= n <= 300
// nums[i] is either 0, 1, or 2.

// Follow up: Could you come up with a one-pass algorithm using only constant extra space?

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// Notice --------------------------------------------------------
// 1. in-place: space O(1)
// 2. time O(n)
// 3. 只有 0,1,2

// 1. ------------------------------------------------------------
// Runtime: 88.89% / 61 ms
// Memory Usage: 95.79% / 41.7 MB
const sortColors1 = (nums) => {
  // var
  let ptr = 0
  let ptrS = 0
  let ptrE = nums.length

  // function
  const swap = (arr, idx1, idx2) => {
    const tmp = arr[idx1]
    arr[idx1] = arr[idx2]
    arr[idx2] = tmp
  }

  // run
  while (ptr < ptrE) {
    if (nums[ptr] === 0) {
      swap(nums, ptrS, ptr)
      ptr++
      ptrS++
      continue
    }
    if (nums[ptr] === 2) {
      ptrE--
      swap(nums, ptrE, ptr)
      continue
    }
    ptr++
  }
}

// 2. ------------------------------------------------------------
// Runtime: 55 ms
// Memory Usage: 41.7 MB
const sortColors = (nums) => {
  // var
  let [ptr, ptrS, ptrE] = [0, 0, nums.length]

  // function
  const swap = (A, idx1, idx2) => ([A[idx1], A[idx2]] = [A[idx2], A[idx1]])

  // run
  while (ptr < ptrE) {
    if (nums[ptr] === 0) swap(nums, ptrS++, ptr++)
    else if (nums[ptr] === 2) swap(nums, --ptrE, ptr)
    else ptr++
  }
}
