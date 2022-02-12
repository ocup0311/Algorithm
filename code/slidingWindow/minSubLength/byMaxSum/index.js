// O(n^2)

const U = require('@util')

function minSubLength({ dataPool, target = 30 }) {
  // var
  let minLength = 0
  let sum = -Infinity

  // function
  const maxSum = require('../../maxSum_minSum/passTerminal/maxSum')

  // run
  while (sum < target) {
    if (minLength >= dataPool.length) return null

    minLength++

    const temp = maxSum({ dataPool, size: minLength })
    sum = sum < temp ? temp : sum
  }

  return minLength
}

module.exports = { minSubLength }
