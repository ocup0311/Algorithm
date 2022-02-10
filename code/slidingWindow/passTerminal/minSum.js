function maxSum({ dataPool, size = 3 }) {
  // exception
  if (size > dataPool.length) return null

  // var
  let max = dataPool.slice(0, size).reduce((t, v) => t + v)
  let x = max

  // function
  const slidingWindow = require('./slidingWindow')
  const fn = (pre, pro) => {
    x = x - pre + pro

    if (max > x) max = x
    return
  }

  // run
  slidingWindow({ dataPool, size }, fn)

  return max
}

module.exports = maxSum
