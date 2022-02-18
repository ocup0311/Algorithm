// O(nlogn)

const U = require('@util')

// main
function quickSort(originalArr) {
  // var
  let step = 0
  const sortedArr = [...originalArr]

  // function
  const partition = (start, end) => {
    let ptr = start

    for (let i = start; i < end; i++) {
      step++

      if (sortedArr[i] < sortedArr[end]) {
        if (ptr !== i) U.toSwapArr(sortedArr, i, ptr)
        ptr++
      }
    }

    U.toSwapArr(sortedArr, end, ptr)

    return ptr
  }
  const sort = (start, end) => {
    if (start < end) {
      const middle = partition(start, end)
      sort(start, middle - 1)
      sort(middle + 1, end)
    }
  }

  // run
  sort(0, sortedArr.length - 1)

  return { sortedArr, step }
}

module.exports = quickSort
