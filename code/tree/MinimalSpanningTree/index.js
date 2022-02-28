import * as U from '$util'
import Graph from './Graph.js'

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
