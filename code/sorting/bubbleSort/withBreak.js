// add "isSwap" for break point to avoid sorting more after finish.
// best case performance: O(n^2) -> O(n)
// O(n^2)

import U from '$util'

function BubbleSortWBP(originalArr) {
  // var
  const sortedArr = [...originalArr]
  let step = 0

  // run
  for (let i = 0; i < sortedArr.length; i++) {
    let isSwap = false

    for (let j = 0; j < sortedArr.length - i - 1; j++) {
      if (sortedArr[j] > sortedArr[j + 1]) {
        U.toSwapArr(sortedArr, j, j + 1)
        isSwap = true
      }

      step++
    }

    if (isSwap === false) break
  }

  return { sortedArr, step }
}

export default BubbleSortWBP
