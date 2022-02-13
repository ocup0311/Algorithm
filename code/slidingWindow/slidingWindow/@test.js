const U = require('@util')

const builtInput = (amount, size = 3) => {
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

const runTest = (input, fn) => {
  // function
  const callBack = (...arg) => console.log(`${arg}\n`)

  // run
  console.log('=================================================')
  console.log(`Data Pool: ${input.dataPool}, size: ${input.size}`)
  fn(input, callBack)
}

module.exports = { builtInput, runTest }
