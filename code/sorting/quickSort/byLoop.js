// O(nlogn)

import * as U from '$util'

// main
const quickSort = (originalArr) => {
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
    const stack = new Array(end + 1 - start).fill(0)
    let top = -1

    stack[++top] = start
    stack[++top] = end

    while (top >= 0) {
      const newEnd = stack[top--]
      const newStart = stack[top--]
      const middle = partition(newStart, newEnd)

      if (middle - 1 > newStart) {
        stack[++top] = newStart
        stack[++top] = middle - 1
      }

      if (middle + 1 < newEnd) {
        stack[++top] = middle + 1
        stack[++top] = newEnd
      }
    }
  }

  // run
  sort(0, sortedArr.length - 1)

  return { sortedArr, step }
}

export default quickSort
