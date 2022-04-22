// Given the root of a binary tree, check whether it is a mirror of itself
// (i.e., symmetric around its center).

// Example 1:
// Input: root = [1,2,2,3,4,4,3]
// Output: true

// Example 2:
// Input: root = [1,2,2,null,3,null,3]
// Output: false

// Constraints:
// The number of nodes in the tree is in the range [1, 1000].
// -100 <= Node.val <= 100

// Follow up: Could you solve it both recursively and iteratively?

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

// 1. ------------------------------------------------------------
// Runtime: 79.73% / 74 ms
// Memory: 65.12% / 44.6 MB
const isSymmetric1 = (root) => {
  const check = (leftTree, rightTree) => {
    if (!leftTree && !rightTree) return true
    if (!leftTree !== !rightTree) return false

    if (leftTree.val !== rightTree.val) return false

    const outterTree = check(leftTree.left, rightTree.right)
    const innerTree = check(leftTree.right, rightTree.left)

    return outterTree && innerTree
  }

  return check(root, root)
}

// 2. ------------------------------------------------------------
// Runtime: 85.11% / 72 ms
// Memory: 5.68% / 45.5 MB
const isSymmetric = (root) => {
  const queue = [[root, root]]
  let result = true

  while (queue.length > 0) {
    const [leftTree, rightTree] = queue.pop()

    if (!leftTree && !rightTree) {
      result = true
      continue
    }
    if (!leftTree !== !rightTree) {
      result = false
      break
    }
    if (leftTree.val !== rightTree.val) {
      result = false
      break
    }

    queue.push([leftTree.left, rightTree.right])
    queue.push([leftTree.right, rightTree.left])
  }

  return result
}
