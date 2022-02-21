// TODO
// const exception = ({ info, err }) => {
//   if (info) console.log(info)
//   if (err) console.error(err)
//   return
// }

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

  traverseAll(callBack) {
    this.traverse(this.length - 1, callBack)
  }

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
    } else {
      const preNode = this.findNode(index - 1)
      removedNode = preNode.next
      preNode.next = removedNode.next
      removedNode.next = null
    }

    this.length--

    return removedNode.value
  }

  push(value) {
    return this.inserAt(this.length, value)
  }

  pop() {
    return this.removeAt(this.length - 1)
  }

  shift(value) {
    const newNode = new Node(value)

    if (this.head) newNode.next = this.head

    this.head = newNode
    this.length++

    return this.length
  }

  unshift() {
    // exception
    if (!this.head) {
      console.log("Can't unshift an empty list.")
      return
    }

    // run
    const unshiftNode = this.head
    this.head = unshiftNode.next
    unshiftNode.next = null

    this.length--

    return unshiftNode.value
  }

  getValue(index) {
    return this.findNode(index).value
  }

  getList() {
    const list = []

    const callBack = (currentNode) => list.push(currentNode)

    this.traverseAll(callBack)

    return list
  }

  getListArr() {
    const listArr = []

    const callBack = (currentNode) => listArr.push(currentNode.value)

    this.traverseAll(callBack)

    return listArr
  }

  printAll() {
    const callBack = (currentNode) => console.log(currentNode.value)

    this.traverseAll(callBack)
  }
}

export default LinkedList
