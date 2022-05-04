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
// 1. val 不重複

// 1. ------------------------------------------------------------
// Runtime: 16.16% / 225 ms
// Memory Usage: 20.31% / 136.1 MB
const buildTree1 = (preorder, inorder) => {
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

// 2. ------------------------------------------------------------
// 使用 pointer，避免多餘 array 的生產
// Runtime: 90.57% / 84 ms
// Memory Usage: 51.32% / 46.2 MB
const buildTree2 = (preorder, inorder) => {
  // function
  const findMiddle = (val, idxS, idxE) => {
    for (let i = idxS; i <= idxE; i++) {
      if (inorder[i] === val) return i
    }
  }

  const byPointer = ([idxPS, idxPE], [idxIS, idxIE]) => {
    if (idxPE < idxPS) return null

    const val = preorder[idxPS]
    const node = new TreeNode(val)

    if (idxPE === idxPS) return node

    const idxM = findMiddle(val, idxIS, idxIE)
    const idxIL = [idxIS, idxM - 1]
    const idxIR = [idxM + 1, idxIE]
    const idxPL = [idxPS + 1, idxPS + (idxM - idxIS)]
    const idxPR = [idxPS + (idxM - idxIS) + 1, idxPE]

    node.left = byPointer(idxPL, idxIL)
    node.right = byPointer(idxPR, idxIR)

    return node
  }

  // run
  return byPointer([0, preorder.length - 1], [0, inorder.length - 1])
}

// 3. ------------------------------------------------------------
// 調整 idxE 為不包含
// Runtime: 92 ms
// Memory Usage: 46 MB
const buildTree3 = (preorder, inorder) => {
  // function
  const findMiddle = (val, idxS, idxE) => {
    for (let i = idxS; i < idxE; i++) {
      if (inorder[i] === val) return i
    }
  }

  const byPointer = ([idxPS, idxPE], [idxIS, idxIE]) => {
    if (idxPE === idxPS) return null

    const val = preorder[idxPS]
    const node = new TreeNode(val)

    if (idxPE === idxPS + 1) return node

    const idxM = findMiddle(val, idxIS, idxIE)
    const idxIL = [idxIS, idxM]
    const idxIR = [idxM + 1, idxIE]
    const idxPL = [idxPS + 1, idxPS + (idxM - idxIS) + 1]
    const idxPR = [idxPS + (idxM - idxIS) + 1, idxPE]

    node.left = byPointer(idxPL, idxIL)
    node.right = byPointer(idxPR, idxIR)

    return node
  }

  // run
  return byPointer([0, preorder.length], [0, inorder.length])
}

// 4. ------------------------------------------------------------
// 加入 hashMap 記住 inorder
// Runtime: 92 ms
// Memory Usage: 46.7 MB
const buildTree4 = (preorder, inorder) => {
  // var
  const hashMapI = new Map(inorder.map((v, i) => [v, i]))

  // function
  const byPointer = ([idxPS, idxPE], [idxIS, idxIE]) => {
    if (idxPE === idxPS) return null

    const val = preorder[idxPS]
    const node = new TreeNode(val)

    if (idxPE === idxPS + 1) return node

    const idxM = hashMapI.get(val)
    const idxIL = [idxIS, idxM]
    const idxIR = [idxM + 1, idxIE]
    const idxPL = [idxPS + 1, idxPS + (idxM - idxIS) + 1]
    const idxPR = [idxPS + (idxM - idxIS) + 1, idxPE]

    node.left = byPointer(idxPL, idxIL)
    node.right = byPointer(idxPR, idxIR)

    return node
  }

  // run
  return byPointer([0, preorder.length], [0, inorder.length])
}

// 4. ------------------------------------------------------------
// Runtime: 95 ms
// Memory Usage: 44.8 MB
const buildTree = (preorder, inorder) => {
  // var
  const hashMapI = new Map(inorder.map((v, i) => [v, i]))
  let ptrP = 0

  // function
  const preorderDFS = (left, right) => {
    if (left > right) return null

    const val = preorder[ptrP]
    const node = new TreeNode(val)
    const idxM = hashMapI.get(val)
    ptrP++

    node.left = preorderDFS(left, idxM - 1)
    node.right = preorderDFS(idxM + 1, right)

    return node
  }

  // run
  return preorderDFS(0, preorder.length - 1)
}
