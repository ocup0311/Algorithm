// O(n * size)

import * as U from '$util'
import { slidingWindow } from '../../slidingWindow/passSet/index.js'

export function largestProduct({ dataPool, size = 3 }) {
  // exception
  if (size > dataPool.length) return null

  // var
  let value_max = -Infinity

  // function
  const callBack = (windowSet) => {
    const value_temp = U.makeProductofArr(windowSet)

    if (value_max < value_temp) value_max = value_temp
    return
  }

  // run
  slidingWindow({ dataPool, size }, callBack)

  return value_max
}
