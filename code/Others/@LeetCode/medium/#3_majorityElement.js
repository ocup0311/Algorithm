// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times.
// You may assume that the majority element always exists in the array.

// Example 1:
// Input: nums = [3,2,3]
// Output: 3

// Example 2:
// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

// Constraints:
// n == nums.length
// 1 <= n <= 5 * 10^4
// -10^9 <= nums[i] <= 10^9

// Follow-up: Could you solve the problem in linear time and in O(1) space?

/**
 * @param {number[]} nums
 * @return {number}
 */

// Notice --------------------------------------------------------
// 1. 過半數的數字
// 2. 假設必有答案
// 3. O(1) space

// 1. ------------------------------------------------------------
// T(n): O(nlogn)
// S(n): O(n)
// Runtime: 89.06% / 69 ms
// Memory Usage: 0% / 45.9 MB
const majorityElement1 = (nums) => {
  const sortedNums = nums.sort((a, b) => b - a)

  return sortedNums[Math.floor(nums.length / 2)]
}

// 2. ------------------------------------------------------------
// T(n): O(n)
// S(n): O(n)
// Runtime: 92.81% / 67 ms
// Memory Usage: 41.70% / 44.2 MB
const majorityElement = (nums) => {
  const hashMap = {}

  for (const n of nums) {
    hashMap[n] = hashMap[n] + 1 || 1

    if (hashMap[n] >= nums.length / 2) return n
  }
}

// 3. ------------------------------------------------------------
