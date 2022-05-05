// Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed)
// of all the values of the nodes in the tree.

// Example 1:
// Input: root = [3,1,4,null,2], k = 1
// Output: 1

// Example 2:
// Input: root = [5,3,6,2,4,null,null,1], k = 3
// Output: 3

// Constraints:
// The number of nodes in the tree is n.
// 1 <= k <= n <= 10^4
// 0 <= Node.val <= 10^4

// Follow up:
// If the BST is modified often (i.e., we can do insert and delete operations)
// and you need to find the kth smallest frequently, how would you optimize?

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
 * @param {number} k
 * @return {number}
 */

// Notice --------------------------------------------------------
// 1. index from 1
// 2. binary search tree --> sorted --> inorder

// 1. ------------------------------------------------------------
// Runtime: 72.09% / 79 ms
// Memory Usage: 83.35% / 48.2 MB
const kthSmallest1 = (root, k) => {
  let result = null
  let nth = 1

  const inorder = (root, k) => {
    if (root === null) return

    inorder(root.left, k)
    if (nth === k) result = root.val
    nth++
    inorder(root.right, k)
  }

  inorder(root, k)

  return result
}

// 2. ------------------------------------------------------------
// Runtime: 74 ms
// Memory Usage: 48.8 MB
const kthSmallest = (root, k) => {
  const stack = [[root, false]]
  let nth = 1

  while (stack.length > 0) {
    const [node, isOutput] = stack.pop()

    if (isOutput) {
      if (nth === k) return node.val
      nth++
      continue
    }

    if (node.right) stack.push([node.right, false])
    stack.push([node, true])
    if (node.left) stack.push([node.left, false])
  }

  return null
}
