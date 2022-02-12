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
    if (ptr === 0 || Object.keys(counter).every((k) => counter[k] < 2)) {
      const letter = input[ptr]
      counter[letter] = counter[letter] + 1 || 1

      tempStr = tempStr + letter

      if (subStr.length < tempStr.length) subStr = tempStr

      ptr++
    } else {
      const letter = tempStr[0]
      counter[letter] = counter[letter] - 1

      tempStr = tempStr.slice(1)
    }
  }

  return subStr
}

module.exports = { uniqueLettersString }
