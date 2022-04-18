// Given an array, rotate the array to the right by k steps, where k is non-negative.

// Example 1:
// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]

// Example 2:
// Input: nums = [-1,-100,3,99], k = 2
// Output: [3,99,-1,-100]
// Explanation:
// rotate 1 steps to the right: [99,-1,-100,3]
// rotate 2 steps to the right: [3,99,-1,-100]

// Constraints:
// 1 <= nums.length <= 10^5
// -231 <= nums[i] <= 231 - 1
// 0 <= k <= 10^5

// Follow up:
// Try to come up with as many solutions as you can. There are at least three different ways to solve this problem.
// Could you do it in-place with O(1) extra space?

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// Notice --------------------------------------------------------

// 1. ------------------------------------------------------------
// Given an array, rotate the array to the right by k steps, where k is non-negative.

// Example 1:
// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]

// Example 2:
// Input: nums = [-1,-100,3,99], k = 2
// Output: [3,99,-1,-100]
// Explanation:
// rotate 1 steps to the right: [99,-1,-100,3]
// rotate 2 steps to the right: [3,99,-1,-100]

// Constraints:
// 1 <= nums.length <= 10^5
// -231 <= nums[i] <= 231 - 1
// 0 <= k <= 10^5

// Follow up:
// Try to come up with as many solutions as you can. There are at least three different ways to solve this problem.
// Could you do it in-place with O(1) extra space?

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// Notice --------------------------------------------------------
// 1. k 可能比 nums 長度大

// 1. ------------------------------------------------------------
// Time Limit Exceeded
const rotate1 = (nums, k) => {
  // var
  const lastIndex = nums.length - 1

  // function
  const swap = (arr, index1, index2) => {
    const temp = arr[index1]
    arr[index1] = arr[index2]
    arr[index2] = temp
  }

  // run
  for (let i = 0; i < k; i++) {
    for (let j = lastIndex; j > 0; j--) {
      swap(nums, j, j - 1)
    }
  }
}

// 2. ------------------------------------------------------------
// Runtime: 88.39% / 93 ms
// Memory: 24.40% / 53.1 MB
const rotate2 = function (nums, k) {
  // exception
  const modified_k = k % nums.length
  if (nums.length === 0 || modified_k === 0) return

  // var
  const idxNewHead = nums.length - modified_k
  const idxTail = nums.length - 1

  // function
  const reverse = (start, end) => {
    while (start < end) {
      const temp = nums[start]
      nums[start] = nums[end]
      nums[end] = temp
      start++
      end--
    }
  }

  // run
  reverse(0, idxNewHead - 1)
  reverse(idxNewHead, idxTail)
  reverse(0, idxTail)
}
