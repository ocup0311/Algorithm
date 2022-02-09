const slidingWindow = require('./slidingWindow')

function maxSum(input) {
  let max = -Infinity

  const fn = (x) => {
    const y = x.reduce((t, v) => t + v)
    if (max < y) max = y
    return
  }

  slidingWindow(input, fn)

  return max
}

module.exports = maxSum
