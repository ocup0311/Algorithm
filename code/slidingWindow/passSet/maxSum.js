function maxSum({ dataPool, size = 3 }) {
  // exception
  if (size > dataPool.length) return null

  // var
  let max = -Infinity

  // function
  const slidingWindow = require('./slidingWindow')
  const fn = (x) => {
    const y = x.reduce((t, v) => t + v)
    if (max < y) max = y
    return
  }

  slidingWindow({ dataPool, size }, fn)

  return max
}

module.exports = maxSum
