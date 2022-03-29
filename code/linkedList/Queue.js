// TODO: 回頭試試看用這個改 this._  (https://www.w3schools.com/js/js_object_es5.asp)

import Node from './Node.js'

// class
class NodeD extends Node {
  constructor(value) {
    super(value)

    this.prev = null
  }
}

class Queue {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0

    // internal use
    this._ = {
      // O(n/2)
      findNodeFromHead: (index) => {
        let currentNode = this.head
        for (let i = 0; i < index; i++) {
          currentNode = currentNode.next
        }
        return currentNode
      },

      // O(n/2)
      findNodeFromTail: (index) => {
        let currentNode = this.tail
        for (let i = this.length - 1; i > index; i--) {
          currentNode = currentNode.prev
        }
        return currentNode
      },

      // O(n/2)
      findNode: (index) => {
        if (index < this.length / 2) return this._.findNodeFromHead(index)
        else return this._.findNodeFromTail(index)
      },

      // O(1)
      findLastNode: () => {
        return this.tail
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

  // O(1)
  enqueue(value) {
    const newNode = new NodeD(value)

    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      const lastNode = this._.findLastNode()
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

export default Queue
