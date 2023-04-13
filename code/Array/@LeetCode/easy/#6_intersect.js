// Given two integer arrays nums1 and nums2, return an array of their intersection.
// Each element in the result must appear as many times as it shows in both arrays
// and you may return the result in any order.

// Example 1:
// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]

// Example 2:
// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [4,9]
// Explanation: [9,4] is also accepted.

// Constraints:
// 1 <= nums1.length, nums2.length <= 1000
// 0 <= nums1[i], nums2[i] <= 1000

// Follow up:
// What if the given array is already sorted? How would you optimize your algorithm?
// What if nums1's size is small compared to nums2's size? Which algorithm is better?
// What if elements of nums2 are stored on disk, and the memory is limited such that
// you cannot load all elements into the memory at once?

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

// Notice --------------------------------------------------------
// 1. 並未排序
// 2. 可能有重複的

// 1. ------------------------------------------------------------
// Runtime: 86.53% / 67 ms
// Memory: 62.71% / 43 MB
const intersect1 = (nums1, nums2) => {
  const counter = {}
  const output = []

  for (let i = 0; i < nums1.length; i++) {
    counter[nums1[i]] = counter[nums1[i]] + 1 || 1
  }

  for (let i = 0; i < nums2.length; i++) {
    if (counter[nums2[i]] > 0) {
      counter[nums2[i]]--
      output.push(nums2[i])
    }
  }

  return output
}

// 二刷補充：
// 1. ------------------------------------------------------------
// 同一刷解法
// T(n): O(n1+n2)
// S(n): O(Min(n1, n2))
// 若 nums1 size 叫 nums2 的小，我會選擇以 nums1 來做 map，因為 S(n) 較小。
// 若 nums2 size 過大，無法一次 load 進 memory，一樣用 nums1 做 map，並在第二個 for loop 分批 load nums2，並且在一批結束後，將 intersection 輸出到 file
// 若 nums1, nums2 的 size 都過大，則可以先整理資料，依照 range 來劃分，再一一比對。(例如 1~10, 11~20 各為一組)
const intersect1a = (nums1, nums2) => {
  if (nums1.length > nums2.length) return intersect1a(nums2, nums1)

  const intersection = []
  const map = {}

  for (let i = 0; i < nums1.length; i++) {
    const num = nums1[i]

    if (map[num]) map[num]++
    else map[num] = 1
  }

  for (let i = 0; i < nums2.length; i++) {
    const num = nums2[i]

    if (map[num]) {
      map[num]--
      intersection.push(num)
    }
  }

  return intersection
}

// 2. ------------------------------------------------------------
// 已經排序前提下的寫法
// T(n): O(n1+n2)
// S(n): O(1)
const intersect2a = (nums1, nums2) => {
  const intersection = []
  const len1 = nums1.length
  const len2 = nums2.length
  let ptr1 = 0
  let ptr2 = 0

  while (ptr1 < len1 && ptr2 < len2) {
    if (nums1[ptr1] === nums2[ptr2]) {
      intersection.push(nums1[ptr1])
      ptr1++
      ptr2++
    } else if (nums1[ptr1] > nums2[ptr2]) {
      ptr2++
    } else {
      ptr1++
    }
  }

  while (ptr1 < len1) {
    if (nums1[ptr1] === nums2[len2]) {
      intersection.push(nums1[ptr1])
      break
    }

    ptr1++
  }

  while (ptr2 < len2) {
    if (nums2[ptr2] === nums1[len1]) {
      intersection.push(nums2[ptr2])
      break
    }

    ptr2++
  }

  return intersection
}
