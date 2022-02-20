// O(n)
// 用 string + 3個 pointer，可不用於 loop 中 slice。

import U from '$util'

function uniqueLettersString(input) {
  // pointer
  let [start, start_T, end_T] = [0, 0, 0]

  // var
  let tempStr = ''
  let subStr = ''
  const counter = {}

  // run
  while (end_T < input.length) {
    const newLetter = input[end_T]
    const newLetter_low = newLetter.toLowerCase()
    const isExist = counter[newLetter_low] > 0

    if (isExist) {
      const removeLetter_low = tempStr[start_T].toLowerCase()

      U.toDownCounter(counter, removeLetter_low)
      start_T++
    } else {
      end_T++

      U.toUpCounter(counter, newLetter_low)
      tempStr = tempStr + newLetter

      if (subStr.length - start < end_T - start_T) {
        subStr = tempStr
        start = start_T
      }
    }
  }

  return subStr.slice(start)
}

export { uniqueLettersString }
