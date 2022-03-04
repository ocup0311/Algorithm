// O(n^2)

import * as U from '$util'

const InsertionSort = (originalArr) => {
  // var
  const sortedArr = [...originalArr]
  let step = 0

  // run
  for (let i = 1; i < sortedArr.length; i++) {
    let j = i

    while (j > 0 && sortedArr[j - 1] > sortedArr[j]) {
      U.toSwapArr(sortedArr, j - 1, j)

      step++
      j--
    }
  }

  return { sortedArr, step }
}

export default InsertionSort
