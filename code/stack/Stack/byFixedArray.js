// need to resize array

class Stack {
  constructor(size = 10) {
    this.end = -1
    this.stack = new Array(size)

    // internal use
    this._ = {
      getLength: () => this.end + 1,

      // O(n)
      traverse: (index_to, cb) => {
        if (this.isEmpty()) return

        index_to = index_to > this.end ? this.end : index_to

        for (let i = 0; i <= index_to; i++) {
          cb(this.stack[i])
        }
      },

      // O(n)
      traverseAll: (cb) => {
        this._.traverse(this.end, cb)
      },
    }
  }

  isFull() {
    if (this.end + 1 === this.stack.length) {
      console.log("It's FULL!")
      return true
    }

    return false
  }

  isEmpty() {
    if (this.end < 0) {
      console.log("It's EMPTY!")
      return true
    }

    return false
  }

  // O(1)
  push(value) {
    // exception
    if (this.isFull()) return this._.getLength()

    //  run
    this.end++
    this.stack[this.end] = value

    return this._.getLength()
  }

  // O(1)
  pop() {
    // exception
    if (this.isEmpty()) return null

    // run
    const removedValue = this.stack[this.end]
    this.end--

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

export default Stack
