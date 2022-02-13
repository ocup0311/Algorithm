const U = require('@util')

const builtInput = (amount, size = 3) => {
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

const runTest = (input, fn) => {
  const result = fn(input)

  console.log(`Data Pool: ${input.dataPool}, size: ${input.size}`)
  console.log(`${fn.name}: ${result}`)

  console.log()
}

module.exports = { builtInput, runTest }
