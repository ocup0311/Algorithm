const U = require('@util')

function minSubLength({ dataPool, target = 30 }) {
  // var
  let minLength = 0
  let temp = -Infinity

  // function
  const maxSum = require('../slidingWindow/passTerminal/maxSum')

  // run
  while (temp < target) {
    if (minLength >= dataPool.length) return { minLength: null, sum: temp }

    minLength++

    const x = maxSum({ dataPool, size: minLength })
    temp = temp < x ? x : temp
  }

  return { minLength, sum: temp }
}

module.exports = minSubLength
