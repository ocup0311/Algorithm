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

// 3. ------------------------------------------------------------
// fix 1
const search3 = (nums, target) => {
  let [ptrS, ptrE] = [0, nums.length - 1]

  while (ptrS <= ptrE) {
    const ptrM = Math.ceil((ptrS + ptrE) / 2)
    console.log(ptrS, ptrM, ptrE)

    if (nums[ptrM] === target) return ptrM

    if (nums[ptrS] > nums[ptrE]) {
      if (nums[ptrM] < nums[ptrS]) {
        if (nums[ptrS] < target) ptrE = ptrM - 1
        else if (nums[ptrE] < target) ptrE = ptrM - 1
        else if (nums[ptrM] < target) ptrS = ptrM + 1
        else ptrE = ptrM - 1
      } else {
        if (nums[ptrS] > target) ptrS = ptrM + 1
        else if (nums[ptrE] > target) ptrS = ptrM + 1
        else if (nums[ptrM] < target) ptrS = ptrM + 1
        else ptrE = ptrM - 1
      }
    } else {
      if (nums[ptrM] > target) ptrE = ptrM - 1
      else ptrS = ptrM + 1
    }
  }

  return -1
}

// 4. ------------------------------------------------------------
// clean up from 3
const search4 = (nums, target) => {
  let [ptrS, ptrE] = [0, nums.length - 1]

  while (ptrS <= ptrE) {
    const ptrM = Math.floor((ptrS + ptrE) / 2)

    if (nums[ptrM] === target) return ptrM

    if (nums[ptrS] > nums[ptrE]) {
      if (nums[ptrM] < nums[ptrS]) {
        if (target > nums[ptrE] || target < nums[ptrM]) ptrE = ptrM - 1
        else ptrS = ptrM + 1
      } else {
        if (target < nums[ptrS] || target > nums[ptrM]) ptrS = ptrM + 1
        else ptrE = ptrM - 1
      }
    } else {
      if (target < nums[ptrM]) ptrE = ptrM - 1
      else ptrS = ptrM + 1
    }
  }

  return -1
}

// 5. ------------------------------------------------------------
// clean up from 4
const search5 = (nums, target) => {
  let [ptrS, ptrE] = [0, nums.length - 1]

  // function
  const isTarget = (idx) => nums[idx] === target
  const isTwoPart = () => nums[ptrS] > nums[ptrE]
  const isInPart2 = (idxM) => nums[idxM] < nums[ptrS]
  const isInRange = (idxS, idxE) => target > nums[idxS] || target < nums[idxE]
  const goLeftOf = (idx) => (ptrE = idx - 1)
  const goRightOf = (idx) => (ptrS = idx + 1)

  // run
  while (ptrS <= ptrE) {
    const ptrM = Math.floor((ptrS + ptrE) / 2)

    if (isTarget(ptrM)) return ptrM

    if (isTwoPart()) {
      if (isInPart2(ptrM)) {
        if (isInRange(ptrE, ptrM)) goLeftOf(ptrM)
        else goRightOf(ptrM)
      } else {
        if (isInRange(ptrM, ptrS)) goRightOf(ptrM)
        else goLeftOf(ptrM)
      }
    } else {
      if (target < nums[ptrM]) goLeftOf(ptrM)
      else goRightOf(ptrM)
    }
  }

  return -1
}

// 6. ------------------------------------------------------------
// 虛擬延長雙倍:
// --------------idxM---------------
// ptrS--idxS--ptrE-ptrS--idxE--ptrE
const search6 = (nums, target) => {
  // function
  const findSmallest = (arr, [ptrS, ptrE]) => {
    while (ptrS < ptrE) {
      const ptrM = Math.floor((ptrS + ptrE) / 2)

      if (arr[ptrM] > arr[ptrE]) ptrS = ptrM + 1
      else ptrE = ptrM
    }

    return ptrS
  }

  const findTarget = (arr, [ptrS, ptrE, idxS]) => {
    while (ptrS <= ptrE) {
      const ptrM = Math.floor((ptrS + ptrE) / 2)
      const idxM = (ptrM + idxS) % arr.length

      if (target === arr[idxM]) return idxM
      if (target < arr[idxM]) ptrE = ptrM - 1
      else ptrS = ptrM + 1
    }

    return -1
  }

  // run
  const [idxStart, idxEnd] = [0, nums.length - 1]
  const idxSmall = findSmallest(nums, [idxStart, idxEnd])
  const result = findTarget(nums, [idxStart, idxEnd, idxSmall])

  return result
}

// 7. ------------------------------------------------------------
// fix from 1
const search = (nums, target) => {
  let [ptrS, ptrE] = [0, nums.length - 1]

  while (ptrS <= ptrE) {
    const ptrM = Math.floor((ptrS + ptrE) / 2)

    if (nums[ptrM] === target) return ptrM

    if (nums[ptrM] < nums[ptrE]) {
      if (target > nums[ptrM] && target <= nums[ptrE]) ptrS = ptrM + 1
      else ptrE = ptrM - 1
    } else {
      if (target >= nums[ptrS] && target < nums[ptrM]) ptrE = ptrM - 1
      else ptrS = ptrM + 1
    }
  }

  return -1
}
