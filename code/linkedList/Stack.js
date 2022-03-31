import { Node_D as Node } from './Node.js'

// function
// O(n)
const traverse = function (indexTo, cb) {
  if (this.isEmpty()) return

  let currentNode = this.head
  for (let i = 0; i <= indexTo; i++) {
    cb(currentNode)
    currentNode = currentNode.next
  }
}

// O(n)
const traverseAll = function (cb) {
  traverse.bind(this)(this.length - 1, cb)
}

// main
class Stack {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  isEmpty() {
    if (!this.head) {
      console.log("It's EMPTY!")
      return true
    }

    return false
  }

  // O(1)
  push(value) {
    const newNode = new Node(value)

    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      const lastNode = this.tail
      lastNode.next = newNode
      this.tail = newNode
      this.tail.prev = lastNode
    }

    this.length++

    return this.length
  }

  // O(1)
  pop() {
    // exception
    if (this.isEmpty()) return null

    // run
    const popNode = this.tail
    this.tail = popNode.prev
    popNode.prev = null
    this.length--

    if (this.length === 0) this.head = null
    else this.tail.next = null

    return popNode.value
  }

  // O(n)
  getList() {
    const list = []

    const cb = (currentNode) => list.push(currentNode)

    traverseAll.bind(this)(cb)

    return list
  }

  // O(n)
  getArr() {
    const arr = []

    const cb = (currentNode) => arr.push(currentNode.value)

    traverseAll.bind(this)(cb)

    return arr
  }

  // O(n)
  printAll() {
    const cb = (currentNode) => console.log(currentNode.value)

    traverseAll.bind(this)(cb)
  }
}

export default Stack
