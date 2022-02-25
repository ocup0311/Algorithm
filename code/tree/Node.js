import * as U from '$util'

// function
const toCheckItem = (item) => {
  if (typeof item !== 'object' || !item.key)
    throw new U.OwnError(`Please give an object with key for new Node.`)
}

const makeKey = (item) => {
  toCheckItem(item)

  return item.key
}

const makeItem = (item) => {
  toCheckItem(item)

  return { ...item }
}

// main
class Node {
  constructor(item) {
    // store one more key is better or not?
    this.key = makeKey(item)
    this.item = makeItem(item)
    this.left = null
    this.right = null
  }
}

export default Node
