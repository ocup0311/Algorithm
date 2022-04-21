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
// 1. 跟自己從頭寫不同，在他的條件下，達到目的 (此 code 並非完整的，需再加上他已有的部分)
// 2. 題目直接取得要刪除的 node
// 3. 可能得注意這樣的寫法，現實中有不好的影響，例如此題中 [A,B,C] del(B) 就無法 del(C) 了

// 1. ------------------------------------------------------------
// Runtime: 72.09% / 77 ms
// Memory: 67.53% / 45 MB
const maxDepth = (root) => {
  let max = 0
  let tmp = 0

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

  dfs(root)

  return max
}
