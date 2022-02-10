// 比對兩個 string ，是否有一樣的字母組成。
// input:'abbcd' & 'bcbda' output: true
// input:'abbcd' & 'abbcc' output: false
// input:'abbcd' & 'abbcdd' output: false
// O(n)

const C = require('../@config')
const U = require('../@util')

// ===================== input =====================

const builtInput = ({ amount1, amount2 }, guaranteed = false) => {
  // function
  const makeRandomStr = (amount) => U.makeRandomStr(C.A_Z, amount)

  const messupStr = (str) => {
    let output = ''

    while (str.length > 0) {
      const randomIndex = U.makeRandomIndex(str.length)
      output = output + str[randomIndex]
      str = str.slice(0, randomIndex) + str.slice(randomIndex + 1, str.length)
    }

    return output
  }

  // run
  const str1 = makeRandomStr(amount1)
  const str2 = guaranteed ? messupStr(str1) : makeRandomStr(amount2)

  return { str1, str2 }
}

const input1 = builtInput({ amount1: 5, amount2: 5 })
const input2 = builtInput({ amount1: 20, amount2: 20 }, true)
const input3 = builtInput({ amount1: 7, amount2: 8 })

// ===================== main =====================

function frequency({ str1, str2 }) {
  if (str1.length !== str2.length) return false

  const itemList = {}

  // function
  const addItemToList = (str) => {
    for (let i = 0; i < str.length; i++) {
      itemList[str[i]] = itemList[str[i]] + 1 || 1
    }
  }

  const minusItemToList = (str) => {
    for (let i = 0; i < str.length; i++) {
      itemList[str[i]] = itemList[str[i]] ? itemList[str[i]] - 1 : -1
    }
  }

  // run
  addItemToList(str1)
  minusItemToList(str2)

  for (let item in itemList) {
    if (itemList[item] !== 0) return false
  }

  return true
}

// ===================== test =====================

const runTest = (input) => {
  const result = frequency(input)

  console.log(`------- Compare two string -------`)
  console.log(`string1: ${input.str1}`)
  console.log(`string2: ${input.str2}`)
  console.log(`Is the frequency same: ${result}`)
}

runTest({ str1: 'abbcd', str2: 'bcbda' })
runTest(input1)
runTest(input2)
runTest(input3)
