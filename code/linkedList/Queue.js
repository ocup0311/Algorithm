import Node from './Node.js'

class Queue {
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
  enqueue(value) {
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
  dequeue() {
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

export default Queue

const queue = new Queue()
console.log('------ enqueue(1) ------')
queue.enqueue(1)
console.log(queue.getArr())
console.log('------ enqueue(2) ------')
queue.enqueue(2)
console.log(queue.getArr())
console.log('------ dequeue() ------')
queue.dequeue()
console.log(queue.getArr())
console.log('------ enqueue(3) ------')
queue.enqueue(3)
console.log(queue.getArr())
console.log('------ printAll() ------')
queue.printAll()
