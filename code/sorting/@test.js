import { performance } from 'perf_hooks'
import * as U from '$util'

const builtInput = (amount, sorted = false) => {
  let output = []

  for (let i = 0; i < amount; i++) {
    if (sorted) {
      output.push(i)
    } else {
      output.push(U.makeRandomZ(999))
    }
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

export { builtInput, runTest, runTestSet }
