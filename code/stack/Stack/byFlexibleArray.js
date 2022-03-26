// need to resize array

class Stack {
  constructor() {
    this.stack = []

    // internal use
    this._ = {
      // O(n)
      traverse: (index_to, cb) => {
        for (let i = 0; i <= index_to; i++) {
          cb(this.stack[i])
        }
      },

      // O(n)
      traverseAll: (cb) => {
        this._.traverse(this.stack.length - 1, cb)
      },
    }
  }

  // O(1)
  push(value) {
    this.stack.push(value)

    return this.stack.length
  }

  // O(1)
  pop() {
    // exception
    if (this.stack.length === 0) {
      console.log("It's EMPTY!")
      return null
    }

    // run
    const removedValue = this.stack.pop()

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
