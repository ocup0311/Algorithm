class PriorityQueue {
  constructor() {
    this.values = []
  }
  enqueue(val, priority) {
    this.values.push({ val, priority })
    this.sort()
  }
  dequeue() {
    return this.values.shift()
  }
  sort() {
    this.values.sort((a, b) => a.priority - b.priority)
  }
}

class WeightedGraph {
  constructor() {
    this.adjacencyList = {}
  }

  addNode(node) {
    this.adjacencyList[node] = []
  }

  addEdge(node1, node2, weight) {
    // now we are storing objects
    this.adjacencyList[node1].push({ node: node2, weight: weight })
    this.adjacencyList[node2].push({ node: node1, weight: weight })
  }

  Dijkstra(node1, node2) {
    let priorityQueue = new PriorityQueue()
    let shortestTable = {}
    let previous = {}

    for (let things in this.adjacencyList) {
      if (things === node1) {
        shortestTable[node1] = 0
        priorityQueue.enqueue(things, 0)
      } else {
        shortestTable[things] = Infinity
        priorityQueue.enqueue(things, Infinity)
      }

      previous[things] = null
    }

    // as long as there's something in queue
    while (priorityQueue.values.length) {
      console.log(priorityQueue)
      let curNode = priorityQueue.dequeue().val
      for (let neighbor in this.adjacencyList[curNode]) {
        let currentNeighbor = this.adjacencyList[curNode][neighbor]
        let distance1 = shortestTable[curNode]
        let distance2 = currentNeighbor.weight
        let total = distance1 + distance2
        if (shortestTable[currentNeighbor.node] > total) {
          shortestTable[currentNeighbor.node] = total
          previous[currentNeighbor.node] = curNode
          priorityQueue.enqueue(currentNeighbor.node, total)
        }
      }
    }
    console.log(shortestTable, previous)

    let path = []
    path.push(node2)
    let current = node2
    while (current !== node1) {
      path.push(previous[current])
      current = previous[current]
    }

    path.reverse()
    console.log(path)
  }
}

const myGraph = new WeightedGraph()

const nodes = ['A', 'B', 'C', 'D', 'E', 'F']
const edges = [
  ['A', 'B', 4],
  ['A', 'C', 2],
  ['B', 'E', 3],
  ['C', 'D', 2],
  ['C', 'F', 4],
  ['D', 'E', 3],
  ['D', 'F', 1],
  ['E', 'F', 1],
]
const graph = []

for (let i = 0; i < nodes.length; i++) {
  myGraph.addNode(nodes[i])
}
for (let i = 0; i < edges.length; i++) {
  myGraph.addEdge(...edges[i])
}

myGraph.Dijkstra('A', 'E')
