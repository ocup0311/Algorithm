// Given the root of a binary tree, return its maximum depth.

// A binary tree's maximum depth is the number of nodes along the longest path from the
// root node down to the farthest leaf node.

// Example 1:

// Input: root = [3,9,20,null,null,15,7]
// Output: 3
// Example 2:

// Input: root = [1,null,2]
// Output: 2

// Constraints:

// The number of nodes in the tree is in the range [0, 10^4].
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
 * @return {number}
 */

// Notice --------------------------------------------------------

// 1. ------------------------------------------------------------
// Runtime: 72.09% / 77 ms
// Memory: 67.53% / 45 MB
const maxDepth1 = (root) => {
  // var
  let max = 0
  let tmp = 0

  // function
  const dfs = (node) => {
    tmp++

    if (node === null) {
      tmp--
      return
    }

    dfs(node.left)
    dfs(node.right)

    if (tmp > max) max = tmp
    tmp--
  }

  // run
  dfs(root)

  return max
}

// 2. ------------------------------------------------------------
const maxDepth2 = (root) => {
  // var
  let max = 0
  let tmp = 0

  // function
  const dfs = (node) => {
    if (node === null) return

    tmp++
    dfs(node.left)
    dfs(node.right)

    if (tmp > max) max = tmp
    tmp--
  }

  // run
  dfs(root)

  return max
}

// 3. ------------------------------------------------------------
const maxDepth3 = (root) => {
  // var
  let max = 0
  let tmp = 0

  // function
  const callFn = (fn) => typeof fn === 'function' && fn()

  const dfs = (node, { preOrder, inOrder, postOrder }) => {
    if (node === null) return

    callFn(preOrder)
    dfs(node.left, { preOrder, inOrder, postOrder })
    callFn(inOrder)
    dfs(node.right, { preOrder, inOrder, postOrder })
    callFn(postOrder)
  }

  const nodeIn = () => {
    tmp++
    if (tmp > max) max = tmp
  }

  const nodeOut = () => {
    tmp--
  }

  // run
  dfs(root, { preOrder: nodeIn, postOrder: nodeOut })

  return max
}

// 4. ------------------------------------------------------------
const maxDepth4 = (root) => {
  // var
  let max = 0
  let tmp = 0

  // function
  const dfs = (node) => {
    if (node !== null) {
      tmp++
      if (tmp > max) max = tmp

      dfs(node.left)
      dfs(node.right)

      tmp--
    }
  }

  // run
  dfs(root)

  return max
}
