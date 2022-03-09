export const runTest = (input, fn, isLog = false) => {
  const result = fn(input)

  console.log(
    `The number of ${input} Queens solution is ${result.output.length}`
  )
  console.log(`steps: ${result.step}`)

  if (isLog) {
    console.log('There are --------------------------')
    result.output.forEach((v) => {
      console.log(v)
    })
    console.log('------------------------------------\n')
  }
}
