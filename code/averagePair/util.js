const builtInput = (amount, guaranteed = false) => {
  const _max = amount * 2
  const dataPool = []
  let target = -1

  // function
  const getRandomZ = (max) => Math.ceil((Math.random() - 0.5) * (max * 2))
  const getRandomIndex = (max) => Math.floor(Math.random() * max)
  const toSortNumber = (numArr) => numArr.sort((a, b) => a - b)

  // run
  for (let i = 0; i < amount; ) {
    const randomNum = getRandomZ(_max)
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
    target = (x - y) / 2
  } else {
    target = getRandomZ(_max)
  }

  return { dataPool, target }
}

const test = (input, fn) => {
  const result = fn(input)

  console.log(`Data Pool: ${input.dataPool}`)
  console.log(`Average: ${input.target}`)

  if (Array.isArray(result) && result.length > 0) {
    console.log(`Pair: [${result.join('] / [')}]`)
  } else {
    console.log(`Can't find any average pair!`)
  }
  console.log()
}

module.exports = { builtInput, test }
