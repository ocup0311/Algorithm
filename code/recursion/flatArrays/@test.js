const U = require('@util')

const builtInput = (amount) => {
  let output = []

  for (let i = 0; i < amount; ) {
    if (U.makeRandomBoolean(0.5)) {
      output.push(U.makeRandomN(9))
      i++
    } else {
      const x = U.makeRandomN(amount - i) || 1
      output.push(builtInput(x))
      i = i + x
    }
  }

  return output
}

const runTest = (input, fn) => {
  const result = fn(input)

  console.log(`input: ${JSON.stringify(input)}`)
  console.log(`output: ${JSON.stringify(result)}`)
}

module.exports = { builtInput, runTest }
