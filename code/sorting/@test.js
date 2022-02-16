const { performance } = require('perf_hooks')
const U = require('@util')

const builtInput = (amount) => {
  let output = []

  for (let i = 0; i < amount; i++) {
    output.push(U.makeRandomN(999))
  }

  return output
}

const runTest = (input, fn, isLog = true) => {
  const result = fn(input)

  if (isLog) {
    console.log(
      `------------- ${JSON.stringify(result.step)} steps -------------`
    )
    console.log(`input: ${JSON.stringify(input)}`)
    console.log(`output: ${JSON.stringify(result.sortedArr)}`)
  }

  return result
}

const runTestSet = ({ fn, inputSet }, isLog) => {
  if (isLog) console.log(`====== ${fn.name} ======`)
  const ts = performance.now()
  const result = inputSet.map((i) => runTest(i, fn, isLog))
  const te = performance.now()

  const steps = result.map((v) => v.step)
  const time = `${Math.round((te - ts) * 1000) / 1000} ms`
  const arr = result[0].sortedArr
  return { steps, time, arr }
}

module.exports = { builtInput, runTest, runTestSet }
