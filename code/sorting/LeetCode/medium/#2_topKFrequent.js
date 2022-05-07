// Given an integer array nums and an integer k, return the k most frequent elements.
// You may return the answer in any order.

// Example 1:
// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]

// Example 2:
// Input: nums = [1], k = 1
// Output: [1]

// Constraints:
// 1 <= nums.length <= 10^5
// k is in the range [1, the number of unique elements in the array].
// It is guaranteed that the answer is unique.

// Follow up: Your algorithm's time complexity must be better than O(n log n), where n is the array's size.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

// Notice --------------------------------------------------------
// 1. time 至少 O(nlogn)
// 2. 回傳前 k 個最常出現的項目
// 3. 不管順序
// 4. input 未排列

// 1. ------------------------------------------------------------
// Runtime: 88 ms
// Memory Usage: 44.4 MB
const topKFrequent = (nums, k) => {
  const count = nums.reduce((count, v) => {
    if (count[v]) count[v]++
    else count[v] = 1
    return count
  }, {})

  return Object.entries(count)
    .sort((a, b) => b[1] - a[1])
    .slice(0, k)
    .map((v) => v[0])
}
