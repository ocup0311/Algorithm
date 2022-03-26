import Node from '../Node.js'

class Stack {
  constructor() {
    this.head = null
    this.length = 0

    // internal use
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
        if (this.isEmpty()) return

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

  isEmpty() {
    if (!this.head) {
      console.log("It's EMPTY!")
      return true
    }

    return false
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
    if (this.isEmpty()) return null

    // run
    let popNode

    if (this.length === 1) {
      popNode = this.head
      this.head = null
    } else {
      const last2Node = this._.findNode(this.length - 2)
      popNode = last2Node.next
      last2Node.next = null
    }

    this.length--

    return popNode.value
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

export default Stack
