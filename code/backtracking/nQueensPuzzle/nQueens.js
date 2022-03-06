import * as U from '$util'

const nQueens = (input = 4) => {
  const Q = 'Q'
  const table = U.initial2DTable(input)
  const colRecorder = {} // {row: col}
  const output = []

  // function
  const checkCol = (row, col) => {
    for (let i = 0; i < row; i++) {
      if (table[i][col] === Q) return false
    }
    return true
  }
  const checkDiagonal = (row, col) => {
    for (let i = 0; i < row; i++) {
      const shift = row - i
      if (table[i][col - shift] === Q) return false
      if (table[i][col + shift] === Q) return false
    }
    return true
  }
  const check = (row, col) => checkCol(row, col) && checkDiagonal(row, col)

  const makeAnswer = (row) => {
    const preCol = colRecorder[row] ?? -1
    if (preCol !== -1) table[row][preCol] = null

    for (let col = preCol + 1; col < input; col++) {
      if (check(row, col)) {
        table[row][col] = Q
        colRecorder[row] = col
        return true
      }
    }

    colRecorder[row] = undefined
    return false
  }

  const addAnswer = () => output.push(U.deepClone(table))

  // run
  for (let row = 0; row < input; ) {
    if (row < 0) break

    if (!makeAnswer(row)) row--
    else if (row === input - 1) addAnswer()
    else row++
  }

  return output
}

export default nQueens
