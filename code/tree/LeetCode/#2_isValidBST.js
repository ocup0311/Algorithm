// Given the root of a binary tree, determine if it is a valid binary search tree (BST).

// A valid BST is defined as follows:

// The left subtree of a node contains only nodes with keys less than the node's key.
// The right subtree of a node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees must also be binary search trees.

// Example 1:
// Input: root = [2,1,3]
// Output: true

// Example 2:
// Input: root = [5,1,4,null,null,3,6]
// Output: false
// Explanation: The root node's value is 5 but its right child's value is 4.

// Constraints:
// The number of nodes in the tree is in the range [1, 10^4].
// -2^31 <= Node.val <= 2^31 - 1

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
 * @return {boolean}
 */

// Notice --------------------------------------------------------
// 1. 不可有一樣的數字

// 1. ------------------------------------------------------------
// Runtime: 74.92% / 77 ms
// Memory: 62.34% / 46.3 MB
const isValidBST = (root) => {
  const check = (node, min, max) => {
    if (node === null) return true

    return (
      node.val < max &&
      node.val > min &&
      check(node.left, min, node.val) &&
      check(node.right, node.val, max)
    )
  }

  return check(root, -Infinity, Infinity)
}
