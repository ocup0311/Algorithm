// O(nlogn)

const U = require('@util')

// main
function heapSortN(originalArr) {
  // var
  const tempArr = [...originalArr]
  const sortedArr = []
  let step = 0

  // function
  const minHeapify = (ptr) => {
    step++
    const child = (ptr + 1) * 2
    const child_min = tempArr[child] < tempArr[child - 1] ? child : child - 1

    if (tempArr[child_min] === undefined) return

    if (tempArr[ptr] > tempArr[child_min]) {
      U.toSwapArr(tempArr, ptr, child_min)
      minHeapify(child_min)
    }
  }
  const makeMinHeapTree = (arr) => {
    ptr = Math.floor(arr.length / 2) - 1

    while (ptr >= 0) {
      minHeapify(ptr)
      ptr--
    }
  }
  const makeSortedArr = (arr) => {
    while (arr.length > 1) {
      sortedArr.push(arr[0])
      arr[0] = arr.pop()
      minHeapify(0)
    }
    sortedArr.push(arr[0])
  }

  // run
  makeMinHeapTree(tempArr)
  makeSortedArr(tempArr)

  return { sortedArr, step }
}

module.exports = heapSortN
