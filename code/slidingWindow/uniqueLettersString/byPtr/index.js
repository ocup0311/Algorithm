// O(n)
// (X) 用 string + 1個 pointer，移除前面時需要於 loop 中 slice，為 O(n)，會多花時間。
// (O) string slice 為 O(1)，所以可以直接用 slice。

import * as U from '$util'

export const uniqueLettersString = (input) => {
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
      tempStr = tempStr.slice(1) // O(1)
    } else {
      ptr++

      U.toUpCounter(counter, newLetter_low)
      tempStr = tempStr + newLetter

      if (subStr.length < tempStr.length) subStr = tempStr
    }
  }

  return subStr
}
