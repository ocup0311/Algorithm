// O(nlogn)

const U = require('@util')

// main
function maxHeap(originalArr) {
  // var
  const tempArr = [...originalArr]
  const sortedArr = []

  // function
  const runMaxHeap = (ptr) => {
    // 稍後處理最後一個
    const child = (ptr + 1) * 2
    const child_max = tempArr[child] > tempArr[child - 1] ? child : child - 1

    if (tempArr[child_max] === undefined) return

    if (tempArr[ptr] < tempArr[child_max]) {
      U.toSwapArr(tempArr, ptr, child_max)
      runMaxHeap(child_max)
    }
  }
  const makeMaxHeapTree = (arr) => {
    ptr = Math.floor(arr.length / 2) - 1

    while (ptr >= 0) {
      runMaxHeap(ptr)
      ptr--
    }
  }
  const makeSortedArr = (arr) => {
    while (arr.length > 1) {
      sortedArr.push(arr[0])
      arr[0] = arr.pop()
      runMaxHeap(0)
    }
    sortedArr.push(arr[0])
  }

  // run
  makeMaxHeapTree(tempArr)
  makeSortedArr(tempArr)

  return { sortedArr, step: 0 }
}

module.exports = maxHeap
