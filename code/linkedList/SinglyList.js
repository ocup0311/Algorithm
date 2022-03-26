import Node from './Node.js'

class SinglyList {
  constructor() {
    this.head = null
    this.length = 0
  }

  // O(n)
  findNode(index) {
    let currentNode = this.head

    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next
    }

    return currentNode
  }

  // O(n)
  findLastNode() {
    return this.findNode(this.length - 1)
  }

  // O(n)
  traverse(indexTo, cb) {
    if (!this.head) {
      console.log('This is an empty list.')
      return
    }

    let currentNode = this.head
    for (let i = 0; i <= indexTo; i++) {
      cb(currentNode)
      currentNode = currentNode.next
    }
  }

  // O(n)
  traverseAll(cb) {
    this.traverse(this.length - 1, cb)
  }

  // O(n)
  inserAt(index, value) {
    // exception
    if (index > this.length) {
      console.log("Can't skip the empty index.")
      return this.length
    }

    // run
    const newNode = new Node(value)

    if (!this.head) {
      this.head = newNode
    } else if (index === 0) {
      newNode.next = this.head
      this.head = newNode
    } else if (index === this.length) {
      const lastNode = this.findLastNode()
      lastNode.next = newNode
    } else {
      const preNode = this.findNode(index - 1)
      newNode.next = preNode.next
      preNode.next = newNode
    }

    this.length++

    return this.length
  }

  // O(n)
  removeAt(index) {
    // exception
    if (!this.head) {
      console.log('This is an empty list.')
      return null
    }
    if (index > this.length) {
      console.log("Can't remove the empty index.")
      return null
    }

    // run
    let removedNode = null
    if (index === this.length - 1) {
      const last2Node = this.findNode(this.length - 2)
      removedNode = last2Node.next
      last2Node.next = null
    } else if (index === 0) {
      removedNode = this.head
      this.head = this.head.next
    } else {
      const preNode = this.findNode(index - 1)
      removedNode = preNode.next
      preNode.next = removedNode.next
    }

    removedNode.next = null
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

  // O(n)
  pushList(list) {
    if (!this.head) {
      this.head = list.head
    } else {
      const lastNode = this.findLastNode()
      lastNode.next = list.head
    }

    this.length = this.length + list.length

    return this.length
  }

  // O(n)
  pushArr(arr) {
    // var
    let startIndex = 0
    let lastNode = this.findLastNode()

    // exception
    if (!lastNode) {
      const newNode = new Node(arr[0])
      this.head = newNode
      lastNode = newNode
      startIndex++
    }

    // run
    for (let i = startIndex; i < arr.length; i++) {
      const newNode = new Node(arr[i])
      lastNode.next = newNode
      lastNode = newNode
    }

    this.length = this.length + arr.length

    return this.length
  }

  // O(n)
  getValue(index) {
    return this.findNode(index).value
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

export default SinglyList
