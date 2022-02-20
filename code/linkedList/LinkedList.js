class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this.length = 0
  }

  findNode(index) {
    let currentNode = this.head

    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next
    }

    return currentNode
  }

  findLastNode() {
    return this.findNode(this.length - 1)
  }

  traverse(indexOfEnd, callBack) {
    if (this.head === null) {
      console.log('This is an empty list.')
      return
    }

    let currentNode = this.head
    for (let i = 0; i <= indexOfEnd; i++) {
      callBack(currentNode)
      currentNode = currentNode.next
    }
  }

  traverseAll(callBack) {
    this.traverse(this.length - 1, callBack)
  }

  push(value) {
    const newNode = new Node(value)

    if (this.head === null) {
      this.head = newNode
    } else {
      const lastNode = this.findLastNode()
      lastNode.next = newNode
    }

    this.length++

    return this.length
  }

  pop() {
    // exception
    if (this.head === null) {
      console.log('This is an empty list.')
      return
    }

    // run
    const last2Node = this.findNode(this.length - 2)
    const popNode = last2Node.next
    last2Node.next = null

    this.length--

    return popNode.value
  }

  shift(value) {
    const newNode = new Node(value)

    if (this.head !== null) newNode.next = this.head

    this.head = newNode
    this.length++

    return this.length
  }

  unshift() {
    // exception
    if (this.head === null) {
      console.log('This is an empty list.')
      return
    }

    // run
    const unshiftNode = this.head
    this.head = unshiftNode.next
    unshiftNode.next = null

    this.length--

    return unshiftNode.value
  }

  inserAt(index, value) {
    const newNode = new Node(value)

    if (this.head === null) {
      this.head = newNode
    } else {
      const preNode = this.findNode(index - 1)
      newNode.next = preNode.next
      preNode.next = newNode
    }

    this.length++

    return this.length
  }

  removeAt(index) {
    // exception
    if (this.head === null) {
      console.log('This is an empty list.')
      return
    }

    // run
    const preNode = this.findNode(index - 1)
    const removedNode = preNode.next
    preNode.next = removedNode.next
    removedNode.next = null

    this.length--

    return removedNode.value
  }

  getValue(index) {
    return this.findNode(index).value
  }

  printAll() {
    // function
    const callBack = (currentNode) => console.log(currentNode.value)

    this.traverseAll(callBack)
  }
}

export default LinkedList
