// Given the root of a binary tree, return the zigzag level order traversal of its nodes' values.
// (i.e., from left to right, then right to left for the next level and alternate between).

// Example 1:
// Input: root = [3,9,20,null,null,15,7]
// Output: [[3],[20,9],[15,7]]

// Example 2:
// Input: root = [1]
// Output: [[1]]

// Example 3:
// Input: root = []
// Output: []

// Constraints:
// The number of nodes in the tree is in the range [0, 2000].
// -100 <= Node.val <= 100

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
// 1. 第一層 left --> right ，第二層 right --> left  -->  想到類似 BFS

// 1. ------------------------------------------------------------
// Runtime: 65 ms
// Memory Usage: 44.4 MB
const zigzagLevelOrder = (root) => {
  // exception
  if (root === null) return []

  // var
  const result = []
  const queue = [[root]]
  let reverse = false

  // run
  while (queue.length > 0) {
    const curLevel = queue.shift()

    if (reverse) result.push(curLevel.map((node) => node.val).reverse())
    else result.push(curLevel.map((node) => node.val))

    const newLevel = curLevel.reduce(
      (t, v) => t.concat([v.left, v.right]).filter((v) => v),
      []
    )
    if (newLevel.length > 0) queue.push(newLevel)

    reverse = !reverse
  }

  return result
}
