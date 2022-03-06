export const runTest = (input, fn, isLog = false) => {
  const result = fn(input)

  console.log(`The number of ${input} Queens solution is ${result.num}`)

  if (isLog) {
    console.log('There are --------------------------')
    result.output.forEach((v) => {
      console.log(v)
    })
    console.log('------------------------------------\n')
  }
}
