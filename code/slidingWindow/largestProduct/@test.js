import * as U from '$util'

export const builtInput = (amount, size = 3) => {
  // var
  const _max = 9
  const dataPool = []

  // run
  for (let i = 0; i < amount; ) {
    dataPool.push(U.makeRandomN(_max))

    i++
  }

  return { dataPool, size }
}

export const runTest = (input, fn, showData = true) => {
  const result = fn(input)

  if (showData) console.log(`Data Pool: ${input.dataPool}, size: ${input.size}`)
  console.log(`${fn.name}: ${result}`)

  console.log()
}
