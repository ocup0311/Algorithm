// Given an unsorted array of integers nums, return the length of the longest consecutive
// elements sequence.

// You must write an algorithm that runs in O(n) time.

// Example 1:
// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

// Example 2:
// Input: nums = [0,3,7,2,5,8,4,6,0,1]
// Output: 9

// Constraints:
// 0 <= nums.length <= 10^5
// -10^9 <= nums[i] <= 10^9

/**
 * @param {number[]} nums
 * @return {number}
 */

// Notice --------------------------------------------------------
// 1. T(n): O(n)
// 2. 未排序
// 3. 有負數
// 4. 會有相同的數字
// 5. 不一定從最小的開始連續

// 1. ------------------------------------------------------------
// 超出 length 的數字就出問題了
// fail: 67 / 71 test cases passed.
// Input:[-8,-4,9,9,4,6,1,-4,-1,6,8]
// Output:1
// Expected:2
const longestConsecutive1 = (nums) => {
  let min = Infinity
  let tmp = 0
  let result = 0

  // run
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < min) min = nums[i]
  }

  for (let i = 0; i < nums.length; i++) {
    nums[i] = nums[i] - min + 1
  }

  for (let i = 0; i < nums.length; i++) {
    const value = Math.abs(nums[i])
    const key = value - 1

    if (nums[key] > 0) nums[key] = -nums[key]
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0) {
      tmp++
      continue
    }

    if (tmp > result) result = tmp
    tmp = 0
  }

  if (tmp > result) result = tmp

  return result
}

// 2. ------------------------------------------------------------
// Runtime: 87.34% / 105 ms
// Memory Usage: 43.10% / 57.1 MB
const longestConsecutive = (nums) => {
  const numSet = new Set(nums)
  let maxLength = 0

  for (let n of numSet) {
    if (numSet.has(n - 1)) continue

    let tmpLength = 1
    while (numSet.has(++n)) tmpLength++
    if (tmpLength > maxLength) maxLength = tmpLength
  }

  return maxLength
}
