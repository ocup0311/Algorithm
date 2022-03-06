// by Dynamic Programming
// O(n * m)

const lcs = (_str1, _str2) => {
  const [str1, str2] = [' ' + _str1, ' ' + _str2]
  const [rowSize, colSize] = [str1.length, str2.length]
  const table = new Array(rowSize)
  let [ptrR, ptrC] = [1, 1]
  let step = 0

  // function
  const initialTable = () => {
    const initialItem = { length: 0, previous: null }

    table[0] = new Array(colSize).fill(initialItem)

    for (let i = 1; i < rowSize; i++) {
      const newArr = new Array(colSize)
      newArr[0] = initialItem
      table[i] = newArr
    }
  }

  const fillTable = () => {
    step++

    // exception
    if (str1[ptrR] === str2[ptrC]) {
      const previous = table[ptrR - 1][ptrC - 1]

      table[ptrR][ptrC] = {
        length: previous.length + 1,
        previous,
        same: str1[ptrR],
      }
      return
    }

    // run
    const up = table[ptrR - 1][ptrC]
    const left = table[ptrR][ptrC - 1]
    let previous

    if (up.length > left.length) previous = up
    else previous = left

    table[ptrR][ptrC] = { length: previous.length, previous }
  }

  const buildResult = () => {
    let ptr = table[rowSize - 1][colSize - 1]
    const length = ptr.length
    let result = ''

    while (ptr !== null) {
      if (ptr.same) result = ptr.same + result
      ptr = ptr.previous
    }

    return { result, length, step }
  }

  // run
  initialTable()

  while (ptrR < rowSize) {
    while (ptrC < colSize) {
      fillTable()
      ptrC++
    }

    ptrR++
    ptrC = 1
  }

  return buildResult()
}

export default lcs
