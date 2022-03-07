// use Max Heap
import * as U from '$util'
import { Node_arr, buildReturn, getKey } from './Node.js'

// class
class Node extends Node_arr {
  constructor(item, priority) {
    super(item, priority)
  }
}

// function
const getParent = (index_child) => Math.ceil(index_child / 2) - 1

const getChildren = (index_parent) => [
  index_parent * 2 + 1,
  index_parent * 2 + 2,
]

const heapDown = (arr, index_parent, type) => {
  // var
  const [index_child1, index_child2] = getChildren(index_parent)
  let index_largest = index_parent
  let isSwap = false

  // function
  const compare = (index) => {
    const isBigger = getKey(arr[index]) > getKey(arr[index_largest])
    const isSmaller = getKey(arr[index]) < getKey(arr[index_largest])

    return index < arr.length && (type === 'max' ? isBigger : isSmaller)
  }

  // run
  if (compare(index_child1)) index_largest = index_child1
  if (compare(index_child2)) index_largest = index_child2

  if (index_largest !== index_parent) {
    U.toSwapArr(arr, index_parent, index_largest)
    heapDown(arr, index_largest, type)

    isSwap = true
  }

  return isSwap
}

const heapUp = (arr, index_child, type) => {
  const index_parent = getParent(index_child)
  const isSwap = heapDown(arr, index_parent, type)

  if (isSwap) heapUp(arr, index_parent, type)

  return
}

// main
class PriorityQueue {
  constructor(type = 'max') {
    const enumerate = ['max', 'min']
    U.checkEnum(type, enumerate)

    this.queue = []
    this.type = type
  }

  isEmpty() {
    return this.queue.length === 0
  }

  enqueue(item, priority = 'priority', isLog = true) {
    const newNode = new Node(item, priority)
    const key = getKey(newNode)

    // run
    this.queue.push(newNode)
    heapUp(this.queue, this.queue.length - 1, this.type)

    if (isLog) console.log(`#${key} Node enqueued.`)
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
      heapDown(this.queue, 0, this.type)
    }

    return buildReturn({
      node: deNode,
      message: `#${deKey} Node dequeued.`,
    })
  }

  changePriority(index) {
    heapDown(this.queue, index, this.type)
    heapUp(this.queue, index, this.type)

    return this.queue.length
  }
}

export default PriorityQueue

const pq = new PriorityQueue()

console.log('------ PriorityQueue ------')
console.log(pq)

const fn = (key) => {
  pq.enqueue({ priority: key }, 'priority', false)
  console.log(
    pq.queue.map((v) => {
      // console.log(typeof v.key)
      return v.key
    })
  )
}

fn(3)
fn(4)
fn(377)
fn(223)
fn(143)
fn(3876)
fn(13456)
fn(35)
