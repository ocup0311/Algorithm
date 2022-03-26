// need a fixed queue size

class Queue {
  constructor(size = 10) {
    this.start = 0
    this.end = -1
    this.queue = new Array(size)

    this._ = {
      getIndex: (indexORorder) => indexORorder % this.queue.length,

      getOrder: (indexORorder) => {
        const index_start = this._.getIndex(this.start)
        const index = this._.getIndex(indexORorder)

        const diff =
          index > index_start
            ? index - index_start
            : index - index_start + this.queue.length

        return this.start + diff
      },

      // O(n)
      traverse: (index_to, cb) => {
        const order_to = this._.getOrder(index_to)

        for (let i = this.start; i <= order_to; i++) {
          const index = this._.getIndex(i)
          cb(this.queue[index])
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
    const index_end = this._.getIndex(this.end)
    this.queue[index_end] = value

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
    const index_start = this._.getIndex(this.start)
    const removedValue = this.queue[index_start]

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
