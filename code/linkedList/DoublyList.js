import { Node_D as Node } from './Node.js'

// main
class DoublyList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  isEmpty() {
    if (!this.head) return true
    return false
  }

  // O(n/2)
  findNodeFromHead(index) {
    let currentNode = this.head
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next
    }
    return currentNode
  }

  // O(n/2)
  findNodeFromTail(index) {
    let currentNode = this.tail
    for (let i = this.length - 1; i > index; i--) {
      currentNode = currentNode.prev
    }
    return currentNode
  }

  // O(n/2)
  findNode(index) {
    if (index < this.length / 2) return this.findNodeFromHead(index)
    else return this.findNodeFromTail(index)
  }

  // O(1)
  findLastNode() {
    return this.tail
  }

  // O(n/2)
  traverseFromHead(indexTo, cb) {
    if (this.isEmpty()) {
      console.log('This is an empty list.')
      return
    }

    let currentNode = this.head
    for (let i = 0; i <= indexTo; i++) {
      cb(currentNode)
      currentNode = currentNode.next
    }
  }

  // O(n/2)
  traverseFromTail(indexTo, cb) {
    if (!this.tail) {
      console.log('This is an empty list.')
      return
    }

    let currentNode = this.tail
    for (let i = this.length - 1; i >= indexTo; i++) {
      cb(currentNode)
      currentNode = currentNode.prev
    }
  }

  // O(n)
  traverseAll(cb) {
    this.traverseFromHead(this.length - 1, cb)
  }

  // O(n/2)
  inserAt(index, value) {
    // exception
    if (index > this.length) {
      console.log("Can't skip the empty index.")
      return this.length
    }

    // run
    const newNode = new Node(value)

    if (index === 0) {
      if (this.head) this.head.prev = null
      newNode.next = this.head
      this.head = newNode
    } else {
      const preNode = this.findNode(index - 1)
      if (preNode.next) preNode.next.prev = newNode
      newNode.prev = preNode
      newNode.next = preNode.next
      preNode.next = newNode
    }

    if (index === this.length) {
      if (this.tail) this.tail.next = newNode
      newNode.prev = this.tail
      this.tail = newNode
    }

    this.length++

    return this.length
  }

  // O(n/2)
  removeAt(index) {
    // exception
    if (this.isEmpty()) {
      console.log('This is an empty list.')
      return null
    }
    if (index > this.length - 1) {
      console.log("Can't remove the empty index.")
      return null
    }

    // run
    const removedNode = this.findNode(index)

    if (removedNode.next) removedNode.next.prev = removedNode.prev
    if (removedNode.prev) removedNode.prev.next = removedNode.next

    if (removedNode === this.head) {
      this.head = removedNode.next
      if (this.head) this.head.prev = null
    }
    if (removedNode === this.tail) {
      this.tail = removedNode.prev
      if (this.tail) this.tail.next = null
    }

    removedNode.next = null
    removedNode.prev = null

    this.length--

    return removedNode.value
  }

  // O(n)
  push(value) {
    return this.inserAt(this.length, value)
  }

  // O(n)
  pop() {
    return this.removeAt(this.length - 1)
  }

  // O(1)
  unshift(value) {
    return this.inserAt(0, value)
  }

  // O(1)
  shift() {
    return this.removeAt(0)
  }

  // O(1)
  pushList(list) {
    if (this.isEmpty()) {
      this.head = list.head
    } else {
      list.head.prev = this.tail
      this.tail.next = list.head
    }

    this.tail = list.tail
    this.length = this.length + list.length

    return this.length
  }

  // O(n)
  pushArr(arr) {
    // var
    let startIndex = 0

    // exception
    if (!this.tail) {
      const newNode = new Node(arr[0])
      this.head = newNode
      this.tail = newNode
      startIndex++
    }

    // run
    for (let i = startIndex; i < arr.length; i++) {
      const newNode = new Node(arr[i])
      newNode.prev = this.tail
      this.tail.next = newNode
      this.tail = newNode
    }

    this.length = this.length + arr.length

    return this.length
  }

  // O(n)
  getValue(index) {
    return this.findNode(index)?.value
  }

  // O(n)
  getList() {
    const list = []

    const cb = (currentNode) => list.push(currentNode)

    this.traverseAll(cb)

    return list
  }

  // O(n)
  getArr() {
    const arr = []

    const cb = (currentNode) => arr.push(currentNode.value)

    this.traverseAll(cb)

    return arr
  }

  // O(n)
  printAll() {
    const cb = (currentNode) => console.log(currentNode.value)

    this.traverseAll(cb)
  }
}

export default DoublyList
