// Given the root of a binary tree, return the inorder traversal of its nodes' values.

// Example 1:
// Input: root = [1,null,2,3]
// Output: [1,3,2]

// Example 2:
// Input: root = []
// Output: []

// Example 3:
// Input: root = [1]
// Output: [1]

// Constraints:
// The number of nodes in the tree is in the range [0, 100].
// -100 <= Node.val <= 100

// Follow up: Recursive solution is trivial, could you do it iteratively?

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
 * @return {number[]}
 */

// Notice --------------------------------------------------------
// 1. 試著用 loop

// 1. ------------------------------------------------------------
// Runtime: 90.50% / 60 ms
// Memory Usage: 63.09% / 42.1 MB
const inorderTraversal1 = (root) => {
  // var
  const result = []

  // function
  const makeResult = (node) => {
    if (node === null) return

    makeResult(node.left)
    result.push(node.val)
    makeResult(node.right)
  }

  // run
  makeResult(root)

  return result
}

// 2. ------------------------------------------------------------
// use loop
// Runtime: 66 ms
// Memory Usage: 42.1 MB
const inorderTraversal2 = (root) => {
  // var
  const result = []
  const stack = [[root, false]]

  // run
  while (stack.length > 0) {
    const [curNode, isOutput] = stack.pop()

    if (curNode === null) continue
    if (isOutput) {
      result.push(curNode.val)
      continue
    }

    stack.push([curNode.right, false])
    stack.push([curNode, true])
    stack.push([curNode.left, false])
  }

  return result
}
