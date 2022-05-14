// Given the root of a binary tree, return the level order traversal of its nodes' values.
// (i.e., from left to right, level by level).

// Example 1:
// Input: root = [3,9,20,null,null,15,7]
// Output: [[3],[9,20],[15,7]]

// Example 2:
// Input: root = [1]
// Output: [[1]]

// Example 3:
// Input: root = []
// Output: []

// Constraints:
// The number of nodes in the tree is in the range [0, 2000].
// -1000 <= Node.val <= 1000

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

// Notice --------------------------------------------------------
// 1. root = [3,9,20,5,null,15,7]  vs  root = [3,9,20,null,5,15,7] ?

// 1. ------------------------------------------------------------
// Runtime: 64.66% / 77 ms
// Memory: 63.56% / 44.2 MB
const levelOrder1 = (root) => {
  // exception
  if (root === null) return []

  // var
  const result = []
  const queue = [[root]]

  // run
  while (queue.length > 0) {
    const thisLevel = queue.shift()
    const newLevel = []
    const vals = []

    thisLevel.forEach((node) => {
      vals.push(node.val)

      if (node.left) newLevel.push(node.left)
      if (node.right) newLevel.push(node.right)
    })

    if (newLevel[0]) queue.push(newLevel)

    result.push(vals)
  }

  return result
}
