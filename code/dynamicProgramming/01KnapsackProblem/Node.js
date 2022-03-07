class Node {
  constructor(cost, profit, lowerBound, upperBound, layer = 0, prev = null) {
    this.cost = cost
    this.profit = profit
    this.lowerBound = lowerBound
    this.upperBound = upperBound
    this.layer = layer
    this.prev = prev
    this.addedItem = null
  }
}

export default Node
