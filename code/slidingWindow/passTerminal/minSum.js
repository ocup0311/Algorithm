const U = require('@util')

function minSum({ dataPool, size = 3 }) {
  // exception
  if (size > dataPool.length) return null

  // var
  let value_min = U.makeSumofArr(dataPool.slice(0, size))
  let value_temp = value_min

  // function
  const slidingWindow = require('./slidingWindow')
  const callBack = (lastItem, nextItem) => {
    value_temp = value_temp - lastItem + nextItem

    if (value_min > value_temp) value_min = value_temp

    return
  }

  // run
  slidingWindow({ dataPool, size }, callBack)

  return value_min
}

module.exports = minSum
