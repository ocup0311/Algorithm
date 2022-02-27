import * as U from '$util'
import { Node_arr, getKey } from '../Node.js'
import PriorityQueue from '../PriorityQueue.js'

// function
const toCheckRawGraph = (rawNode, rawEdge) => {
  const isNotEmptyArr = Array.isArray(rawEdge) && rawEdge.length !== 0
  const isValidEdge =
    isNotEmptyArr &&
    rawEdge.every((item) =>
      ['key1', 'key2', 'weight'].every((v) => item.hasOwnProperty(v))
    )

  if (!isValidEdge)
    throw new U.OwnError(
      `\nPlease give an array like this to new Graph\n [{key1, key2, weight}]`
    )
}

const buildNode = (rawNode) => {
  const graph = {}

  rawNode.forEach((v) => {
    graph[v.key] = new Node(v)
  })

  return graph
}
const buildEdge = (graph, edgeData) => {
  const fn = ({ key1, key2, weight }) => {
    const node1 = graph[key1]
    const node2 = graph[key2]

    const edge1 = new Edge(node1, node2, weight)
    node1.addEdge(edge1)
    node2.addEdge(edge1)
  }

  edgeData.forEach((v) => fn(v))
}
const buildGraph = (rawNode, rawEdge) => {
  toCheckRawGraph(rawNode, rawEdge)
  const graph = buildNode(rawNode)
  buildEdge(graph, rawEdge)

  return Object.values(graph)
}

// class
class Node extends Node_arr {
  constructor(item) {
    super(item)
    this.edges = []
  }

  addEdge(edge) {
    this.edges.push(edge)
  }
}

class Edge {
  constructor(node1, node2, weight) {
    this.node1 = node1
    this.node2 = node2
    this.weight = weight
  }
}

// rawNode: [{ key: 1, value: 'A' }]
// rawEdge: [{ key1: 1, key2: 2, weight: 10 }]
class Graph {
  constructor({ name, rawNode, rawEdge }) {
    this.graph = buildGraph(rawNode, rawEdge)
    this.name = name
    this.mst = null
  }

  PrimMST(startIndex = 0, force_run = false) {
    // exception
    if (!force_run && this.mst) return this.mst

    // var
    const mst = []
    const edgeBucket = new PriorityQueue('min')
    const visitedNode = {}

    // function
    const checkCycled = (edge) => {
      const [key1, key2] = [getKey(edge.node1), getKey(edge.node2)]
      let cycled = true

      if (!visitedNode[key1]) {
        cycled = false
        visitedNode[key1] = edge.node1
        visitedNode._length++
        edge.node1.edges.forEach((v) => {
          if (edge !== v) edgeBucket.enqueue(v, 'weight')
        })
      }

      if (!visitedNode[key2]) {
        cycled = false
        visitedNode[key2] = edge.node2
        visitedNode._length++
        edge.node2.edges.forEach((v) => {
          if (edge !== v) edgeBucket.enqueue(v, 'weight')
        })
      }

      return cycled
    }

    const findMinWeight = () => {
      const minEdge = edgeBucket.dequeue()

      // console.log(minEdge)
      if (checkCycled(minEdge)) return findMinWeight()

      return minEdge
    }

    const buildMST = (startNode) => {
      if (!startNode) return

      visitedNode[getKey(startNode)] = startNode
      visitedNode._length = 1
      startNode.edges.forEach((edge) => edgeBucket.enqueue(edge, 'weight'))

      while (visitedNode._length < this.graph.length) {
        const minEdge = findMinWeight()

        mst.push(minEdge)
      }
    }

    // run
    buildMST(this.graph[startIndex])

    this.mst = mst
    return mst
  }
}

export default Graph
