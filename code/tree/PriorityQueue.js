// use Max Heap
import * as U from '$util'
import { Node_arr, buildReturn, getKey } from './Node.js'

class Node extends Node_arr {
  constructor(item) {
    super(item, 'priority')
  }
}

// function
const getParent = (index_child) => Math.ceil(index_child / 2) - 1

const getChildren = (index_parent) => [
  index_parent * 2 + 1,
  index_parent * 2 + 2,
]

const maxHeapDown = (arr, index_parent) => {
  // var
  const [index_child1, index_child2] = getChildren(index_parent)
  let index_largest = index_parent
  let isSwap = false

  // function
  const isBigger = (index) =>
    index < arr.length && getKey(arr[index]) > getKey(arr[index_largest])

  // run
  if (isBigger(index_child1)) index_largest = index_child1
  if (isBigger(index_child2)) index_largest = index_child2

  if (index_largest !== index_parent) {
    U.toSwapArr(arr, index_parent, index_largest)
    maxHeapDown(arr, index_largest)

    isSwap = true
  }

  return isSwap
}

const maxHeapUp = (arr, index_child) => {
  const index_parent = getParent(index_child)
  const isSwap = maxHeapDown(arr, index_parent)

  if (isSwap) maxHeapUp(arr, index_parent)

  return
}

// main
class PriorityQueue {
  constructor() {
    this.queue = []
  }

  isEmpty() {
    return this.queue.length === 0
  }

  enqueue(item) {
    const newNode = new Node(item)
    const key = getKey(newNode)

    // run
    this.queue.push(newNode)
    maxHeapUp(this.queue, this.queue.length - 1)

    console.log(`#${key} Node enqueued.`)
    return this.queue.length
  }

  dequeue() {
    // exception
    if (this.isEmpty()) return buildReturn({ message: 'This is empty.' })

    const deNode = this.queue[0]
    const deKey = getKey(deNode)
    const lastNode = this.queue.pop()

    if (!this.isEmpty()) {
      this.queue[0] = lastNode
      maxHeapDown(this.queue, 0)
    }

    return buildReturn({
      node: deNode,
      message: `#${deKey} Node dequeued.`,
    })
  }
}

export default PriorityQueue
