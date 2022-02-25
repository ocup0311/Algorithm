import * as U from '$util'
import Node from './Node.js'
import traverseMethod from './traverseMethod.js'

// function
const makeReturn = ({ node, message = 'not a node' }) => {
  return node ? node.item : console.log(message) ?? null
}

const getKey = (node) => node.key

// main
class BinarySearchTree {
  constructor() {
    this.root = null
  }

  findNodeByCondition({ key, condition }) {
    let currentNode = this.root
    let previousNode = null
    let currentKey = null

    while (!condition({ currentNode, currentKey })) {
      if (currentNode === null) {
        previousNode = null
        break
      }

      currentKey = getKey(currentNode)
      previousNode = currentNode

      if (key < currentKey) currentNode = currentNode.left
      else currentNode = currentNode.right
    }

    return { previousNode, currentKey }
  }

  insert(item) {
    const newNode = new Node(item)
    const key = getKey(newNode)

    const { previousNode, currentKey } = this.findNodeByCondition({
      key,
      condition: ({ currentNode }) => currentNode === null,
    })

    if (this.root === null) this.root = newNode
    else if (key < currentKey) previousNode.left = newNode
    else previousNode.right = newNode

    return console.log(`#${key} Node inserted.`)
  }

  search(key) {
    const { previousNode } = this.findNodeByCondition({
      key,
      condition: ({ currentKey }) => currentKey === key,
    })

    return makeReturn({
      node: previousNode,
      message: `There's no #${key} node in the tree.`,
    })
  }

  printAll(method = 'bft') {
    const callBack = (currentNode) => console.log(currentNode.item)

    U.getObjValue(traverseMethod, method)(this.root, callBack)
  }
}

export default BinarySearchTree
