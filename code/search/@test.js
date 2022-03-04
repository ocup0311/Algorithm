import * as U from '$util'

export const builtInput = (amount, guaranteed = false) => {
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

export const runTest = (input, fn) => {
  const result = fn(input)

  console.log(`Data Pool: ${input.dataPool}`)

  if (result < 0) {
    console.log(`Can't find ${input.target}`)
  } else {
    console.log(`Found ${input.target} at index "${result}"`)
  }
}
