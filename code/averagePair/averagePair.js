// 在一 sorted array 中，找出所有兩兩平均等於給定的數字
// input:{ dataPool:[-11, 0, 1, 2, 3, 9, 14, 17, 21], average:1.5 }
// output: [[-11, 14], [0, 3], [1, 2]]
// O(n^2)
// ===================== input =====================

const builtInput = (amount, guaranteed = false) => {
  let average = -1
  const dataPool = []

  // function
  const getRandomZ = (max) => Math.ceil((Math.random() - 0.5) * (max * 2))
  const getRandomIndex = (size) => Math.floor(Math.random() * size)
  const toSortNumber = (numArr) => numArr.sort((a, b) => a - b)

  // run
  for (let i = 0; i < amount; ) {
    const randomNum = getRandomZ(50)
    const isDuplicate = dataPool.some((v) => v === randomNum)

    if (isDuplicate) continue

    dataPool.push(randomNum)

    i++
  }

  toSortNumber(dataPool)

  if (guaranteed) {
    let x = dataPool[getRandomIndex(amount)]
    let y = dataPool[getRandomIndex(amount)]
    while (x === y) y = dataPool[getRandomIndex(amount)]
    average = Math.abs(x - y)
  } else {
    average = getRandomZ(50)
  }

  return { dataPool, average }
}

const input1 = builtInput(15)
const input2 = builtInput(20, true)
const input3 = builtInput(7)

// ===================== main =====================

function averagePair({ dataPool, average }) {
  return dataPool.reduce((total, value, index, array) => {
    const pairNum = array
      .slice(index + 1)
      .find((v) => v === average * 2 - value)

    if (pairNum !== undefined) total.push([value, pairNum])

    return total
  }, [])
}

// ===================== test =====================

const test = (input) => {
  const result = averagePair(input)

  console.log(`Data Pool: ${input.dataPool}`)

  if (Array.isArray(result) && result.length > 0) {
    console.log(`Found ${input.average} at [${result.join('] / [')}]`)
  } else {
    console.log(`Can't find any average pair of ${input.average}`)
  }
  console.log()
}

test({ dataPool: [-11, 0, 1, 2, 3, 9, 14, 17, 21], average: 1.5 })
test(input1)
test(input2)
test(input3)
