// O(n^2)

import U from '$util'

function InsertionSort(originalArr) {
  // var
  const sortedArr = [...originalArr]
  let step = 0

  // run
  for (let i = 1; i < sortedArr.length; i++) {
    const key = sortedArr[i]
    let j = i

    while (j > 0 && sortedArr[j - 1] > key) {
      sortedArr[j] = sortedArr[j - 1]

      step++
      j--
    }

    sortedArr[j] = key
  }

  return { sortedArr, step }
}

export default InsertionSort
