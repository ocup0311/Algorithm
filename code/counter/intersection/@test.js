import * as C from '$config'
import * as U from '$util'

const builtArr = (amount) => {
  // var
  const output = []

  // run
  for (let i = 0; i < amount; ) {
    const randomNum = U.makeRandomN(100)
    const isDuplicate = output.some((v) => v === randomNum)

    if (isDuplicate) continue

    output.push(randomNum)

    i++
  }

  return output
}

export const builtInput_1to100 = (amount1, amount2) => {
  const arr1 = builtArr(amount1)
  const arr2 = builtArr(amount2)

  return { arr1, arr2 }
}

export const runTest = (input, fn) => {
  const result = fn(input)

  console.log(`------- Compare two array -------`)
  console.log(`Array1: ${input.arr1}`)
  console.log(`Array2: ${input.arr2}`)
  console.log(`result: ${result}`)
}
