import * as U from '$util'

export const builtInput = () => U.makeRandomN(9999)

export const runTest = (input, fn) => {
  const result = fn(input)

  console.log(`The ${input} item is ${result}.`)
}
