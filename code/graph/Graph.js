import * as U from '$util'
import { Node } from './Node.js'
import { Edge } from './Edge.js'
import PriorityQueue from '../tree/PriorityQueue.js'
import traverseRule from './traverseRule.js'

// function
const checkRawGraph = (rawNode, rawEdge) => {
  // TODO: check rawNode
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
  const nodes = {}

  rawNode.forEach((v) => {
    nodes[v.key] = new Node(v)
  })

  return nodes
}
const buildEdge = (nodes, edgeData) => {
  const fn = ({ key1, key2, weight }) => {
    const node1 = nodes[key1]
    const node2 = nodes[key2]

    const edge = new Edge(node1, node2, weight)
    node1.addEdge(edge)
    node2.addEdge(edge)

    return edge
  }

  return edgeData.map((v) => fn(v))
}
const buildGraph = (rawNode, rawEdge) => {
  checkRawGraph(rawNode, rawEdge)
  const nodes = buildNode(rawNode)
  const edges = buildEdge(nodes, rawEdge)

  return [Object.values(nodes), edges]
}

// main
// rawNode: [{ key: 1, value: 'A' }]
// rawEdge: [{ key1: 1, key2: 2, weight: 10 }]
class Graph {
  constructor({ name, rawNode, rawEdge }) {
    const [nodes, edges] = buildGraph(rawNode, rawEdge)

    this.nodes = nodes
    this.edges = edges
    this.name = name
    this.mst = null
  }

  // Minimal Spanning Tree
  PrimMST(startIndex = 0, force_run = false) {
    // exception
    if (!force_run && this.mst) return this.mst

    // var
    const mst = []
    const edgeBucket = new PriorityQueue('min', 'weight')
    const visitedNode = new Map()

    // function
    const checkCycled = (edge) => {
      let cycled = true

      ;[edge.node1, edge.node2].forEach((node) => {
        if (!visitedNode.get(node)) {
          cycled = false
          visitedNode.set(node, true)
          node.edges.forEach((v) => {
            if (edge !== v) edgeBucket.enqueue(v)
          })
        }
      })

      return cycled
    }

    const findMinWeight = () => {
      const minEdge = edgeBucket.dequeue()

      if (checkCycled(minEdge)) return findMinWeight()

      return minEdge
    }

    const buildMST = (startNode) => {
      if (!startNode) return

      visitedNode.set(startNode, true)
      startNode.edges.forEach((edge) => edgeBucket.enqueue(edge))

      while (visitedNode.size < this.nodes.length) {
        const minEdge = findMinWeight()

        mst.push(minEdge)
      }
    }

    // run
    buildMST(this.nodes[startIndex])

    this.mst = mst
    return mst
  }

  KruskalMST(force_run = false) {
    // exception
    if (!force_run && this.mst) return this.mst

    // var
    const mst = []
    const visitedNode = new Map()
    const edgeBucket = new PriorityQueue('min', 'weight')
    this.edges.forEach((v) => edgeBucket.enqueue(v))

    // function
    const checkCycled = (edge) => {
      let cycled = true

      ;[edge.node1, edge.node2].forEach((node) => {
        if (!visitedNode.get(node)) {
          cycled = false
          visitedNode.set(node, true)
        }
      })

      return cycled
    }

    const findMinWeight = () => {
      if (edgeBucket.queue.length === 0) return null

      const minEdge = edgeBucket.dequeue()

      if (checkCycled(minEdge)) return findMinWeight()

      return minEdge
    }

    const buildMST = () => {
      while (edgeBucket.queue.length > 0) {
        const minEdge = findMinWeight()

        minEdge && mst.push(minEdge)
      }
    }

    // run
    buildMST()

    this.mst = mst
    return mst
  }

  // traversal
  DFT(startNode, rule = 'normal') {
    if (!startNode) {
      console.log('Please give a start node inside the graph')
      return null
    }

    // var
    const result = []
    const visitedNode = new Map()

    // function
    const makeNodes = (edge) => U.getObjValue(traverseRule, rule)(edge)

    const pushResult = (node) => {
      visitedNode.set(node, true)
      result.push(node)
    }

    const fn = (node) => {
      pushResult(node)

      const nodes = makeNodes(node)
      nodes.forEach((n) => {
        if (!visitedNode.get(n)) fn(n)
      })
    }

    // run
    fn(startNode)

    return result
  }

  BFT(startNode, rule = 'normal') {
    if (!startNode) {
      console.log('Please give a start node inside the graph')
      return null
    }

    // var
    const result = []
    const visitedNode = new Map()
    let ptr = 0

    // function
    const makeNodes = (edge) => U.getObjValue(traverseRule, rule)(edge)
    const pushResult = (node) => {
      visitedNode.set(node, true)
      result.push(node)
    }

    // run
    pushResult(startNode)

    while (result[ptr]) {
      const nodes = makeNodes(result[ptr])

      nodes.forEach((n) => {
        if (!visitedNode.get(n)) pushResult(n)
      })

      ptr++
    }

    return result
  }
}

export default Graph
