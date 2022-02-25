import Queue from '../linkedList/Queue.js'

// Breadth First Tree Traversal
const bft = (node, callBack) => {
  // var
  const queue = new Queue()

  // function
  const run = (node) => {
    if (node !== null) {
      queue.enqueue(node)
      run(node.left)
      run(node.right)
    }
  }

  // run
  run(node)
  while (queue.length > 0) {
    const currentNode = queue.dequeue()
    callBack(currentNode)
  }
}

// Depth First Tree Traversal
const preOrder = (node, callBack) => {
  if (node !== null) {
    callBack(node)
    preOrder(node.left, callBack)
    preOrder(node.right, callBack)
  }
}

const inOrder = (node, callBack) => {
  if (node !== null) {
    inOrder(node.left, callBack)
    callBack(node)
    inOrder(node.right, callBack)
  }
}

const postOrder = (node, callBack) => {
  if (node !== null) {
    postOrder(node.left, callBack)
    postOrder(node.right, callBack)
    callBack(node)
  }
}

export default { bft, preOrder, inOrder, postOrder }
