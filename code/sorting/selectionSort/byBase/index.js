// O(n^2)

const U = require('@util')

function selectionSort(originalArr) {
  // var
  const sortedArr = [...originalArr]
  let step = 0

  // run
  for (let i = 0; i < sortedArr.length - 1; i++) {
    let minIndex = i

    for (let j = i + 1; j < sortedArr.length; j++) {
      if (sortedArr[minIndex] > sortedArr[j]) minIndex = j

      step++
    }

    U.toSwapArr(sortedArr, minIndex, i)
  }

  return { sortedArr, step }
}

module.exports = selectionSort
