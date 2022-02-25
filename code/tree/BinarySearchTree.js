import Node from './Node.js'

// function
const makeReturn = (Node) => Node.item
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

    return console.log(`${key} Node inserted.`)
  }
}

export default BinarySearchTree
