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
    average = (x - y) / 2
  } else {
    average = getRandomZ(50)
  }

  return { dataPool, average }
}

const test = (input, fn) => {
  const result = fn(input)

  console.log(`Data Pool: ${input.dataPool}`)
  console.log(`Average: ${input.average}`)

  if (Array.isArray(result) && result.length > 0) {
    console.log(`Pair: [${result.join('] / [')}]`)
  } else {
    console.log(`Can't find any average pair!`)
  }
  console.log()
}

module.exports = { builtInput, test }
