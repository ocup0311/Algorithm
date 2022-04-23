// Given an integer array nums, design an algorithm to randomly shuffle the array.
// All permutations of the array should be equally likely as a result of the shuffling.

// Implement the Solution class:

// Solution(int[] nums) Initializes the object with the integer array nums.
// int[] reset() Resets the array to its original configuration and returns it.
// int[] shuffle() Returns a random shuffling of the array.

// Example 1:
// Input
// ["Solution", "shuffle", "reset", "shuffle"]
// [[[1, 2, 3]], [], [], []]
// Output
// [null, [3, 1, 2], [1, 2, 3], [1, 3, 2]]

// Explanation
// Solution solution = new Solution([1, 2, 3]);
// solution.shuffle();    // Shuffle the array [1,2,3] and return its result.
//                        // Any permutation of [1,2,3] must be equally likely to be returned.
//                        // Example: return [3, 1, 2]
// solution.reset();      // Resets the array back to its original configuration [1,2,3]. Return [1, 2, 3]
// solution.shuffle();    // Returns the random shuffling of array [1,2,3]. Example: return [1, 3, 2]

// Constraints:
// 1 <= nums.length <= 50
// -10^6 <= nums[i] <= 10^6
// All the elements of nums are unique.
// At most 10^4 calls in total will be made to reset and shuffle.

/**
 * @param {number[]} nums
 * @class Solution(nums)
 */

/**
 * @return {number[]}
 * @method Solution.prototype.reset()
 */

/**
 * @return {number[]}
 * @method Solution.prototype.shuffle()
 */

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */

// Notice --------------------------------------------------------
// 1. Array 中所有 item 都是不同的

// 1. ------------------------------------------------------------
// Runtime: 97.40% / 178 ms
// Memory: 95.02% / 55.5 MB
// O(n^2)
class Solution1 {
  constructor(nums) {
    this.#nums = nums
  }

  #nums

  /**
   * @return {number[]}
   */
  reset() {
    return [...this.#nums]
  }

  /**
   * @return {number[]}
   */
  shuffle() {
    const nums = this.#nums
    const result = new Array(nums.length)
    const cache = [...nums]

    for (let i = 0; i < nums.length; i++) {
      const idx = Math.floor(Math.random() * cache.length)

      result[i] = cache[idx]
      cache.splice(idx, 1)
    }

    return result
  }
}

// 2. ------------------------------------------------------------
// Runtime: 90.48% / 196 ms
// Memory: 97.40% / 53.3 MB
// O(n)
class Solution {
  constructor(nums) {
    this.#nums = nums
  }

  #nums

  /**
   * @return {number[]}
   */
  reset() {
    return [...this.#nums]
  }

  /**
   * @return {number[]}
   */
  shuffle() {
    const result = [...this.#nums]

    const swap = (idx1, idx2) => {
      const temp = result[idx1]
      result[idx1] = result[idx2]
      result[idx2] = temp
    }

    for (let i = 0; i < result.length; i++) {
      const idxRandom = Math.floor(Math.random() * result.length)

      swap(i, idxRandom)
    }

    return result
  }
}
