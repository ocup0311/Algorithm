// O(n)

import * as U from '$util'
import { slidingWindow } from '../../slidingWindow/passSet/index.js'

function largestProduct({ dataPool, size = 3 }) {
  // exception
  if (size > dataPool.length) return null

  // var
  let { product: value_temp, skip } = U.makeProductofArr_fromNextTo0(
    dataPool.slice(0, size)
  )
  let value_max = skip ? -Infinity : value_temp

  // function
  const callBack = (lastItem, nextItem) => {
    // exception
    if (nextItem === 0) {
      skip = size
      value_temp = 1
      return
    }
    if (skip > 0) {
      skip--
      value_temp = value_temp * nextItem
      return
    }

    // run
    value_temp = (value_temp / lastItem) * nextItem
    if (value_max < value_temp) value_max = value_temp

    return
  }

  // run
  slidingWindow({ dataPool, size }, callBack)

  return value_max === -Infinity ? 0 : value_max
}

export { largestProduct }
