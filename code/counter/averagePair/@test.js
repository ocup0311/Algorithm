import U from '$util'

const builtInput = (amount, guaranteed = false) => {
  // var
  const _max = amount * 2
  const dataPool = []
  let target = -1

  // run
  for (let i = 0; i < amount; ) {
    const randomNum = U.makeRandomZ(_max)
    const isDuplicate = dataPool.some((v) => v === randomNum)

    if (isDuplicate) continue

    dataPool.push(randomNum)

    i++
  }

  U.toSortNumber(dataPool)

  if (guaranteed) {
    let x = dataPool[U.makeRandomIndex(amount)]
    let y = dataPool[U.makeRandomIndex(amount)]

    while (x === y) y = dataPool[U.makeRandomIndex(amount)]

    target = (x - y) / 2
  } else {
    target = U.makeRandomZ(_max)
  }

  return { dataPool, target }
}

const runTest = (input, fn) => {
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

export { builtInput, runTest }
