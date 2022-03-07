// use Branch-and-Bound

import PriorityQueue from '../../tree/PriorityQueue.js'
import Node from './Node.js'

const zeroOneKP = ({ items, maxCost }) => {
  const output = []
  const restItems = items
    .map((v) => ({ ...v, cp: v.profit / v.cost }))
    .sort((a, b) => a.cp - b.cp)
  const candidates = new PriorityQueue('max')
  const finalcandidates = new PriorityQueue('max')
  let lowerBound_tree = 0

  // function
  const toEnqueue = (node) => {
    candidates.enqueue(node, 'upperBound', false)
  }
  const toDequeue = () => candidates.dequeue()

  const makeBound = (cost = 0, profit = 0, layer = 0) => {
    let lastItem = null
    let upperBound = undefined
    let currentCost = cost
    let lowerBound = profit

    for (let i = restItems.length - 1 - layer; i > -1; i--) {
      lastItem = restItems[i]
      currentCost = currentCost + lastItem.cost

      if (currentCost > maxCost) break

      lowerBound = lowerBound + lastItem.profit
      lastItem = null
    }

    if (lastItem) {
      const cc = maxCost - (currentCost - lastItem.cost)

      upperBound = lowerBound + lastItem.cp * cc
    }

    return [lowerBound, upperBound ?? lowerBound]
  }

  const updateglobalBound = (lowerBound) => {
    if (lowerBound > lowerBound_tree) lowerBound_tree = lowerBound
  }

  const makeOutput = () => {
    let bestcandidates = finalcandidates.dequeue()

    while (bestcandidates !== null) {
      if (bestcandidates.addedItem) output.push(bestcandidates.addedItem)
      bestcandidates = bestcandidates.prev
    }
  }

  // run
  const [lowerBound_F, upperBound_F] = makeBound()
  const firtNode = new Node(0, 0, lowerBound_F, upperBound_F)
  updateglobalBound(lowerBound_F)
  toEnqueue(firtNode)

  while (candidates.queue.length > 0) {
    const prevNode = toDequeue()
    const prevLayer = prevNode.layer
    const currentItem = restItems[restItems.length - 1 - prevLayer]

    if (prevLayer === items.length) {
      finalcandidates.enqueue(prevNode, 'lowerBound', false)
      continue
    }

    if (prevNode?.upperBound < lowerBound_tree) break

    const cost_R = prevNode.cost
    const profit_R = prevNode.profit
    const [lowerBound_R, upperBound_R] = makeBound(
      cost_R,
      profit_R,
      prevLayer + 1
    )

    const cost_L = currentItem.cost + prevNode.cost
    const profit_L = currentItem.profit + prevNode.profit
    const [lowerBound_L, upperBound_L] = makeBound(
      cost_L,
      profit_L,
      prevLayer + 1
    )

    const maxBound_R = Math.max(
      upperBound_R,
      cost_L <= maxCost && lowerBound_L,
      lowerBound_tree
    )
    const maxBound_L = Math.max(upperBound_L, lowerBound_R, lowerBound_tree)

    if (upperBound_R === maxBound_R) {
      const newNode_R = new Node(
        cost_R,
        profit_R,
        lowerBound_R,
        upperBound_R,
        prevLayer + 1,
        prevNode
      )

      updateglobalBound(lowerBound_R)
      toEnqueue(newNode_R)
    }

    if (upperBound_L === maxBound_L && cost_L <= maxCost) {
      const newNode_L = new Node(
        cost_L,
        profit_L,
        lowerBound_L,
        upperBound_L,
        prevLayer + 1,
        prevNode
      )
      newNode_L.addedItem = currentItem
      updateglobalBound(lowerBound_L)
      toEnqueue(newNode_L)
    }
  }

  makeOutput()

  return output
}

export default zeroOneKP
