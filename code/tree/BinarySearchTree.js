import * as U from '$util'
import Node from './Node.js'
import traverseMethod from './traverseMethod.js'

// function
const makeReturn = (Node, message = 'not a node') => {
  return Node ? Node.item : console.log(message) ?? null
}
const getKey = (Node) => Node.key

// main
class BinarySearchTree {
  constructor() {
    this.root = null
  }

  insert(item) {
    const newNode = new Node(item)
    const key = getKey(newNode)
    let currentNode = this.root
    let previousNode = null
    let currentKey = null

    while (currentNode !== null) {
      previousNode = currentNode
      currentKey = getKey(currentNode)

      if (key < currentKey) currentNode = currentNode.left
      else currentNode = currentNode.right
    }

    if (this.root === null) this.root = newNode
    else if (key < currentKey) previousNode.left = newNode
    else previousNode.right = newNode

    return console.log(`#${key} Node inserted.`)
  }

  search(key) {
    let currentNode = this.root
    let previousNode = null
    let currentKey = null

    while (key !== currentKey) {
      if (currentNode === null) {
        previousNode = null
        break
      }

      previousNode = currentNode
      currentKey = getKey(currentNode)

      if (key < currentKey) currentNode = currentNode.left
      else currentNode = currentNode.right
    }

    return makeReturn(previousNode, `There's no #${key} node in the tree.`)
  }

  printAll(method = 'bft') {
    const callBack = (currentNode) => console.log(currentNode.item)

    U.getObjValue(traverseMethod, method)(this.root, callBack)
  }
}

export default BinarySearchTree
