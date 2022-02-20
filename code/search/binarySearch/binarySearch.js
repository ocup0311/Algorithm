// 需先排列數據。切一半找
// input:{ dataPool:[5,9,15,78,99], target:78 } output: 3
// O(logn)

import U from '$util'

// ===================== input =====================

const builtInput = (amount, guaranteed = false) => {
  // var
  let target = -1
  const dataPool = []

  // run
  for (let i = 0; i < amount; i++) {
    const randomNum = U.makeRandomN(100)
    dataPool.push(randomNum)
  }

  U.toSortNumber(dataPool)

  if (guaranteed) {
    target = dataPool[U.makeRandomIndex(amount)]
  } else {
    target = U.makeRandomN(100)
  }

  return { dataPool, target }
}

const input1 = builtInput(15)
const input2 = builtInput(20, true)
const input3 = builtInput(7)

// ===================== main =====================

function binarySearch({ dataPool, target }) {
  let [index_min, index_max] = [0, dataPool.length - 1]

  while (index_min <= index_max) {
    const index_middle = Math.round((index_min + index_max) / 2)

    switch (true) {
      case target > dataPool[index_middle]:
        index_min = index_middle + 1
        break

      case target < dataPool[index_middle]:
        index_max = index_middle - 1
        break

      default:
        return index_middle
    }
  }

  return -1
}

// ===================== test =====================

const runTest = (input) => {
  const result = binarySearch(input)

  console.log(`Data Pool: ${input.dataPool}`)

  if (result < 0) {
    console.log(`Can't find ${input.target}`)
  } else {
    console.log(`Found ${input.target} at index "${result}"`)
  }
}

runTest(input1)
runTest(input2)
runTest(input3)
