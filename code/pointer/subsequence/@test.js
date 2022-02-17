const C = require('@config')
const U = require('@util')

const builtInput = ({ amountS, amountO }, guaranteed = false) => {
  // function
  const makeRandomLetter = () =>
    U.makeRandomLetter(C.a_z.concat([' ', ' ', ' ']))
  const makeRandomSequence = (amount) => {
    let output = ''

    for (let i = 0; i < amount; ) {
      const newLetter = makeRandomLetter()
      if (i === 0 && newLetter === ' ') continue
      output = output + newLetter
      i++
    }

    return output
  }
  const makeSubsequence = (amount, origin) =>
    origin.split('').reduce((total, value, index, array) => {
      const restS = amount - total.length
      const restO = array.length - index

      if (total.length === 0 && value === ' ') return total
      if (restS === 0) return total
      if (restS >= restO) return total + value
      if (U.makeRandomBoolean()) return total + value

      return total
    }, '')

  // run
  const originalStr = makeRandomSequence(amountO)
  const subsequenceStr = guaranteed
    ? makeSubsequence(amountS, originalStr)
    : makeRandomSequence(amountS)

  return { subsequenceStr, originalStr }
}

const runTest = (input, fn) => {
  const result = fn(input)

  if (result) {
    console.log(
      `"${input.subsequenceStr}" is a subsequence string of "${input.originalStr}".`
    )
  } else {
    console.log(
      `"${input.subsequenceStr}" is NOT a subsequence string of "${input.originalStr}".`
    )
  }
}

module.exports = { builtInput, runTest }
