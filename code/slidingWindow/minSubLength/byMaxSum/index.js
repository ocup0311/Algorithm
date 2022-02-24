// O(n^2)

import * as U from '$util'
import maxSum from '../../maxSum_minSum/passTerminal/maxSum.js'

function minSubLength({ dataPool, target = 30 }) {
  // var
  let minLength = 0
  let sum = -Infinity

  // function

  // run
  while (sum < target) {
    if (minLength >= dataPool.length) return null

    minLength++

    const temp = maxSum({ dataPool, size: minLength })
    sum = sum < temp ? temp : sum
  }

  return minLength
}

export { minSubLength }
