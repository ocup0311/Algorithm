import Graph from './Graph.js'
import Digraph from './Digraph.js'

// undirected
const rawNode = [
  { key: 1, value: 'A' },
  { key: 2, value: 'B' },
  { key: 3, value: 'C' },
  { key: 4, value: 'D' },
  { key: 5, value: 'E' },
  { key: 6, value: 'F' },
]
const rawEdge = [
  { key1: 1, key2: 2, weight: 10 },
  { key1: 1, key2: 3, weight: 8 },
  { key1: 2, key2: 4, weight: 6 },
  { key1: 2, key2: 5, weight: 7 },
  { key1: 3, key2: 4, weight: 5 },
  { key1: 3, key2: 6, weight: 8 },
  { key1: 4, key2: 5, weight: 4 },
  { key1: 4, key2: 6, weight: 3 },
  { key1: 5, key2: 6, weight: 1 },
]
const myGraph = new Graph({ name: 'myGraph', rawNode, rawEdge })

export const runTestMST = () => {
  console.log('------ rawGraph ------\n')
  console.log(myGraph.nodes)

  console.log(`------ PrimMST(0) ------`)
  console.log(myGraph.PrimMST(0, true))
  console.log(`------ PrimMST(8) ------`)
  console.log(myGraph.PrimMST(8, true))

  console.log(`------ KruskalMST ------`)
  const mstKruskal = myGraph.KruskalMST(true)
  console.log(mstKruskal)

  // TODO: run mst 後, adft 中的 node 是新的 obj?
  // console.log(`------ check result by PrimMST with different startNode  ------`)
  // const checkAdft = myGraph.nodes
  //   .map((v, i) => myGraph.PrimMST(i, true))
  //   .concat([mstKruskal])
  // console.log(U.checkSameAdftItem(...checkAdft))
}

export const runTestTraversal = () => {
  console.log('------ my Graph ------')
  console.log(myGraph)

  // function
  const makeLog = (v) => v?.map((v) => v.item.value) ?? v

  const traverseBy = (node, method) => {
    console.log(`------ ${method}(${node?.item.value}) ------`)
    const result1 = myGraph[method](node, 'normal')
    const result2 = myGraph[method](node, 'alpha_order')
    const result3 = myGraph[method](node, 'key_small')
    const result4 = myGraph[method](node, 'alpha_reverse')
    const result5 = myGraph[method](node, 'key_big')
    const result6 = myGraph[method](node, 'weight_small')
    const result7 = myGraph[method](node, 'weight_big')

    console.log('normal', 'alpha_order', 'key_small')
    console.log(makeLog(result1), makeLog(result2), makeLog(result3))
    console.log('alpha_reverse', 'key_big')
    console.log(makeLog(result4), makeLog(result5))
    console.log('weight_small', 'weight_big')
    console.log(makeLog(result6), makeLog(result7))
  }

  // run
  myGraph.nodes.forEach((element) => {
    traverseBy(element, 'DFT')
    traverseBy(element, 'BFT')
  })

  console.log('------ DFT(myGraph.nodes[myGraph.nodes.length]) ------')
  const dft6 = myGraph.DFT(myGraph.nodes[myGraph.nodes.length])
  console.log(makeLog(dft6))

  console.log('------ BFT(myGraph.nodes[myGraph.nodes.length]) ------')
  const bft6 = myGraph.BFT(myGraph.nodes[myGraph.nodes.length])
  console.log(makeLog(bft6))
}

// directed
const rawDiNode = [
  { key: 1, value: 'A' },
  { key: 2, value: 'B' },
  { key: 3, value: 'C' },
  { key: 4, value: 'D' },
]
const rawDiEdge = [
  { key1: 1, key2: 2, weight: 3 },
  { key1: 1, key2: 4, weight: 4 },
  { key1: 2, key2: 3, weight: 5 },
  { key1: 3, key2: 4, weight: 1 },
  { key1: 4, key2: 2, weight: 2 },
  { key1: 4, key2: 3, weight: 1 },
]
const myDigraph = new Digraph({
  name: 'myDigraph',
  rawNode: rawDiNode,
  rawEdge: rawDiEdge,
})

export const runTestDijkstra = () => {
  console.log('------ myDigraph ------\n')
  console.log(myDigraph.nodes)

  console.log('------ myShortedPath ------\n')
  const myShortedPath = myDigraph.Dijkstra(myDigraph.nodes[0])
  console.log(myShortedPath)
}
