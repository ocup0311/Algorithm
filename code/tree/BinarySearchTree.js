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

  traverseAll(method = 'bft', callBack) {
    U.getObjValue(traverseMethod, method)(this.root, callBack)
  }

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
    return makeReturn({
      node: this.findNodeFrom(node, key),
      message: `There's no #${key} node in the tree from "${getKey(node)}".`,
    })
  }

  search(key) {
    return makeReturn({
      node: this.findNode(key),
      message: `There's no #${key} node in the tree.`,
    })
  }

  getListArrBy(method) {
    const list = []

    const callBack = (currentNode) => list.push(currentNode)

    this.traverseAll(method, callBack)

    return list
  }

  getItemArrBy(method) {
    const arr = []

    const callBack = (currentNode) => arr.push(currentNode.item)

    this.traverseAll(method, callBack)

    return arr
  }

  printAllBy(method) {
    const callBack = (currentNode) => console.log(currentNode.item)

    this.traverseAll(method, callBack)
  }
}

export default BinarySearchTree
