// use Max Heap
import * as U from '$util'
import { Node_arr, buildReturn, getKey } from './Node.js'

class Node extends Node_arr {
  constructor(item) {
    super(item, 'priority')
  }
}

// function
const maxHeapDown = (arr, index_parent) => {
  // var
  let index_largest = index_parent
  const index_child1 = (index_parent + 1) * 2
  const index_child2 = index_child1 - 1

  // function
  const isBigger = (index) =>
    index < arr.length && getKey(arr[index]) > getKey(arr[index_largest])

  // run
  if (isBigger(index_child1)) index_largest = index_child1
  if (isBigger(index_child2)) index_largest = index_child2

  if (index_largest !== index_parent) {
    U.toSwapArr(arr, index_parent, index_largest)
    maxHeapDown(arr, index_largest)
    return true
  }
  return false
}

const maxHeapUp = (arr, index_child) => {
  const index_parent = Math.ceil(index_child / 2) - 1
  const isSwap = maxHeapDown(arr, index_parent)

  if (isSwap) maxHeapUp(arr, index_parent)
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
