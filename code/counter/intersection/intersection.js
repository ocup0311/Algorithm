// 比對兩個 array 相同之處
// input:[5,3,9] & [7,9,3,2] output:[3,9]
// O(n)
// 註：個別 array 中，每項不重複，才可用此法。否則需細修 itemList 的計數法。

const U = require('@util')

// ===================== input =====================

const builtArr = (amount) => {
  // var
  const output = []

  // run
  for (let i = 0; i < amount; ) {
    const randomNum = U.makeRandomN(100)
    const isDuplicate = output.some((v) => v === randomNum)

    if (isDuplicate) continue

    output.push(randomNum)

    i++
  }

  return output
}

const builtInput_1to100 = (amount1, amount2) => {
  const arr1 = builtArr(amount1)
  const arr2 = builtArr(amount2)

  return { arr1, arr2 }
}

const input1 = builtInput_1to100(5, 5)
const input2 = builtInput_1to100(20, 18)
const input3 = builtInput_1to100(7, 100)

// ===================== main =====================

function intersection({ arr1, arr2 }) {
  const output = []
  const itemList = {}

  // function
  const addItemToList = (arr) => {
    arr.forEach((i) => {
      itemList[i] = itemList[i] + 1 || 1
    })
  }

  // run
  addItemToList(arr1)
  addItemToList(arr2)

  for (let item in itemList) {
    if (itemList[item] === 2) output.push(item)
  }

  return output
}

// ===================== test =====================

const runTest = (input) => {
  const result = intersection(input)

  console.log(`------- Compare two array -------`)
  console.log(`Array1: ${input.arr1}`)
  console.log(`Array2: ${input.arr2}`)
  console.log(`result: ${result}`)
}

runTest({ arr1: [99, 7, 9, 3, 13], arr2: [3, 9, 7, 11] })
runTest(input1)
runTest(input2)
runTest(input3)