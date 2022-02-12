const U = require('@util')

const builtInput = (amount) => {
  // var
  const _max = amount * 2
  const dataPool = []

  // run
  const target = Math.round(U.makeRandomN((amount / 3) ** 2) * 3.5)

  for (let i = 0; i < amount; ) {
    // dataPool.push(U.makeRandomZ(_max))
    dataPool.push(U.makeRandomN(_max))

    i++
  }

  return { dataPool, target }
}

const runTest = (input, fn) => {
  const result = fn(input)

  // console.log(`Data Pool: ${input.dataPool}, target: ${input.target}`)
  console.log(`${fn.name}: ${result}`)

  console.log()
}

module.exports = { builtInput, runTest }
