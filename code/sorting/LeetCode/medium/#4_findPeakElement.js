// A peak element is an element that is strictly greater than its neighbors.

// Given an integer array nums, find a peak element, and return its index.
// If the array contains multiple peaks, return the index to any of the peaks.

// You may imagine that nums[-1] = nums[n] = -∞.

// You must write an algorithm that runs in O(log n) time.

// Example 1:
// Input: nums = [1,2,3,1]
// Output: 2
// Explanation: 3 is a peak element and your function should return the index number 2.

// Example 2:
// Input: nums = [1,2,1,3,5,6,4]
// Output: 5
// Explanation: Your function can return either index number 1 where the peak element is 2,
// or index number 5 where the peak element is 6.

// Constraints:
// 1 <= nums.length <= 1000
// -2^31 <= nums[i] <= 2^31 - 1
// nums[i] != nums[i + 1] for all valid i.

/**
 * @param {number[]} nums
 * @return {number}
 */

// Notice --------------------------------------------------------
// 1. O(logn)
// 2. 兩端只需比另一邊大即可。例如： -∞ [3,2,3,4,5] -∞  --> arr[0], arr[4] 都算 peak

// 1. ------------------------------------------------------------
// O(n)
// Runtime: 66.26% / 70 ms
// Memory Usage: 0$ / 44 MB
const findPeakElement1 = (nums) => {
  if (nums.length === 1) return 0

  for (let i = 0; i < nums.length; i++) {
    const [a, b, c] = [nums[i - 1], nums[i], nums[i + 1]]
    if ((b > a || a === undefined) && (b > c || c === undefined)) return i
  }

  return null
}

// 2. ------------------------------------------------------------
// O(logn)
// 不斷將 大的 放在兩個末端做限縮，保持 input 的形式： "小 [大, ... ,大] 小" ，再不斷限縮成 "小 [大] 小"
// Runtime: 96.15% / 56 ms
// Memory Usage: 34.06% / 42.3 MB
const findPeakElement = function (nums) {
  if (nums.length === 1) return 0

  let [ptrL, ptrR] = [0, nums.length - 1]

  while (ptrL < ptrR) {
    const ptrM = Math.floor((ptrL + ptrR) / 2)

    if (nums[ptrM] > nums[ptrM + 1]) ptrR = ptrM
    else ptrL = ptrM + 1
  }

  return ptrL
}
