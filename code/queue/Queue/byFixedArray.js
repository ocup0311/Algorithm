// need a fixed queue size

class Queue {
  constructor(size = 10) {
    this.start = 0
    this.end = -1
    this.queue = new Array(size)
  }

  #getIndex(indexORorder) {
    return indexORorder % this.queue.length
  }

  #getOrder(indexORorder) {
    const index_start = this.#getIndex(this.start)
    const index = this.#getIndex(indexORorder)

    const diff =
      index > index_start
        ? index - index_start
        : index - index_start + this.queue.length

    return this.start + diff
  }

  // O(n)
  #traverse(index_to, cb) {
    if (this.isEmpty()) return

    const order_to = this.#getOrder(index_to)
    const order_stop = order_to > this.end ? this.end : order_to

    for (let i = this.start; i <= order_stop; i++) {
      const index = this.#getIndex(i)
      cb(this.queue[index])
    }
  }

  // O(n)
  #traverseAll(cb) {
    this.#traverse(this.end, cb)
  }

  isFull() {
    if (this.end - this.start + 1 === this.queue.length) {
      console.log("It's FULL!")
      return true
    }

    return false
  }

  isEmpty() {
    if (this.start > this.end) {
      console.log("It's EMPTY!")
      return true
    }

    return false
  }

  // O(1)
  enqueue(value) {
    // exception
    if (this.isFull()) return this.end - this.start + 1

    //  run
    this.end++
    const index_end = this.#getIndex(this.end)
    this.queue[index_end] = value

    return this.end - this.start + 1
  }

  // O(1)
  dequeue() {
    // exception
    if (this.isEmpty()) return null

    // run
    const index_start = this.#getIndex(this.start)
    const removedValue = this.queue[index_start]

    this.start++

    return removedValue.value
  }

  // O(n)
  getArr() {
    const arr = []

    const cb = (currentValue) => arr.push(currentValue)

    this.#traverseAll(cb)

    return arr
  }

  // O(n)
  printAll() {
    const cb = (currentValue) => console.log(currentValue)

    this.#traverseAll(cb)
  }
}

export default Queue
