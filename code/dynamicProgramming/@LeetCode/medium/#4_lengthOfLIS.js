// Given an integer array nums, return the length of the longest strictly increasing subsequence.

// A subsequence is a sequence that can be derived from an array by deleting some or no elements
// without changing the order of the remaining elements. For example, [3,6,2,7] is a subsequence
// of the array [0,3,1,6,2,2,7].

// Example 1:
// Input: nums = [10,9,2,5,3,7,101,18]
// Output: 4
// Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.

// Example 2:
// Input: nums = [0,1,0,3,2,3]
// Output: 4

// Example 3:
// Input: nums = [7,7,7,7,7,7,7]
// Output: 1

// Constraints:
// 1 <= nums.length <= 2500
// -10^4 <= nums[i] <= 10^4

// Follow up: Can you come up with an algorithm that runs in O(n log(n)) time complexity?

/**
 * @param {number[]} nums
 * @return {number}
 */

// Notice --------------------------------------------------------
// 1. 試著使用 O(nlog(n)) time

// 1. ------------------------------------------------------------
// Runtime: 50.82% / 207 ms
// Memory Usage: 76.78% / 43.7 MB
const lengthOfLIS1 = (nums) => {
  if (nums.length === 0) return 0
  if (nums.length === 1) return 1

  const DP = new Array(nums.length).fill(1)
  let result = 1

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) DP[i] = Math.max(DP[i], DP[j] + 1)
    }

    result = Math.max(DP[i], result)
  }

  return result
}

// 2. ------------------------------------------------------------
// 最終的 DP array 不一定是符合的答案。但 DP 長度會是本題所需。
// Runtime: 94.70% / 73 ms
// Memory Usage: 95.07% / 42.6 MB
const lengthOfLIS2 = (nums) => {
  // var
  const DP = [nums[0]]

  // function
  const binarySearch = (arr, val) => {
    let ptrS = 0
    let ptrE = arr.length - 1

    while (ptrS <= ptrE) {
      const ptrM = Math.floor((ptrS + ptrE) / 2)

      if (arr[ptrM] == val) return ptrM

      if (arr[ptrM] < val) ptrS = ptrM + 1
      else ptrE = ptrM - 1
    }

    return ptrS
  }

  // run
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > DP[DP.length - 1]) {
      DP.push(nums[i])
    } else {
      const j = binarySearch(DP, nums[i])
      DP[j] = nums[i]
    }
  }

  return DP.length
}
