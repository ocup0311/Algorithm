// Given an integer array nums, return true if there exists a triple of indices (i, j, k)
// such that i < j < k and nums[i] < nums[j] < nums[k]. If no such indices exists, return false.

// Example 1:
// Input: nums = [1,2,3,4,5]
// Output: true
// Explanation: Any triplet where i < j < k is valid.

// Example 2:
// Input: nums = [5,4,3,2,1]
// Output: false
// Explanation: No triplet exists.

// Example 3:
// Input: nums = [2,1,5,0,4,6]
// Output: true
// Explanation: The triplet (3, 4, 5) is valid because nums[3] == 0 < nums[4] == 4 < nums[5] == 6.

// Constraints:
// 1 <= nums.length <= 5 * 10^5
// -2^31 <= nums[i] <= 2^31 - 1

// Follow up: Could you implement a solution that runs in O(n) time complexity and O(1) space complexity?

/**
 * @param {number[]} nums
 * @return {boolean}
 */

// Notice --------------------------------------------------------
// 1. 是否可能一樣？ 大小一樣算數嗎？
// 2. 不需連續 index

// 1. ------------------------------------------------------------
// Runtime: 81.95% / 77 ms
// Memory Usage: 35.84% / 54.3 MB
const increasingTriplet = (nums) => {
  // exception
  if (nums.length < 3) return false

  // var
  let [num1, num2, tmp1] = []

  // run
  for (let n of nums) {
    if (num1 === undefined) {
      num1 = n
      continue
    }

    if (num2 === undefined) {
      if (num1 < n) num2 = n
      else num1 = n
      continue
    }

    if (num2 < n) return true

    if (num1 < n) num2 = n
    else if (tmp1 < n) {
      num1 = tmp1
      num2 = n
    } else {
      tmp1 = n
    }
  }

  return false
}
