const slidingWindow = require('./slidingWindow')

function minSum(input) {
  let min = Infinity

  const fn = (x) => {
    const y = x.reduce((t, v) => t + v)
    if (min > y) min = y
    return
  }

  slidingWindow(input, fn)

  return min
}

module.exports = minSum
