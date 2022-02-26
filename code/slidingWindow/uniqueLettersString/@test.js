import C from '$config'
import * as U from '$util'

export const builtInput = (amount) => {
  // var
  let output = ''

  // function
  const makeRandomLetter = () => U.makeRandomLetter(C.a_z.concat(C.A_Z))

  // run
  for (let i = 0; i < amount; i++) {
    const newLetter = makeRandomLetter()
    output = output + newLetter
  }

  return output
}

export const runTest = (input, fn) => {
  const result = fn(input)

  console.log(`String: ${input}`)
  console.log(`subString: ${result}`)

  console.log()
}
