const { performance } = require('perf_hooks')
const U = require('@util')

const builtInput = (amount) => {
  let output = []

  for (let i = 0; i < amount; i++) {
    output.push(U.makeRandomN(999))
  }

  return output
}

const runTest = (input, fn) => {
  const result = fn(input)

  console.log(
    `------------- ${JSON.stringify(result.step)} steps -------------`
  )
  console.log(`input: ${JSON.stringify(input)}`)
  console.log(`output: ${JSON.stringify(result.sortedArr)}`)

  return result.step
}

const runTestSet = (fn, ...inputs) => {
  console.log('====== InsertionSort ======')
  const ts = performance.now()
  const steps = inputs.map((i) => runTest(i, fn))
  const te = performance.now()

  const times = `${Math.round((te - ts) * 1000) / 1000} ms`
  return { steps, times }
}

module.exports = { builtInput, runTest, runTestSet }
