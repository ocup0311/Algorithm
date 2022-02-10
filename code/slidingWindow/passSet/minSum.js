function minSum({ dataPool, size = 3 }) {
  // exception
  if (size > dataPool.length) return null

  // var
  let min = Infinity

  // function
  const slidingWindow = require('./slidingWindow')
  const fn = (x) => {
    const y = x.reduce((t, v) => t + v)
    if (min > y) min = y
    return
  }

  slidingWindow({ dataPool, size }, fn)

  return min
}

module.exports = minSum
