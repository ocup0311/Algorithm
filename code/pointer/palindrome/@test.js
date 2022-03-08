import * as C from '$config'
import * as U from '$util'

export const builtInput = (amount, guaranteed = false) => {
  // var
  let output = ''

  // function
  const makeRandomLetter = () => U.makeRandomLetter(C.A_Z)

  // run
  if (guaranteed) {
    let tempArr = []

    for (let i = 0; i < amount / 2; i++) {
      const newLetter = makeRandomLetter()
      tempArr[i] = newLetter
      tempArr[amount - i - 1] = newLetter
    }

    output = tempArr.join('')
  } else {
    for (let i = 0; i < amount; i++) {
      const newLetter = makeRandomLetter()
      output = output + newLetter
    }
  }

  return output
}

export const runTest = (input, fn) => {
  const result = fn(input)

  if (result) {
    console.log(`${input} is a palindrome.`)
  } else {
    console.log(`${input} is NOT a palindrome.`)
  }
}
