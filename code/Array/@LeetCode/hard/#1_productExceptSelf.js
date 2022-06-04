// Given an integer array nums, return an array answer such that answer[i]
// is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.

// Example 1:
// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]

// Example 2:
// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]

// Constraints:
// 2 <= nums.length <= 10^5
// -30 <= nums[i] <= 30
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// Follow up: Can you solve the problem in O(1) extra space complexity?
// (The output array does not count as extra space for space complexity analysis.)

/**
 * @param {number[]} nums
 * @return {number[]}
 */

// Notice --------------------------------------------------------
// 1. 不能用除法
// 2. O(n) time
// 3. 除了 output，只用 O(1) space

// 1. ------------------------------------------------------------
// T(n): O(n)
// S(n): O(n) || 「O(1) (除了 output)」
// Runtime: 87.41% / 109 ms
// Memory Usage: 39.17% / 55.3 MB
const productExceptSelf1 = (nums) => {
  const n = nums.length
  const output = new Array(n).fill(nums[0])
  let productFromRight = 1

  for (let i = 1; i < n; i++) {
    output[i] = output[i - 1] * nums[i]
  }

  for (let i = n - 1; i > 0; i--) {
    output[i] = output[i - 1] * productFromRight
    productFromRight = productFromRight * nums[i]
  }

  output[0] = productFromRight

  return output
}

// 2. ------------------------------------------------------------
// 在複雜度不變下，多花點時間空間，但覺得較為清楚
// T(n): O(n)
// S(n): O(n)
// Runtime: 150 ms
// Memory Usage: 58.8 MB
const productExceptSelf = (nums) => {
  const n = nums.length
  const left = [...nums]
  const right = [...nums]
  const output = new Array(n)

  for (let l = 1; l < n; l++) {
    const r = n - 1 - l

    left[l] = left[l - 1] * left[l]
    right[r] = right[r + 1] * right[r]
  }

  for (let i = 1; i < n - 1; i++) {
    output[i] = left[i - 1] * right[i + 1]
  }
  output[0] = right[1]
  output[n - 1] = left[n - 2]

  return output
}
