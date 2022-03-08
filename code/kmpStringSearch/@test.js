import * as C from '$config'
import * as U from '$util'

export const builtInput = ({ amountT, amountD }, guaranteed = false) => {
  // function
  const makeRandomLetter = () => U.makeRandomLetter(C.a_z)

  const makeRandomWord = (amount) => {
    let output = ''

    for (let i = 0; i < amount; ) {
      const newLetter = makeRandomLetter()
      output = output + newLetter
      i++
    }

    return output
  }

  const makeRandomSequence = (amount) => {
    let output = ''

    // fun
    for (let i = 0; i < amount; ) {
      const newLetter = makeRandomLetter()
      if (i === 0 && newLetter === ' ') continue
      output = output + newLetter
      i++
    }

    return output
  }

  const makeGuaranteedWord = (amount, origin) => {
    const startIndex = U.makeRandomIndex(origin.length - amount)

    return origin.slice(startIndex, amount + 1)
  }

  // run
  const dataPool = makeRandomSequence(amountD)
  const target = guaranteed
    ? makeGuaranteedWord(amountT, dataPool)
    : makeRandomWord(amountT)

  return { target, dataPool }
}

export const runTest = (input, fn) => {
  const result = fn(input)

  console.log(`\n------------- Data Pool -------------`)
  console.log(input.dataPool)
  console.log(`\n------------- Target -------------`)
  console.log(input.target)
  console.log(`\n------------- Result -------------`)
  console.log(result)
}
