import Node from './Node.js'

class Deque {
  constructor() {
    this.head = null
    this.length = 0

    this._ = {
      // O(n)
      findNode: (index) => {
        let currentNode = this.head

        for (let i = 0; i < index; i++) {
          currentNode = currentNode.next
        }

        return currentNode
      },

      // O(n)
      findLastNode: () => {
        return this._.findNode(this.length - 1)
      },

      // O(n)
      traverse: (indexTo, cb) => {
        if (!this.head) {
          console.log('This is an empty list.')
          return
        }

        let currentNode = this.head
        for (let i = 0; i <= indexTo; i++) {
          cb(currentNode)
          currentNode = currentNode.next
        }
      },

      // O(n)
      traverseAll: (cb) => {
        this._.traverse(this.length - 1, cb)
      },
    }
  }

  // O(n)
  push(value) {
    const newNode = new Node(value)

    if (!this.head) this.head = newNode
    else {
      const lastNode = this._.findLastNode()
      lastNode.next = newNode
    }

    this.length++

    return this.length
  }

  // O(n)
  pop() {
    // exception
    if (!this.head) {
      console.log('This is an empty list.')
      return null
    }

    // run
    const last2Node = this._.findNode(this.length - 2)
    const popNode = last2Node.next
    last2Node.next = null
    this.length--

    return popNode.value
  }

  // O(1)
  inject(value) {
    const newNode = new Node(value)

    if (!this.head) {
      this.head = newNode
    } else {
      newNode.next = this.head
      this.head = newNode
    }

    this.length++

    return this.length
  }

  // O(1)
  eject() {
    // exception
    if (!this.head) {
      console.log('This is an empty list.')
      return null
    }

    // run
    const removedNode = this.head
    this.head = this.head.next
    removedNode.next = null
    this.length--

    return removedNode.value
  }

  // O(n)
  getList() {
    const list = []

    const cb = (currentNode) => list.push(currentNode)

    this._.traverseAll(cb)

    return list
  }

  // O(n)
  getArr() {
    const arr = []

    const cb = (currentNode) => arr.push(currentNode.value)

    this._.traverseAll(cb)

    return arr
  }

  // O(n)
  printAll() {
    const cb = (currentNode) => console.log(currentNode.value)

    this._.traverseAll(cb)
  }
}

export default Deque
