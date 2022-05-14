// You are given a perfect binary tree where all leaves are on the same level, and every
// parent has two children. The binary tree has the following definition:

// struct Node {
//   int val;
//   Node *left;
//   Node *right;
//   Node *next;
// }
// Populate each next pointer to point to its next right node. If there is no next right node,
// the next pointer should be set to NULL.

// Initially, all next pointers are set to NULL.

// Example 1:
// Input: root = [1,2,3,4,5,6,7]
// Output: [1,#,2,3,#,4,5,6,7,#]
// Explanation: Given the above perfect binary tree (Figure A), your function should populate
// each next pointer to point to its next right node, just like in Figure B. The serialized
// output is in level order as connected by the next pointers, with '#' signifying the end of each level.

// Example 2:
// Input: root = []
// Output: []

// Constraints:
// The number of nodes in the tree is in the range [0, 2^12 - 1].
// -1000 <= Node.val <= 1000

// Follow-up:
// You may only use constant extra space.
// The recursive approach is fine. You may assume implicit stack space does not count as
// extra space for this problem.

/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */

// Notice --------------------------------------------------------
// 1. 是 perfect binary tree，所以可以再試試更 tricky 的做法。

// 1. ------------------------------------------------------------
// Runtime: 10.02% / 144 ms
// Memory Usage: 0% / 50.2 MB
const connect1 = (root) => {
  if (!root?.left) return root

  const connectLevel = (level) => {
    level.reduceRight((nextNode, currNode) => {
      currNode.next = nextNode
      return currNode
    }, null)

    const newLevel = level.reduce((nextLevel, node) => {
      const newNodes = [node.left, node.right].filter((v) => v)
      if (newNodes[0]) return nextLevel.concat(newNodes)
      return nextLevel
    }, [])

    if (newLevel[0]) connectLevel(newLevel)
  }

  connectLevel([root])

  return root
}

// 2. ------------------------------------------------------------
// Runtime: 96 ms
// Memory Usage: 48.4 MB
const connect2 = (root) => {
  if (!root?.left) return root

  const connectLevel = (level) => {
    level.reduceRight((nextNode, currNode) => {
      currNode.next = nextNode
      return currNode
    }, null)

    const newLevel = level.reduce((nextLevel, node) => {
      if (node.left) nextLevel.push(node.left)
      if (node.right) nextLevel.push(node.right)

      return nextLevel
    }, [])

    if (newLevel[0]) connectLevel(newLevel)
  }

  connectLevel([root])

  return root
}

// 3. ------------------------------------------------------------
// use stack & loop
// Runtime: 94 ms
// Memory Usage: 49.6 MB
const connect3 = (root) => {
  if (!root?.left) return root

  const queue = [[root, 1]]
  const hashMap = new Map()

  while (queue.length > 0) {
    const [node, level] = queue.shift()

    if (hashMap.has(level)) hashMap.get(level).next = node
    hashMap.set(level, node)

    if (node.left) queue.push([node.left, level + 1])
    if (node.right) queue.push([node.right, level + 1])
  }

  return root
}

// 4. ------------------------------------------------------------
// use stack & loop
// change: hashMap --> one node
// Runtime: 80 ms
// Memory Usage: 49.5 MB
const connect4 = (root) => {
  if (!root?.left && !root?.right) return root

  const queue = [{ node: root, level: 1 }]
  let lastNode = { node: null, level: 0 }
  let ptr = 0

  while (queue.length > ptr) {
    const { node, level } = queue[ptr]

    if (lastNode.level === level) lastNode.node.next = node
    lastNode = { node, level }

    if (node.left) queue.push({ node: node.left, level: level + 1 })
    if (node.right) queue.push({ node: node.right, level: level + 1 })

    ptr++
  }

  return root
}

// 5. ------------------------------------------------------------
// perfect binary tree --> just need to check root?.left
const connect5 = (root) => {
  if (!root?.left) return root

  const queue = [{ node: root, level: 1 }]
  let lastNode = { node: null, level: 0 }
  let ptr = 0

  while (queue.length > ptr) {
    const { node, level } = queue[ptr]

    if (lastNode.level === level) lastNode.node.next = node
    lastNode = { node, level }

    if (node.left) queue.push({ node: node.left, level: level + 1 })
    if (node.right) queue.push({ node: node.right, level: level + 1 })

    ptr++
  }

  return root
}

// 6. ------------------------------------------------------------
// Runtime: 84 ms
// Memory Usage: 48.5 MB
const connect6 = (root) => {
  if (!root?.left) return root

  const queue = [root]

  while (queue.length > 0) {
    const lenLevel = queue.length

    for (let i = 0; i < lenLevel; i++) {
      const node = queue.shift()

      if (i < lenLevel - 1) node.next = queue[0]
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
  }

  return root
}

// 7. ------------------------------------------------------------
// DFS 只能用 preorder，才能提早 set root.next
// Runtime: 87 ms
// Memory Usage: 47.5 MB
const connect7 = (root) => {
  if (!root?.left) return root

  const left = root.left
  const right = root.right

  left.next = right
  right.next = root.next?.left || null

  connect7(root.left)
  connect7(root.right)

  return root
}

// 8. ------------------------------------------------------------
// Runtime: 88 ms
// Memory Usage: 48 MB
const connect = (root) => {
  if (!root?.left) return root

  let levelHead = root

  while (levelHead.left) {
    let ptr = levelHead
    levelHead = levelHead.left

    while (ptr) {
      ptr.left.next = ptr.right
      ptr.right.next = ptr.next?.left || null

      ptr = ptr.next
    }
  }

  return root
}
