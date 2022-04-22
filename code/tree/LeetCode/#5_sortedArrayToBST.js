// Given an integer array nums where the elements are sorted in ascending order,
// convert it to a height-balanced binary search tree.

// A height-balanced binary tree is a binary tree in which the depth of the two
// subtrees of every node never differs by more than one.

// Example 1:
// Input: nums = [-10,-3,0,5,9]
// Output: [0,-3,9,-10,null,5]
// Explanation: [0,-10,5,null,-3,null,9] is also accepted:

// Example 2:
// Input: nums = [1,3]
// Output: [3,1]
// Explanation: [1,null,3] and [3,1] are both height-balanced BSTs.

// Constraints:
// 1 <= nums.length <= 10^4
// -10^4 <= nums[i] <= 10^4
// nums is sorted in a strictly increasing order.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */

// Notice --------------------------------------------------------
// 1. 高度平衡
// 2. 已排序的 Array

// 1. ------------------------------------------------------------
// Runtime: 78.39% / 79 ms
// Memory: 91.29% / 44.2 MB
const sortedArrayToBST1 = (nums, idxS = 0, idxE = nums.length - 1) => {
  if (idxS > idxE) return null

  const idxM = Math.ceil((idxS + idxE) / 2)
  const root = new TreeNode(nums[idxM])

  const left = sortedArrayToBST1(nums, idxS, idxM - 1)
  const right = sortedArrayToBST1(nums, idxM + 1, idxE)

  root.left = left
  root.right = right

  return root
}

// 2. ------------------------------------------------------------
const sortedArrayToBST2 = (nums, idxS = 0, idxE = nums.length - 1) => {
  if (idxS > idxE) return null

  const idxM = Math.floor((idxS + idxE) / 2)
  const root = new TreeNode(nums[idxM])

  const left = sortedArrayToBST2(nums, idxS, idxM - 1)
  const right = sortedArrayToBST2(nums, idxM + 1, idxE)

  root.left = left
  root.right = right

  return root
}
