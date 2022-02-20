import U from '$util'

const builtInput = () => U.makeRandomN(9999)

const runTest = (input, fn) => {
  const result = fn(input)

  console.log(`The ${input} item is ${result}.`)
}

export { builtInput, runTest }
