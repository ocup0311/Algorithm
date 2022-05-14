// Given an integer array nums and an integer k, return the kth largest element in the array.

// Note that it is the kth largest element in the sorted order, not the kth distinct element.

// Example 1:
// Input: nums = [3,2,1,5,6,4], k = 2
// Output: 5

// Example 2:
// Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
// Output: 4

// Constraints:
// 1 <= k <= nums.length <= 10^4
// -10^4 <= nums[i] <= 10^4

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// Notice --------------------------------------------------------

// 1. ------------------------------------------------------------
// Runtime: 88 ms
// Memory Usage: 44.2 MB
const findKthLargest1 = (nums, k) => {
  const sortedNums = [...nums].sort((a, b) => b - a)

  return sortedNums[k - 1]
}

// 2. ------------------------------------------------------------
// 練習 merge sort
// Runtime: 91 ms
// Memory Usage: 48.7 MB
const findKthLargest2 = (nums, k) => {
  const merge = (arrL, arrR) => {
    const mergeArr = []
    let [ptrL, ptrR] = [0, 0]

    while (ptrL < arrL.length && ptrR < arrR.length) {
      if (arrL[ptrL] > arrR[ptrR]) {
        mergeArr.push(arrL[ptrL])
        ptrL++
      } else {
        mergeArr.push(arrR[ptrR])
        ptrR++
      }
    }

    while (ptrL < arrL.length) {
      mergeArr.push(arrL[ptrL])
      ptrL++
    }

    while (ptrR < arrR.length) {
      mergeArr.push(arrR[ptrR])
      ptrR++
    }

    return mergeArr
  }

  const sort = (arr) => {
    if (arr.length < 2) return arr

    const idxM = Math.ceil(arr.length / 2)
    const arrL = arr.slice(0, idxM)
    const arrR = arr.slice(idxM, arr.length)

    return merge(sort(arrL), sort(arrR))
  }

  const sortedNums = sort(nums)

  return sortedNums[k - 1]
}

// 3. ------------------------------------------------------------
// 練習 quick sort in-place
// Runtime: 403 ms
// Memory Usage: 43.9 MB
const findKthLargest3 = (nums, k) => {
  // function
  const swap = (idx1, idx2) =>
    ([nums[idx1], nums[idx2]] = [nums[idx2], nums[idx1]])

  const partition = (ptr1, ptr2) => {
    for (let i = ptr1; i < ptr2; i++) {
      if (nums[i] > nums[ptr2]) {
        swap(ptr1, i)
        ptr1++
      }
    }

    swap(ptr1, ptr2)

    return ptr1
  }

  const sort = (ptr1, ptr2) => {
    if (ptr1 >= ptr2) return

    const idx = partition(ptr1, ptr2)
    sort(ptr1, idx - 1)
    sort(idx + 1, ptr2)
  }

  // run
  sort(0, nums.length - 1)

  return nums[k - 1]
}
