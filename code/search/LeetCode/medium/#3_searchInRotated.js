// There is an integer array nums sorted in ascending order (with distinct values).

// Prior to being passed to your function, nums is possibly rotated at an unknown pivot
// index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ...,
// nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7]
// might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

// Given the array nums after the possible rotation and an integer target, return the
// index of target if it is in nums, or -1 if it is not in nums.

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:
// Input: nums = [4,5,6,7,0,1,2], target = 0
// Output: 4

// Example 2:
// Input: nums = [4,5,6,7,0,1,2], target = 3
// Output: -1

// Example 3:
// Input: nums = [1], target = 0
// Output: -1

// Constraints:
// 1 <= nums.length <= 5000
// -10^4 <= nums[i] <= 10^4
// All values of nums are unique.
// nums is an ascending array that is possibly rotated.
// -10^4 <= target <= 10^4

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// Notice --------------------------------------------------------

// 1. ------------------------------------------------------------
// fail
// 182 / 195 test cases passed.
// Input: [4,5,6,7,8,1,2,3] 8
// Output: -1
// Expected: 4
const search1 = (nums, target) => {
  let [ptrS, ptrE] = [0, nums.length - 1]

  while (ptrS <= ptrE) {
    const ptrM = Math.floor((ptrS + ptrE) / 2)
    console.log(ptrS, ptrM, ptrE)

    if (nums[ptrM] === target) return ptrM

    if (nums[ptrS] > nums[ptrE]) {
      if (nums[ptrM] < target) {
        if (nums[ptrE] < target) ptrE = ptrM - 1
        else ptrS = ptrM + 1
      } else {
        if (nums[ptrS] > target) ptrS = ptrM + 1
        else ptrE = ptrM - 1
      }
    } else {
      if (nums[ptrM] > target) ptrE = ptrM - 1
      else ptrS = ptrM + 1
    }
  }

  return -1
}

// 2. ------------------------------------------------------------
// Runtime: 99.30% / 52 ms
// Memory Usage: 11.46% / 42.9 MB
const search2 = (nums, target) => {
  // function
  const findSmallest = (arr, [ptrS, ptrE]) => {
    let idxS = 0

    while (ptrS <= ptrE) {
      const ptrM = Math.ceil((ptrS + ptrE) / 2)

      if (arr[idxS] > arr[ptrM]) idxS = ptrM
      if (arr[ptrS] < arr[ptrE]) {
        if (arr[idxS] > arr[ptrS]) idxS = ptrS
        break
      }
      if (arr[ptrS] < arr[ptrM]) ptrS = ptrM + 1
      else ptrE = ptrM - 1
    }

    return idxS
  }
  const findTarget = (arr, [ptrS, ptrE]) => {
    while (ptrS <= ptrE) {
      const ptrM = Math.floor((ptrS + ptrE) / 2)

      if (arr[ptrM] === target) return ptrM
      if (arr[ptrM] < target) ptrS = ptrM + 1
      else ptrE = ptrM - 1
    }

    return -1
  }

  // run
  const [idxStart, idxEnd] = [0, nums.length - 1]
  const idxSmall = findSmallest(nums, [idxStart, idxEnd])
  const resultS = findTarget(nums, [idxStart, idxSmall - 1])
  const resultE = findTarget(nums, [idxSmall, idxEnd])

  return Math.max(resultS, resultE)
}
