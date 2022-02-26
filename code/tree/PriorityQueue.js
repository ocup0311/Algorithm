// use Max Heap
import * as U from '$util'
import { Node_arr, makeReturn, getKey } from './Node.js'

class Node extends Node_arr {
  constructor(item) {
    super(item, 'priority')
  }
}

// function
const maxHeapify = (arr, ptr) => {
  // var
  let index_largest = ptr
  const index_child1 = (ptr + 1) * 2
  const index_child2 = index_child1 - 1

  // function
  const isBigger = (index) =>
    index < arr.length && getKey(arr[index]) > getKey(arr[index_largest])

  // run
  if (isBigger(index_child1)) index_largest = index_child1
  if (isBigger(index_child2)) index_largest = index_child2

  if (index_largest !== ptr) {
    U.toSwapArr(arr, ptr, index_largest)
    maxHeapify(index_largest)
    return true
  }
  return false
}

// main
class PriorityQueue {
  constructor() {
    this.queue = []
  }

  enqueue(item) {
    const newNode = new Node(item)
    const key = getKey(newNode)

    this.queue.push(newNode)

    // function
    const run = (ptr) => {
      const i = Math.ceil(ptr / 2) - 1
      const x = maxHeapify(this.queue, i)

      if (x) run(i)
    }

    run(this.queue.length - 1)

    console.log(`#${key} Node enqueued.`)
    return newNode
  }

  dequeue() {
    const deNode = this.queue[0]
    const deKey = getKey(deNode)
    const lastNode = this.queue.pop()

    this.queue[0] = lastNode
    maxHeapify(this.queue, 0)

    console.log(`#${deKey} Node dequeued.`)
    return deNode
  }
}

export default PriorityQueue
