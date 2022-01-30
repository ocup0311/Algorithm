const builtInput = ({ amountS, amountO }, guaranteed = false) => {
  let subsequenceStr = ''
  let originalStr = ''

  // function
  const makeRandomN = (max) => Math.round(Math.random() * max)
  const makeRandomIndex = (max) => Math.floor(Math.random() * max)
  const makeRandomLetter = () => {
    const A_Z = [
      'A',
      'B',
      'C',
      'D',
      'E',
      'F',
      'G',
      'H',
      'I',
      'J',
      'K',
      'L',
      'M',
      'N',
      'O',
      'P',
      'Q',
      'R',
      'S',
      'T',
      'U',
      'V',
      'W',
      'X',
      'Y',
      'Z',
    ]
    return A_Z[makeRandomIndex(26)]
  }
  const makeRandomSequence = (amount) => {
    let output = ''

    for (let i = 0; i < amount; i++) {
      const newLetter = makeRandomLetter()
      output = output + newLetter
    }

    return output
  }
  const makeSubsequence = (amount, origin) =>
    origin.split('').reduce((total, value, index, array) => {
      const restS = amount - total.length
      const restO = array.length - index
      if (restS === 0) return total
      if (restS >= restO) return total + value
      if (makeRandomN(1)) return total + value

      return total
    }, '')

  // run
  originalStr = makeRandomSequence(amountO)
  subsequenceStr = guaranteed
    ? makeSubsequence(amountS, originalStr)
    : makeRandomSequence(amountS)
  console.log({ subsequenceStr, originalStr })

  return { subsequenceStr, originalStr }
}

const runTest = (input, fn) => {
  const result = fn(input)

  if (result) {
    console.log(
      `${input.subsequenceStr} is a subsequence string of ${input.originalStr}.`
    )
  } else {
    console.log(
      `${input.subsequenceStr} is NOT a subsequence string of ${input.originalStr}.`
    )
  }
}

module.exports = { builtInput, runTest }
