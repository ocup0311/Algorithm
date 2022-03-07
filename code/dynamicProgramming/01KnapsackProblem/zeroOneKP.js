// use Branch-and-Bound

import PriorityQueue from '../../tree/PriorityQueue.js'
import Node from './Node.js'

const zeroOneKP = ({ items, maxCost }) => {
  // var
  let lowerBound_global = 0
  const candidates = new PriorityQueue('max')
  const sortedItems = items
    .map((v) => ({ ...v, cp: v.profit / v.cost }))
    .sort((a, b) => a.cp - b.cp)

  // function
  const toEnqueue = (node) => {
    candidates.enqueue(node, 'upperBound', false)
  }

  const toDequeue = () => candidates.dequeue()

  const makeBound = (cost, profit, layer) => {
    // function
    const makeLowerBound = () => {
      let lastItem = null
      let lowerBound = profit
      let currentCost = cost

      for (let i = sortedItems.length - 1 - layer; i > -1; i--) {
        const currentItem = sortedItems[i]
        currentCost = currentCost + currentItem.cost

        if (currentCost > maxCost) {
          lastItem = currentItem
          break
        }

        lowerBound = lowerBound + currentItem.profit
      }

      return [lastItem, lowerBound, currentCost]
    }

    const makeUpperBound = (lastItem, lowerBound, currentCost) => {
      if (!lastItem) return lowerBound

      const fractionalCost = maxCost - (currentCost - lastItem.cost)
      return lowerBound + lastItem.cp * fractionalCost
    }

    // run
    const [lastItem, lowerBound, currentCost] = makeLowerBound()

    const upperBound = makeUpperBound(lastItem, lowerBound, currentCost)

    return [lowerBound, upperBound]
  }

  const updateglobalBound = (lowerBound) => {
    if (lowerBound > lowerBound_global) lowerBound_global = lowerBound
  }

  const addNode = ({
    cost,
    profit,
    lowerBound,
    upperBound,
    layer,
    prev,
    addedItem,
  }) => {
    const newNode = new Node({
      cost,
      profit,
      lowerBound,
      upperBound,
      layer,
      prev,
      addedItem,
    })
    updateglobalBound(lowerBound)
    toEnqueue(newNode)
    return newNode
  }

  const initialize = () => {
    const [lowerBound, upperBound] = makeBound(0, 0, 0)
    addNode({ cost: 0, profit: 0, lowerBound, upperBound })
  }

  const makeCandidate = ({ prev, addedItem }) => {
    const cost = prev.cost + (addedItem ? addedItem.cost : 0)
    const profit = prev.profit + (addedItem ? addedItem.profit : 0)
    const layer = prev.layer + 1
    const [lowerBound, upperBound] = makeBound(cost, profit, layer)

    if (upperBound >= lowerBound_global && cost <= maxCost) {
      return addNode({
        cost,
        profit,
        lowerBound,
        upperBound,
        layer,
        prev,
        addedItem,
      })
    }
  }

  const makeOutput = (currentNode) => {
    const output = []

    while (currentNode !== null) {
      if (currentNode.addedItem) output.push(currentNode.addedItem)
      currentNode = currentNode.prev
    }

    return output
  }

  // run
  initialize()

  while (candidates.queue.length > 0) {
    const prevNode = toDequeue()
    const prevLayer = prevNode.layer
    const currentItem = sortedItems[sortedItems.length - 1 - prevLayer]

    if (prevLayer === items.length) return makeOutput(prevNode)

    makeCandidate({ prev: prevNode }) // 0
    makeCandidate({ prev: prevNode, addedItem: currentItem }) // 1
  }
}

export default zeroOneKP
