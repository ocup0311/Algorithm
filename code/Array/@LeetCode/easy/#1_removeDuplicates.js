// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place
// such that each unique element appears only once. The relative order of the elements should
// be kept the same.

// Since it is impossible to change the length of the array in some languages, you must instead
// have the result be placed in the first part of the array nums. More formally, if there are k
// elements after removing the duplicates, then the first k elements of nums should hold the
// final result. It does not matter what you leave beyond the first k elements.

// Return k after placing the final result in the first k slots of nums.

// Do not allocate extra space for another array. You must do this by modifying the input array
// in-place with O(1) extra memory.

// Example 1:
// Input: nums = [1,1,2]
// Output: 2, nums = [1,2,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).

// Example 2:
// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
// Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).

// Constraints:
// 1 <= nums.length <= 3 * 10^4
// -100 <= nums[i] <= 100
// nums is sorted in non-decreasing order.

/**
 * @param {number[]} nums
 * @return {number}
 */

// Notice --------------------------------------------------------
// 1. 不能建立新 array
// 2. 已排列

// 1. ------------------------------------------------------------
// Runtime: 80.36% / 81 ms
// Memory: 48.29% / 44.8 MB
const solution1 = () => {
  const removeDuplicates = (nums) => {
    const length = nums.length
    let ptr = 0

    for (let i = 1; i < length; i++) {
      if (nums[i] !== nums[ptr]) {
        ptr++
        nums[ptr] = nums[i]
      }
    }

    for (let i = ptr + 1; i < length; i++) {
      nums.pop()
    }

    return nums.length
  }
}

// 2. ------------------------------------------------------------
// Runtime: 92.86% / 71 ms
// Memory: 18.48% / 45.2 MB
const solution2 = () => {
  const removeDuplicates = (nums) => {
    let ptr = 0

    for (let i = 1; i < nums.length; i++) {
      if (nums[i] !== nums[ptr]) {
        ptr++
        nums[ptr] = nums[i]
      }
    }

    nums.splice(ptr + 1, nums.length)

    return nums.length
  }
}

// 3. ------------------------------------------------------------
// 二刷，發現題目要求 in-place
// Runtime: 66 ms (89.19 %)
// Memory Usage: 44.5  (79.05 %)
const solution1a = () => {
  const removeDuplicates = (nums) => {
    let k = 0

    for (let i = 0; i < nums.length; i++) {
      if (nums[k] === nums[i]) continue

      k++
      nums[k] = nums[i]
    }

    k++

    return k
  }
}
