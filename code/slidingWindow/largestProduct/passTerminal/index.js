// O(n)
const U = require('@util')

function largestProduct({ dataPool, size = 3 }) {
  // exception
  if (size > dataPool.length) return null

  // var
  let { product: value_max, skip } = U.makeProductofArr_fromNextTo0(
    dataPool.slice(0, size)
  )
  let value_temp = value_max

  // function
  const { slidingWindow } = require('../../slidingWindow/passTerminal')
  const callBack = (lastItem, nextItem) => {
    // exception
    if (nextItem === 0) {
      skip = size
      value_temp = 1
      return
    }

    // run
    if (skip > 0) {
      skip--
      value_temp = value_temp * nextItem
    } else {
      value_temp = (value_temp / lastItem) * nextItem
    }

    if (value_max < value_temp) value_max = value_temp

    return
  }

  // run
  slidingWindow({ dataPool, size }, callBack)

  return value_max
}

module.exports = { largestProduct }
