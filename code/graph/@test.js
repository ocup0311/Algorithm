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

  console.log('------ DFT(myGraph.nodes[0]) ------')
  const dft0 = myGraph.DFT(myGraph.nodes[0])
  console.log(dft0)
  console.log('------ DFT(myGraph.nodes[1]) ------')
  const dft1 = myGraph.DFT(myGraph.nodes[1])
  console.log(dft1)
  console.log('------ DFT(myGraph.nodes[2]) ------')
  const dft2 = myGraph.DFT(myGraph.nodes[2])
  console.log(dft2)
  console.log('------ DFT(myGraph.nodes[3]) ------')
  const dft3 = myGraph.DFT(myGraph.nodes[3])
  console.log(dft3)
  console.log('------ DFT(myGraph.nodes[4]) ------')
  const dft4 = myGraph.DFT(myGraph.nodes[4])
  console.log(dft4)
  console.log('------ DFT(myGraph.nodes[5]) ------')
  const dft5 = myGraph.DFT(myGraph.nodes[5])
  console.log(dft5)
  console.log('------ DFT(myGraph.nodes[6]) ------')
  const dft6 = myGraph.DFT(myGraph.nodes[6])
  console.log(dft6)

  console.log('------ BFT(myGraph.nodes[0]) ------')
  const bft0 = myGraph.BFT(myGraph.nodes[0])
  console.log(bft0)
  console.log('------ BFT(myGraph.nodes[1]) ------')
  const bft1 = myGraph.BFT(myGraph.nodes[1])
  console.log(bft1)
  console.log('------ BFT(myGraph.nodes[2]) ------')
  const bft2 = myGraph.BFT(myGraph.nodes[2])
  console.log(bft2)
  console.log('------ BFT(myGraph.nodes[3]) ------')
  const bft3 = myGraph.BFT(myGraph.nodes[3])
  console.log(bft3)
  console.log('------ BFT(myGraph.nodes[4]) ------')
  const bft4 = myGraph.BFT(myGraph.nodes[4])
  console.log(bft4)
  console.log('------ BFT(myGraph.nodes[5]) ------')
  const bft5 = myGraph.BFT(myGraph.nodes[5])
  console.log(bft5)
  console.log('------ BFT(myGraph.nodes[6]) ------')
  const bft6 = myGraph.BFT(myGraph.nodes[6])
  console.log(bft6)
}
