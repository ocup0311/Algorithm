import * as C from '$config'
import * as U from '$util'

export const builtInput = () => U.makeRandomN(1000)

export const runTest = (input, fn) => {
  const result = fn(input)

  console.log(`The ${input} item is ${result}.`)
}
