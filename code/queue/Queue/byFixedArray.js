// need a fixed queue size

class Queue {
  constructor(size = 10) {
    this.start = 0
    this.end = -1
    this.queue = new Array(size)

    this._ = {
      // O(n)
      traverse: (indexOfEnd, cb) => {
        for (let i = this.start; i <= indexOfEnd; i++) {
          const realIndex = i % this.queue.length
          cb(this.queue[realIndex])
        }
      },

      // O(n)
      traverseAll: (cb) => {
        this._.traverse(this.end, cb)
      },
    }
  }

  // O(1)
  enqueue(value) {
    // exception
    if (this.end - this.start + 1 === this.queue.length) {
      console.log("It's FULL!")
      return this.end - this.start + 1
    }

    //  run
    this.end++
    const endIndex = this.end % this.queue.length
    this.queue[endIndex] = value

    return this.end - this.start + 1
  }

  // O(1)
  dequeue() {
    // exception
    if (this.start > this.end) {
      console.log("It's EMPTY!")
      return null
    }

    // run
    const startIndex = this.start % this.queue.length
    const removedValue = this.queue[startIndex]

    this.start++

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
