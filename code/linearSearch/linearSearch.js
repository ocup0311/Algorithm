// 照線性順序，找到目標｜全找完找不到
// ===================== input =====================

const builtInput = (amount, canFound = false) => {
  let target = -1
  const dataPool = []

  for (let i = 0; i < amount; i++) {
    const randomNum = Math.ceil(Math.random() * 100)
    dataPool.push(randomNum)
  }

  if (canFound) {
    target = dataPool[Math.floor(Math.random() * amount)]
  } else {
    target = Math.ceil(Math.random() * 100)
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

const test = (input) => {
  const result = linearSearch(input)

  console.log(`Data Pool: ${input.dataPool}`)

  if (result < 0) {
    console.log(`Can't find ${input.target}`)
  } else {
    console.log(`Found ${input.target} at index "${result}"`)
  }
}

test(input1)
test(input2)
test(input3)
