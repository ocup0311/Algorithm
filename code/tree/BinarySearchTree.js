// 抽象化 findNodeByCondition，是好不好？ (commit 942258b)
import * as U from '$util'
import Node from './Node.js'
import traverseMethod from './traverseMethod.js'

// function
const makeReturn = ({ node, message = 'not a node' }) =>
  node?.item || (console.log(message) ?? null)

const getKey = (node) => node?.key

// main
class BinarySearchTree {
  constructor() {
    this.root = null
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

    return console.log(`#${key} Node inserted.`)
  }

  search(key) {
    let currentNode = this.root
    let currentKey = getKey(currentNode)

    while (currentNode !== null && key !== currentKey) {
      if (key < currentKey) currentNode = currentNode.left
      else currentNode = currentNode.right

      currentKey = getKey(currentNode)
    }

    return makeReturn({
      node: currentNode,
      message: `There's no #${key} node in the tree.`,
    })
  }

  printAll(method = 'bft') {
    const callBack = (currentNode) => console.log(currentNode.item)

    U.getObjValue(traverseMethod, method)(this.root, callBack)
  }
}

export default BinarySearchTree
