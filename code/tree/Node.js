import * as U from '$util'

// function
const checkItem = (item, keyName, isErr = true) => {
  if (typeof item !== 'object' || item[keyName] === undefined) {
    if (!isErr) return false
    throw new U.OwnError(`Please give an object with ${keyName} for new Node.`)
  }

  return true
}

const makeKey = (item, keyName, defultKey) => {
  if (!checkItem(item, keyName, defultKey === undefined)) return defultKey

  return item[keyName]
}

const makeItem = (item) => {
  return { ...item }
}

// main
export class Node_list {
  constructor(item, keyName = 'key', defultKey) {
    // store one more key is better or not?
    this.key = makeKey(item, keyName, defultKey)
    this.item = makeItem(item)
    this.left = null
    this.right = null
  }
}

export class Node_arr {
  constructor(item, keyName = 'key', defultKey) {
    this.key = makeKey(item, keyName, defultKey)
    this.item = makeItem(item)
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
