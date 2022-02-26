import * as U from '$util'

export const builtInput = (amount, size = 3) => {
  // var
  const _max = amount * 2
  const dataPool = []

  // run
  for (let i = 0; i < amount; ) {
    dataPool.push(U.makeRandomZ(_max))

    i++
  }

  return { dataPool, size }
}

export const runTest = (input, fn) => {
  const result = fn(input)

  console.log(`Data Pool: ${input.dataPool}, size: ${input.size}`)
  console.log(`${fn.name}: ${result}`)

  console.log()
}
