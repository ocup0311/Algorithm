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
  // function
  const cb = (...arg) => console.log(`${arg}\n`)

  // run
  console.log('=================================================')
  console.log(`Data Pool: ${input.dataPool}, size: ${input.size}`)
  fn(input, cb)
}
