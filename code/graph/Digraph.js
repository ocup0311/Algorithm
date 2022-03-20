import * as U from '$util'
import { Node } from './Node.js'
import { Edge } from './Edge.js'
import PriorityQueue from '../tree/PriorityQueue.js'

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

// class
class Path {
  constructor(start, to, previous) {
    this.start = start
    this.to = to
    this.previous = previous
    this.steps = Infinity
  }
}

// main
// rawNode: [{ key: 1, value: 'A' }]
// rawEdge: [{ key1: 1, key2: 2, weight: 10 }]
class Digraph {
  constructor({ name, rawNode, rawEdge }) {
    const [nodes, edges] = buildGraph(rawNode, rawEdge)

    this.nodes = nodes
    this.edges = edges
    this.name = name
    this.path = null
  }

  Dijkstra(startNode, type = 'enqueue') {
    const shortedPaths = new Map()
    const unVisitedNode = new PriorityQueue('min', 'steps')

    // function
    const toEnqueue = (path) => unVisitedNode.enqueue(path)
    const toDequeue = () => unVisitedNode.dequeue()
    const inialize = () => {
      const path = new Path(startNode, startNode, startNode)
      path.steps = 0
      shortedPaths.set(startNode, path)
      toEnqueue(path)
    }
    const toDealNewPath = (type, node, path) => {
      switch (type) {
        case 'enqueue':
          toEnqueue(path)
          break

        case 'change':
          const index = unVisitedNode.queue.findIndex((v) => v.to === node)
          if (index > 0) unVisitedNode.changePriority(index)
          else toEnqueue(path)
          break

        default:
          toEnqueue(path)
      }
    }
    const addNewPath = (path) => {
      path.to.edges.forEach((edge) => {
        const newSteps = edge.weight + path.steps
        const oldSteps = shortedPaths.get(edge.node2)?.steps ?? Infinity

        if (newSteps < oldSteps) {
          const newPath = new Path(startNode, edge.node2, edge.node1)
          newPath.steps = newSteps
          shortedPaths.set(edge.node2, newPath)

          toDealNewPath(type, edge.node2, newPath)
        }
      })
    }

    // run
    inialize()

    while (!unVisitedNode.isEmpty()) {
      const currentPath = toDequeue()
      addNewPath(currentPath)
    }

    return shortedPaths
  }
}

export default Digraph
