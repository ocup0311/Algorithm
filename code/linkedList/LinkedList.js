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

  push(value) {
    if (this.head === null) {
      this.head = new Node(value)
    } else {
      let currentNode = this.head
      while (currentNode.next !== null) {
        currentNode = currentNode.next
      }
      currentNode.next = new Node(value)
    }

    this.length++
  }

  printAll() {
    // exception
    if (this.head === null) console.log('This is an empty list.')

    // run
    let currentNode = this.head
    while (currentNode !== null) {
      console.log(currentNode.value)
      currentNode = currentNode.next
    }
  }
}

export default LinkedList
