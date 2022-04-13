import { Node_D as Node } from './Node.js'

class Queue {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  // O(n)
  #traverse(indexTo, cb) {
    if (this.isEmpty()) return

    let currentNode = this.head
    for (let i = 0; i <= indexTo; i++) {
      cb(currentNode)
      currentNode = currentNode.next
    }
  }

  // O(n)
  #traverseAll(cb) {
    this.#traverse(this.length - 1, cb)
  }

  isEmpty() {
    if (!this.head) {
      console.log("It's EMPTY!")
      return true
    }

    return false
  }

  // O(1)
  enqueue(value) {
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
  dequeue() {
    // exception
    if (this.isEmpty()) return null

    // run
    const removedNode = this.head
    this.head = this.head.next
    removedNode.next = null
    this.length--
    if (!this.isEmpty()) this.head.prev = null

    return removedNode.value
  }

  // O(n)
  getList() {
    const list = []

    const cb = (currentNode) => list.push(currentNode)

    this.#traverseAll(cb)

    return list
  }

  // O(n)
  getArr() {
    const arr = []

    const cb = (currentNode) => arr.push(currentNode.value)

    this.#traverseAll(cb)

    return arr
  }

  // O(n)
  printAll() {
    const cb = (currentNode) => console.log(currentNode.value)

    this.#traverseAll(cb)
  }
}

export default Queue
