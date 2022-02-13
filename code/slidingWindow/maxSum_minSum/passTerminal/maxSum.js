const U = require('@util')

function maxSum({ dataPool, size = 3 }) {
  // exception
  if (size > dataPool.length) return null

  // var
  let value_max = U.makeSumofArr(dataPool.slice(0, size))
  let value_temp = value_max

  // function
  const { slidingWindow } = require('../../slidingWindow/passTerminal')
  const callBack = (lastItem, nextItem) => {
    value_temp = value_temp - lastItem + nextItem

    if (value_max < value_temp) value_max = value_temp

    return
  }

  // run
  slidingWindow({ dataPool, size }, callBack)

  return value_max
}

module.exports = maxSum
