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
    if (this.root === null) this.root = newNode
    else {
      let currentNode = this.root
      let previousNode = null
      let x = 0

      while (currentNode !== null) {
        previousNode = currentNode
        const currentKey = getKey(currentNode)

        if (key < currentKey) {
          currentNode = currentNode.left
          x = 0
        } else {
          currentNode = currentNode.right
          x = 1
        }
      }

      if (x) previousNode.right = newNode
      else previousNode.left = newNode
    }

    return console.log(`${key} Node inserted.`)
  }
}

export default BinarySearchTree

const bst = new BinarySearchTree()
console.log(bst)
bst.insert({ key: 8, value: 123 })
bst.insert({ key: 765, value: 456 })
bst.insert({ key: 5, value: 65 })
bst.insert({ key: 18, value: 123 })
bst.insert({ key: 9, value: 123 })

console.log(bst)
