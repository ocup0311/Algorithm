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
    let resultNode = null
    let resultKey = null

    while (!condition({ currentNode, resultKey })) {
      if (currentNode === null) {
        resultNode = null
        break
      }

      resultKey = getKey(currentNode)
      resultNode = currentNode

      if (key < resultKey) currentNode = currentNode.left
      else currentNode = currentNode.right
    }

    return { resultNode, resultKey }
  }

  insert(item) {
    const newNode = new Node(item)
    const key = getKey(newNode)

    const { resultNode, resultKey } = this.findNodeByCondition({
      key,
      condition: ({ currentNode }) => currentNode === null,
    })

    if (this.root === null) this.root = newNode
    else if (key < resultKey) resultNode.left = newNode
    else resultNode.right = newNode

    return console.log(`#${key} Node inserted.`)
  }

  search(key) {
    const { resultNode } = this.findNodeByCondition({
      key,
      condition: ({ resultKey }) => resultKey === key,
    })

    return makeReturn({
      node: resultNode,
      message: `There's no #${key} node in the tree.`,
    })
  }

  printAll(method = 'bft') {
    const callBack = (currentNode) => console.log(currentNode.item)

    U.getObjValue(traverseMethod, method)(this.root, callBack)
  }
}

export default BinarySearchTree
