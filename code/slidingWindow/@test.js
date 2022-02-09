const builtInput = (amount, size = 3) => {
  const _max = amount * 2
  const dataPool = []

  // function
  const makeRandomZ = (max) => Math.ceil((Math.random() - 0.5) * (max * 2))

  // run
  for (let i = 0; i < amount; ) {
    const randomNum = makeRandomZ(_max)

    dataPool.push(randomNum)

    i++
  }

  return { dataPool, size }
}

const runTest = (input, fn) => {
  const result = fn(input)

  console.log(`Data Pool: ${input.dataPool}, size: ${input.size}`)
  console.log(`${fn.name}: ${result}`)

  console.log()
}

module.exports = { builtInput, runTest }
