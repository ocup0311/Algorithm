// need to resize array

class Queue {
  constructor() {
    this.queue = []

    // internal use
    this._ = {
      // O(n)
      traverse: (indexTo, cb) => {
        if (this.isEmpty()) return

        for (let i = 0; i <= indexTo; i++) {
          cb(this.queue[i])
        }
      },

      // O(n)
      traverseAll: (cb) => {
        this._.traverse(this.queue.length - 1, cb)
      },
    }
  }

  isEmpty() {
    if (this.queue.length === 0) {
      console.log("It's EMPTY!")
      return true
    }

    return false
  }

  // O(1)
  enqueue(value) {
    this.queue.push(value)

    return this.queue.length
  }

  // O(n)
  dequeue() {
    // exception
    if (this.isEmpty()) return null

    // run
    const removedValue = this.queue.shift()

    return removedValue.value
  }

  // O(n)
  getArr() {
    const arr = []

    const cb = (currentValue) => arr.push(currentValue)

    this._.traverseAll(cb)

    return arr
  }

  // O(n)
  printAll() {
    const cb = (currentValue) => console.log(currentValue)

    this._.traverseAll(cb)
  }
}

export default Queue
