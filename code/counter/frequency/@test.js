import * as C from '$config'
import * as U from '$util'

export const builtInput = ({ amount1, amount2 }, guaranteed = false) => {
  // function
  const makeRandomStr = (amount) => U.makeRandomStr(C.A_Z, amount)

  const messupStr = (str) => {
    let output = ''

    while (str.length > 0) {
      const randomIndex = U.makeRandomIndex(str.length)
      output = output + str[randomIndex]
      str = str.slice(0, randomIndex) + str.slice(randomIndex + 1, str.length)
    }

    return output
  }

  // run
  const str1 = makeRandomStr(amount1)
  const str2 = guaranteed ? messupStr(str1) : makeRandomStr(amount2)

  return { str1, str2 }
}

export const runTest = (input, fn) => {
  const result = fn(input)

  console.log(`------- Compare two string -------`)
  console.log(`string1: ${input.str1}`)
  console.log(`string2: ${input.str2}`)
  console.log(`Is the frequency same: ${result}`)
}
