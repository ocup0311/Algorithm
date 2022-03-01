import * as U from '$util'
import Graph from './Graph.js'
// import BinarySearchTree from './BinarySearchTree.js'
// import PriorityQueue from './PriorityQueue.js'

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

  // TODO: run mst 後, arr 中的 node 是新的 obj?
  // console.log(`------ check result by PrimMST with different startNode  ------`)
  // const checkArr = myGraph.nodes
  //   .map((v, i) => myGraph.PrimMST(i, true))
  //   .concat([mstKruskal])
  // console.log(U.checkSameArrItem(...checkArr))
}

export const runTestTraversal = () => {
  console.log('------ my Graph ------')
  console.log(myGraph)

  console.log('------ DFT(myGraph.nodes[0]) ------')
  const rr0 = myGraph.DFT(myGraph.nodes[0])
  console.log(rr0)
  console.log('------ DFT(myGraph.nodes[1]) ------')
  const rr1 = myGraph.DFT(myGraph.nodes[1])
  console.log(rr1)
  console.log('------ DFT(myGraph.nodes[2]) ------')
  const rr2 = myGraph.DFT(myGraph.nodes[2])
  console.log(rr2)
  console.log('------ DFT(myGraph.nodes[3]) ------')
  const rr3 = myGraph.DFT(myGraph.nodes[3])
  console.log(rr3)
  console.log('------ DFT(myGraph.nodes[4]) ------')
  const rr4 = myGraph.DFT(myGraph.nodes[4])
  console.log(rr4)
}
