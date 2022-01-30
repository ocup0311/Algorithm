const builtInput = (amount, guaranteed = false) => {
  let output = ''

  // function
  const getRandomIndex = (max) => Math.floor(Math.random() * max)
  const getRandomLetter = () => {
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
    return A_Z[getRandomIndex(26)]
  }

  // run

  if (guaranteed) {
    let tempArr = []

    for (let i = 0; i < amount / 2; i++) {
      const newLetter = getRandomLetter()
      tempArr[i] = newLetter
      tempArr[amount - i - 1] = newLetter
    }

    output = tempArr.join('')
  } else {
    for (let i = 0; i < amount; i++) {
      const newLetter = getRandomLetter()
      output = output + newLetter
    }
  }

  return output
}

const runTest = (input, fn) => {
  const result = fn(input)

  if (result) {
    console.log(`${input} is a palindrome.`)
  } else {
    console.log(`${input} is NOT a palindrome.`)
  }
}

module.exports = { builtInput, runTest }
