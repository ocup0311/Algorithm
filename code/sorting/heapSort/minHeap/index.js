// O(nlogn)

const U = require('@util')

// main
function minHeap(originalArr) {
  // var
  const tempArr = [...originalArr]
  const sortedArr = []

  // function
  const runMinHeap = (ptr) => {
    const child = (ptr + 1) * 2
    const child_min = tempArr[child] < tempArr[child - 1] ? child : child - 1

    if (tempArr[child_min] === undefined) return

    if (tempArr[ptr] > tempArr[child_min]) {
      U.toSwapArr(tempArr, ptr, child_min)
      runMinHeap(child_min)
    }
  }
  const makeMinHeapTree = (arr) => {
    ptr = Math.floor(arr.length / 2) - 1

    while (ptr >= 0) {
      runMinHeap(ptr)
      ptr--
    }
  }
  const makeSortedArr = (arr) => {
    while (arr.length > 1) {
      sortedArr.push(arr[0])
      arr[0] = arr.pop()
      runMinHeap(0)
    }
    sortedArr.push(arr[0])
  }

  // run
  makeMinHeapTree(tempArr)
  makeSortedArr(tempArr)

  return { sortedArr, step: 0 }
}

module.exports = minHeap
