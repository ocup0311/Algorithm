export const runTest = (input, fn, isLog = false) => {
  const result = fn(input)

  console.log(`The number of ${input} Queens solution is ${result.length}`)

  if (isLog) {
    console.log('There are --------------------------')
    result.forEach((v) => {
      console.log(v)
    })
    console.log('------------------------------------\n')
  }
}
