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

// export const runTestBST = () => {
//   const bst = new BinarySearchTree()

//   console.log('------ BinarySearchTree ------')
//   console.log(bst)
//   const node1 = bst.insert({ key: 8, value: 123 })
//   bst.insert({ key: 765, value: 456 })
//   bst.insert({ key: 5, value: 65 })
//   bst.insert({ key: 18, value: 123 })
//   const node2 = bst.insert({ key: 9, value: 123 })
//   console.log(bst)

//   console.log('------ printAllBy("bft") ------')
//   bst.printAllBy('bft')
//   console.log('------ printAllBy("preOrder") ------')
//   bst.printAllBy('preOrder')
//   console.log('------ printAllBy("inOrder") ------')
//   bst.printAllBy('inOrder')
//   console.log('------ printAllBy("postOrder") ------')
//   bst.printAllBy('postOrder')

//   console.log('------ search(123) ------')
//   console.log(bst.search(123))
//   console.log('------ search(765) ------')
//   console.log(bst.search(765))
//   console.log('------ search(8) ------')
//   console.log(bst.search(8))
//   console.log('------ findNode(8) ------')
//   console.log(bst.findNode(8))

//   console.log('------ searchFrom(node1, 9) ------')
//   console.log(bst.searchFrom(node1, 9))
//   console.log('------ searchFrom(node2, 8) ------')
//   console.log(bst.searchFrom(node2, 8))

//   console.log('------ getListArrBy(inOrder) ------')
//   console.log(bst.getListArrBy('inOrder'))
//   console.log('------ getItemArrBy(inOrder) ------')
//   console.log(bst.getItemArrBy('inOrder'))
// }

// export const runTestPQ = () => {
//   const pq = new PriorityQueue()

//   console.log('------ PriorityQueue ------')
//   console.log(pq)
//   console.log('------ enqueue({ priority: 3, name: "Mike" }) ------')
//   pq.enqueue({ priority: 3, name: 'Mike' })
//   console.log('------ enqueue({ priority: 2, name: "Vicky" }) ------')
//   pq.enqueue({ priority: 2, name: 'Vicky' })
//   console.log('------ enqueue({ priority: 5, name: "Wendy" }) ------')
//   pq.enqueue({ priority: 5, name: 'Wendy' })
//   console.log('------ enqueue({ priority: 1, name: "Lisa" }) ------')
//   pq.enqueue({ priority: 1, name: 'Lisa' })
//   console.log('------ enqueue({ priority: 9, name: "Bossy" }) ------')
//   pq.enqueue({ priority: 9, name: 'Bossy' })
//   console.log('------ enqueue({ priority: 2, name: "Bo" }) ------')
//   pq.enqueue({ priority: 2, name: 'Bo' })
//   console.log('------ enqueue({ priority: 6, name: "Lulu" }) ------')
//   pq.enqueue({ priority: 6, name: 'Lulu' })
//   console.log('------ enqueue({ priority: 4, name: "Ray" }) ------')
//   pq.enqueue({ priority: 4, name: 'Ray' })
//   console.log(pq)
//   console.log('------ dequeue ------')
//   console.log(pq.dequeue())
//   console.log('------ dequeue ------')
//   console.log(pq.dequeue())
//   console.log('------ dequeue ------')
//   console.log(pq.dequeue())
//   console.log('------ dequeue ------')
//   console.log('------ enqueue({ priority: 9, name: "Boss" }) ------')
//   pq.enqueue({ priority: 9, name: 'Boss' })
//   console.log(pq.dequeue())
//   console.log('------ dequeue ------')
//   console.log(pq.dequeue())
//   console.log('------ dequeue ------')
//   console.log(pq.dequeue())
//   console.log('------ dequeue ------')
//   console.log(pq.dequeue())
//   console.log('------ dequeue ------')
//   console.log(pq.dequeue())
//   console.log('------ dequeue ------')
//   console.log(pq.dequeue())
//   console.log('------ dequeue ------')
//   console.log(pq.dequeue())
//   console.log('------ dequeue ------')
//   console.log(pq.dequeue())
//   console.log(pq)
// }
