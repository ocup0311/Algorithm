import * as U from '$util'

// function
const checkItem = (item, keyName) => {
  if (typeof item !== 'object' || !item[keyName])
    throw new U.OwnError(`Please give an object with ${keyName} for new Node.`)
}

const makeKey = (item, keyName) => {
  checkItem(item, keyName)

  return item[keyName]
}

const makeItem = (item, keyName) => {
  checkItem(item, keyName)

  return { ...item }
}

// main
export class Node_list {
  constructor(item, keyName = 'key') {
    // store one more key is better or not?
    this.key = makeKey(item, keyName)
    this.item = makeItem(item, keyName)
    this.left = null
    this.right = null
  }
}

export class Node_arr {
  constructor(item, keyName = 'key') {
    this.key = makeKey(item, keyName)
    this.item = makeItem(item, keyName)
  }
}

// util
export const buildReturn = ({ node, message = 'not a node' }) => {
  const fn = (result) => {
    result || console.log(message)
    return result ?? null
  }

  return fn(node?.item)

  // if (type === 'node') return fn(node)
  // if (type === 'item') return fn(node?.item)
}

export const getKey = (node) => node?.key
