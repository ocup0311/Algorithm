// 照線性順序，找到目標｜全找完找不到
// input:{ dataPool:[87,5,13,9,15,78,99], target:78 } output: 5
// O(n)
// ===================== input =====================

const builtInput = (amount, guaranteed = false) => {
  let target = -1
  const dataPool = []

  // function
  const getRandomN = (max) => Math.ceil(Math.random() * max)
  const getRandomIndex = (size) => Math.floor(Math.random() * size)

  // run
  for (let i = 0; i < amount; i++) {
    const randomNum = getRandomN(100)
    dataPool.push(randomNum)
  }

  if (guaranteed) {
    target = dataPool[getRandomIndex(amount)]
  } else {
    target = getRandomN(100)
  }

  return { dataPool, target }
}

const input1 = builtInput(15)
const input2 = builtInput(20, true)
const input3 = builtInput(7)

// ===================== main =====================

function linearSearch({ dataPool, target }) {
  for (let i = 0; i < dataPool.length; i++) {
    if (dataPool[i] === target) {
      return i
    }
  }

  return -1
}

// ===================== test =====================

const runTest = (input) => {
  const result = linearSearch(input)

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
