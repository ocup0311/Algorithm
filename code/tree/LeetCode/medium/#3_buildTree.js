// Given two integer arrays preorder and inorder where preorder is the preorder traversal of a
// binary tree and inorder is the inorder traversal of the same tree, construct and return the binary tree.

// Example 1:
// Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
// Output: [3,9,20,null,null,15,7]

// Example 2:
// Input: preorder = [-1], inorder = [-1]
// Output: [-1]

// Constraints:
// 1 <= preorder.length <= 3000
// inorder.length == preorder.length
// -3000 <= preorder[i], inorder[i] <= 3000
// preorder and inorder consist of unique values.
// Each value of inorder also appears in preorder.
// preorder is guaranteed to be the preorder traversal of the tree.
// inorder is guaranteed to be the inorder traversal of the tree.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */

// Notice --------------------------------------------------------

// 1. ------------------------------------------------------------
// Runtime: 16.16% / 225 ms
// Memory Usage: 20.31% / 136.1 MB
const buildTree = (preorder, inorder) => {
  if (preorder.length === 0) return null

  const val = preorder[0]
  const node = new TreeNode(val)
  const idxM = inorder.indexOf(val)
  const inorderL = inorder.slice(0, idxM)
  const inorderR = inorder.slice(idxM + 1)
  const preorderL = preorder.slice(1, inorderL.length + 1)
  const preorderR = preorder.slice(inorderL.length + 1)

  node.left = buildTree(preorderL, inorderL)
  node.right = buildTree(preorderR, inorderR)

  return node
}
