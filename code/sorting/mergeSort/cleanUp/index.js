// O(nlogn)

const U = require('@util')

// main
function mergeSort(originalArr) {
  // var
  let step = 0

  // function
  const merge = (arr1, arr2) => {
    const obj1 = { arr: arr1, ptr: 0 }
    const obj2 = { arr: arr2, ptr: 0 }
    const mergedArr = []

    // function
    const currentItem = (obj) => obj.arr[obj.ptr]
    const isNotDone = (obj) => obj.ptr < obj.arr.length
    const pushToResult = (obj) => {
      mergedArr.push(currentItem(obj))
      obj.ptr++
      step++
    }

    // run
    while (isNotDone(obj1) && isNotDone(obj2)) {
      if (currentItem(obj1) < currentItem(obj2)) pushToResult(obj1)
      else pushToResult(obj2)
    }

    while (isNotDone(obj1)) pushToResult(obj1)
    while (isNotDone(obj2)) pushToResult(obj2)

    return mergedArr
  }

  const sort = (arr) => {
    if (arr.length < 2) return arr

    const middleIndex = Math.ceil(arr.length / 2)
    const arr1 = arr.slice(0, middleIndex)
    const arr2 = arr.slice(middleIndex, arr.length)

    return merge(sort(arr1), sort(arr2))
  }

  // run
  const sortedArr = sort(originalArr)

  return { sortedArr, step }
}

module.exports = mergeSort
