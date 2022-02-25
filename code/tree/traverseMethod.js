import Queue from '../linkedList/Queue.js'

// 雖然會每次都重跑一次，但我認為每次都該拿到當下的結果，所以不紀錄 Traversal 的結果。也可做成 optional。

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
