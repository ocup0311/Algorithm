// You are given an integer array nums. You are initially positioned at the array's first index,
// and each element in the array represents your maximum jump length at that position.

// Return true if you can reach the last index, or false otherwise.

// Example 1:
// Input: nums = [2,3,1,1,4]
// Output: true
// Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.

// Example 2:
// Input: nums = [3,2,1,0,4]
// Output: false
// Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0,
// which makes it impossible to reach the last index.

// Constraints:
// 1 <= nums.length <= 10^4
// 0 <= nums[i] <= 10^5

/**
 * @param {number[]} nums
 * @return {boolean}
 */

// Notice --------------------------------------------------------

// 1. ------------------------------------------------------------
// Runtime: 0% / 6757 ms
// Memory Usage: 29.65% / 47.9 MB
const canJump1 = (nums) => {
  // exception
  if (nums[0] >= nums.length - 1) return true

  // var
  const idxGoal = nums.length - 1
  const cache = { [idxGoal]: true }

  // run
  for (let i = nums.length - 2; i > -1; i--) {
    for (let j = nums[i]; j > 0; j--) {
      if (cache[i + j]) cache[i] = true
    }
  }

  return cache[0] ?? false
}

// 2. ------------------------------------------------------------
// Runtime: 17.02% / 2037 ms
// Memory Usage: 0% / 54.5 MB
const canJump2 = (nums) => {
  // exception
  if (nums[0] >= nums.length - 1) return true

  // var
  const cache = new Map()
  cache.set(nums.length - 1, true)

  // function
  const check = (nums, idx) => {
    if (idx >= nums.length - 1) return true
    if (cache.has(idx)) return cache.get(idx)

    for (let i = nums[idx]; i > 0; i--) {
      if (check(nums, idx + i)) {
        cache.set(idx, true)
        return true
      }
    }

    cache.set(idx, false)
    return false
  }

  // run
  return check(nums, 0)
}

// 3. ------------------------------------------------------------
