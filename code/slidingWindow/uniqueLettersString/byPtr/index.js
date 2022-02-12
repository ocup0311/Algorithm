// O()

const U = require('@util')

function uniqueLettersString(input) {
  // pointer
  let ptr = 0

  // var
  let tempStr = ''
  let subStr = ''
  const counter = {}

  // run
  while (ptr < input.length) {
    const newLetter = input[ptr]
    const newLetter_low = newLetter.toLowerCase()
    const isExist = counter[newLetter_low] > 0

    if (isExist) {
      const removeLetter_low = tempStr[0].toLowerCase()

      U.toDownCounter(counter, removeLetter_low)
      tempStr = tempStr.slice(1)
    } else {
      ptr++

      U.toUpCounter(counter, newLetter_low)
      tempStr = tempStr + newLetter

      if (subStr.length < tempStr.length) subStr = tempStr
    }
  }

  return subStr
}

module.exports = { uniqueLettersString }
