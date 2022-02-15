const U = require('@util')

const builtInput = () => U.makeRandomN(1000)

const runTest = (input, fn) => {
  const result = fn(input)

  console.log(`The ${input} item is ${result}.`)
}

module.exports = { builtInput, runTest }
