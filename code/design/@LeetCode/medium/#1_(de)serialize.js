// Serialization is the process of converting a data structure or object into a sequence of bits
// so that it can be stored in a file or memory buffer, or transmitted across a network connection
// link to be reconstructed later in the same or another computer environment.

// Design an algorithm to serialize and deserialize a binary tree. There is no restriction on how
// your serialization/deserialization algorithm should work. You just need to ensure that a
// binary tree can be serialized to a string and this string can be deserialized to the
// original tree structure.

// Clarification: The input/output format is the same as how LeetCode serializes a binary tree.
// You do not necessarily need to follow this format, so please be creative and come up with
// different approaches yourself.

// Example 1:
// Input: root = [1,2,3,null,null,4,5]
// Output: [1,2,3,null,null,4,5]

// Example 2:
// Input: root = []
// Output: []

// Constraints:
// The number of nodes in the tree is in the range [0, 10^4].
// -1000 <= Node.val <= 1000

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

// Notice --------------------------------------------------------
// 1. serialize 成 string 再 deserialize 回 tree
// 2. input 為 binary tree 非 BST

// 1. ------------------------------------------------------------
// fail
// 32 / 52 test cases passed.
//    Input: [1,2,3,null,null,4,5,6,7]
//   Output: [1,2,3,null,null,4,5]
// Expected: [1,2,3,null,null,4,5,6,7]
const serialize1 = (treeData) => {
  // var
  const arrData = []
  const numOfLayer = []
  let curLayer = 0

  // function
  const addToLayer = (layer) => (numOfLayer[layer] = numOfLayer[layer] + 1 || 0)
  const addToArrData = (layer, node) => {
    const idx = 2 ** layer - 1 + numOfLayer[layer]
    arrData[idx] = node.val
  }
  const DFS = (node) => {
    if (!node) {
      addToLayer(curLayer)
      return
    }

    addToLayer(curLayer)
    addToArrData(curLayer, node)

    curLayer++
    DFS(node.left)
    DFS(node.right)
    curLayer--
  }

  // run
  DFS(treeData)
  const strData = JSON.stringify(arrData)
  return strData
}

const deserialize1 = (strData) => {
  if (strData === '[]') return null
  // var
  const arrData = JSON.parse(strData)
  const nodeDatas = arrData.map((v) => (v ? new TreeNode(v) : null))

  // run
  for (let i = 0; i < nodeDatas.length; i++) {
    const node = nodeDatas[i]

    if (!node) continue

    node.left = nodeDatas[i * 2 + 1] || null
    node.right = nodeDatas[i * 2 + 2] || null
  }

  return nodeDatas[0]
}

// 2. ------------------------------------------------------------
// Runtime: 83.35% / 123 ms
// Memory Usage: 11.77% / 54.9 MB
const serialize2 = (treeData) => {
  // var
  const layerData = []
  let curLayer = 0

  // function
  const addToLayer = (layer, val) => {
    if (layerData[layer]) layerData[layer].push(val)
    else layerData[layer] = [val]
  }
  const DFS = (node) => {
    if (!node) {
      addToLayer(curLayer, null)
      return
    }

    addToLayer(curLayer, node.val)

    curLayer++
    DFS(node.left)
    DFS(node.right)
    curLayer--
  }

  // run
  DFS(treeData)
  const arrData = layerData.reduce((t, v) => t.concat(v), [])
  const strData = JSON.stringify(arrData)

  return strData
}

const deserialize2 = (strData) => {
  // exception
  if (strData === '[]') return null

  // var
  const arrData = JSON.parse(strData)
  const nodeDatas = arrData.map((v) => (v !== null ? new TreeNode(v) : null))
  let idxE = 0
  let count = 0

  // run
  for (let i = 0; i < nodeDatas.length; i++) {
    const node = nodeDatas[i]

    if (!node) continue
    if (i > idxE) {
      idxE = idxE + count * 2
      count = 0
    }

    const x = idxE + count * 2

    node.left = nodeDatas[x + 1] ?? null
    node.right = nodeDatas[x + 2] ?? null

    count++
  }

  return nodeDatas[0]
}
