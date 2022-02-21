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
      traverse: (indexOfEnd, callBack) => {
        if (!this.head) {
          console.log('This is an empty list.')
          return
        }

        let currentNode = this.head
        for (let i = 0; i <= indexOfEnd; i++) {
          callBack(currentNode)
          currentNode = currentNode.next
        }
      },

      // O(n)
      traverseAll: (callBack) => {
        this._.traverse(this.length - 1, callBack)
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

    const callBack = (currentNode) => list.push(currentNode)

    this._.traverseAll(callBack)

    return list
  }

  // O(n)
  getArr() {
    const arr = []

    const callBack = (currentNode) => arr.push(currentNode.value)

    this._.traverseAll(callBack)

    return arr
  }

  // O(n)
  printAll() {
    const callBack = (currentNode) => console.log(currentNode.value)

    this._.traverseAll(callBack)
  }
}

export default Deque

const deque = new Deque()
console.log('------ push(1) ------')
deque.push(1)
console.log(deque.getArr())
console.log('------ push(2) ------')
deque.push(2)
console.log(deque.getArr())
console.log('------ pop() ------')
deque.pop()
console.log(deque.getArr())
console.log('------ inject(3) ------')
deque.inject(3)
console.log(deque.getArr())
console.log('------ inject(4) ------')
deque.inject(4)
console.log(deque.getArr())
console.log('------ eject() ------')
deque.eject()
console.log(deque.getArr())
console.log('------ push(5) ------')
deque.push(5)
console.log(deque.getArr())
console.log('------ printAll() ------')
deque.printAll()
