import Queue from '../linkedList/Queue.js'

// 雖然會每次都重跑一次，但我認為每次都該拿到當下的結果，所以不紀錄 Traversal 的結果。也可做成 optional。

// Breadth First Tree Traversal
const bft = (node, cb) => {
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
    cb(currentNode)
  }
}

// Depth First Tree Traversal
// A. Another way to think about DFS
const dft = (node, { preOrder, inOrder, postOrder }) => {
  if (node === null) return

  preOrder()
  dft(node.left, { preOrder, inOrder, postOrder })
  inOrder()
  dft(node.right, { preOrder, inOrder, postOrder })
  postOrder()
}

// B.
const preOrder = (node, cb) => {
  if (node === null) return

  cb(node)
  preOrder(node.left, cb)
  preOrder(node.right, cb)
}

const inOrder = (node, cb) => {
  if (node === null) return

  inOrder(node.left, cb)
  cb(node)
  inOrder(node.right, cb)
}

const postOrder = (node, cb) => {
  if (node === null) return

  postOrder(node.left, cb)
  postOrder(node.right, cb)
  cb(node)
}

export default { bft, preOrder, inOrder, postOrder }
