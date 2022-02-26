// 抽象化 findNodeByCondition，是好不好？ (commit 942258b)
import { Node_list as Node, buildReturn, getKey } from './Node.js'
import BinaryTree from './BinaryTree.js'

// main
class BinarySearchTree extends BinaryTree {
  findNodeFrom(node, key) {
    let currentNode = node
    let currentKey = getKey(currentNode)

    while (currentNode !== null && key !== currentKey) {
      if (key < currentKey) currentNode = currentNode.left
      else currentNode = currentNode.right

      currentKey = getKey(currentNode)
    }

    return currentNode
  }

  findNode(key) {
    return this.findNodeFrom(this.root, key)
  }

  insert(item) {
    const newNode = new Node(item)
    const key = getKey(newNode)
    let currentNode = this.root
    let resultNode = null
    let resultKey = null

    while (currentNode !== null) {
      resultNode = currentNode
      resultKey = getKey(currentNode)

      if (key < resultKey) currentNode = currentNode.left
      else currentNode = currentNode.right
    }

    if (this.root === null) this.root = newNode
    else if (key < resultKey) resultNode.left = newNode
    else resultNode.right = newNode

    console.log(`#${key} Node inserted.`)
    return newNode
  }

  searchFrom(node, key) {
    return buildReturn({
      node: this.findNodeFrom(node, key),
      message: `There's no #${key} node in the tree from "${getKey(node)}".`,
    })
  }

  search(key) {
    return buildReturn({
      node: this.findNode(key),
      message: `There's no #${key} node in the tree.`,
    })
  }
}

export default BinarySearchTree
