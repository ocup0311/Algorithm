// O(n^2)

import * as U from '$util'

function BubbleSort(originalArr) {
  // var
  const sortedArr = [...originalArr]
  let step = 0

  // run
  for (let i = 0; i < sortedArr.length; i++) {
    for (let j = 0; j < sortedArr.length - i - 1; j++) {
      if (sortedArr[j] > sortedArr[j + 1]) U.toSwapArr(sortedArr, j, j + 1)

      step++
    }
  }

  return { sortedArr, step }
}

export default BubbleSort
