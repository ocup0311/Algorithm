import Node from './Node.js'

class DoublyList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
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
  traverseFromHead(indexOfEnd, callBack) {
    if (!this.head) {
      console.log('This is an empty list.')
      return
    }

    let currentNode = this.head
    for (let i = 0; i <= indexOfEnd; i++) {
      callBack(currentNode)
      currentNode = currentNode.next
    }
  }

  // O(n/2)
  traverseFromTail(indexOfEnd, callBack) {
    if (!this.tail) {
      console.log('This is an empty list.')
      return
    }

    let currentNode = this.tail
    for (let i = this.length - 1; i >= indexOfEnd; i++) {
      callBack(currentNode)
      currentNode = currentNode.prev
    }
  }

  // O(n)
  traverseAll(callBack) {
    this.traverseFromHead(this.length - 1, callBack)
  }

  // O(n/2)
  inserAtFromHead(index, value) {
    const newNode = new Node(value)

    if (index === 0) {
      newNode.next = this.head
      this.head = newNode
    } else {
      const preNode = this.findNode(index - 1)
      preNode.next.prev = newNode
      newNode.prev = preNode
      newNode.next = preNode.next
      preNode.next = newNode
    }
    this.length++

    return this.length
  }

  // O(n/2)
  inserAtFromTail(index, value) {
    // exception
    if (index > this.length) {
      console.log("Can't skip the empty index.")
      return this.length
    }

    // run
    const newNode = new Node(value)

    if (!this.tail) {
      this.head = newNode
      this.tail = newNode
    } else if (index === this.length) {
      this.tail.next = newNode
      newNode.prev = this.tail
      this.tail = newNode
    } else {
      const preNode = this.findNode(index - 1)
      preNode.next.prev = newNode
      newNode.prev = preNode
      newNode.next = preNode.next
      preNode.next = newNode
    }

    this.length++

    return this.length
  }

  // O(n/2)
  inserAt(index, value) {
    if (index < this.length / 2) return this.inserAtFromHead(index, value)
    else return this.inserAtFromTail(index, value)
  }

  // O(n/2)
  removeAtFromHead(index) {
    let removedNode = null

    if (index === 0) {
      removedNode = this.head
      this.head = this.head.next
      this.head.prev = null
    } else {
      const preNode = this.findNode(index - 1)
      removedNode = preNode.next
      preNode.next = removedNode.next
    }

    removedNode.next = null
    this.length--

    return removedNode.value
  }

  // O(n/2)
  removeAtFromTail(index) {
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
    if (this.length === 1) {
      this.head = null
      this.tail = null
    } else if (index === this.length - 1) {
      this.tail.next = null
      removedNode = this.tail
      this.tail = this.tail.prev
    } else {
      const preNode = this.findNode(index - 1)
      removedNode = preNode.next
      preNode.next = removedNode.next
    }

    removedNode.next = null
    removedNode.prev = null
    this.length--

    return removedNode.value
  }

  // O(n/2)
  removeAt(index) {
    if (index < this.length / 2) return this.removeAtFromHead(index)
    else return this.removeAtFromTail(index)
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
  shift(value) {
    return this.inserAt(0, value)
  }

  // O(1)
  unshift() {
    return this.removeAt(0)
  }

  // O(1)
  pushList(list) {
    if (!this.head) {
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
    return this.findNode(index).value
  }

  // O(n)
  getList() {
    const list = []

    const callBack = (currentNode) => list.push(currentNode)

    this.traverseAll(callBack)

    return list
  }

  // O(n)
  getArr() {
    const arr = []

    const callBack = (currentNode) => arr.push(currentNode.value)

    this.traverseAll(callBack)

    return arr
  }

  // O(n)
  printAll() {
    const callBack = (currentNode) => console.log(currentNode.value)

    this.traverseAll(callBack)
  }
}

export default DoublyList
