// Given an integer array nums, find the contiguous subarray (containing at least one number)
// which has the largest sum and return its sum.

// A subarray is a contiguous part of an array.

// Example 1:
// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.

// Example 2:
// Input: nums = [1]
// Output: 1

// Example 3:
// Input: nums = [5,4,-1,7,8]
// Output: 23

// Constraints:
// 1 <= nums.length <= 10^5
// -10^4 <= nums[i] <= 10^4

// Follow up: If you have figured out the O(n) solution, try coding another solution using
// the divide and conquer approach, which is more subtle.

/**
 * @param {number[]} nums
 * @return {number}
 */

// Notice --------------------------------------------------------
// 1. O(n) time <-- divide and conquer

// 1. ------------------------------------------------------------
// 207 / 209 test cases passed.
// Time Limit Exceeded
// Last executed input: [10000,10000,10000,10000,10000,10000,10000,10000,10000,10000,10000,10000,10000,10000,10000,10000,10000,10000,10000,10000,10000,10000,10000,10000,10000,10000,10000,10000,10000,...]
const maxSubArray1 = (nums) => {
  let max = -Infinity

  for (let i = 0; i < nums.length; i++) {
    let tmp = nums[i]

    for (let j = i; j < nums.length; ) {
      if (tmp > max) max = tmp

      j++
      tmp = tmp + nums[j]

      if (tmp < nums[j]) break
    }
  }

  return max
}

// 2. ------------------------------------------------------------
// Runtime: 3567 ms
// Memory: 57.5 MB
const maxSubArray2 = (nums) => {
  let max = -Infinity
  let [idxL, maxL] = [0, -Infinity]

  for (let idxS = 0; idxS < nums.length; idxS++) {
    let [tmp, idxE] = idxL > idxS ? [maxL, idxL] : [nums[idxS], idxS]

    while (idxE < nums.length) {
      if (tmp > maxL) {
        maxL = tmp
        idxL = idxE

        if (maxL > max) max = maxL
      }

      idxE++
      tmp = tmp + nums[idxE]

      if (tmp < nums[idxE]) break
    }

    maxL = maxL === nums[idxS] ? -Infinity : maxL - nums[idxS]
  }

  return max
}

// 3. ------------------------------------------------------------
// Runtime: 81.91% / 85 ms
// Memory: 83.05% / 50.2 MB
// 拆分成「沿用」、「不沿用」 --> 二選一保留，有最好的就更新 max
// 看解答後發現此方法類似：Kadane's Algorithm，可在解化成方法 4
const maxSubArray3 = (nums) => {
  let max = nums[0]
  let maxE = nums[0]

  for (let i = 1; i < nums.length; i++) {
    const temp = maxE + nums[i]

    maxE = temp > nums[i] ? temp : nums[i]

    if (maxE > max) max = maxE
  }

  return max
}

// 4. ------------------------------------------------------------
const maxSubArray = (nums) => {
  let max = nums[0]
  let sum = 0

  for (let i = 0; i < nums.length; i++) {
    sum = sum + nums[i]

    if (max < sum) max = sum
    if (sum < 0) sum = 0
  }

  return max
}
