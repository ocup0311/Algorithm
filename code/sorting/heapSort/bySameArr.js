// O(nlogn)

import * as U from '$util'

// main
const heapSortS = (originalArr) => {
  // var
  const sortedArr = [...originalArr]
  let heapSize = sortedArr.length
  let step = 0

  // function
  const maxHeapify = (ptr) => {
    step++

    // var
    let index_largest = ptr
    const index_child1 = (ptr + 1) * 2
    const index_child2 = index_child1 - 1

    // function
    const isBigger = (index) =>
      index < heapSize && sortedArr[index] > sortedArr[index_largest]

    // run
    if (isBigger(index_child1)) index_largest = index_child1
    if (isBigger(index_child2)) index_largest = index_child2

    if (index_largest !== ptr) {
      U.toSwapArr(sortedArr, ptr, index_largest)
      maxHeapify(index_largest)
    }
  }
  const makeMaxHeapTree = () => {
    let ptr = Math.floor(sortedArr.length / 2) - 1

    while (ptr >= 0) {
      maxHeapify(ptr)
      ptr--
    }
  }

  // run
  makeMaxHeapTree()
  while (heapSize > 0) {
    U.toSwapArr(sortedArr, 0, heapSize - 1)
    heapSize--
    maxHeapify(0)
  }

  return { sortedArr, step }
}

export default heapSortS
