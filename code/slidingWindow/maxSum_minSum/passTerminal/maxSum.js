import * as U from '$util'
import { slidingWindow } from '../../slidingWindow/passSet/index.js'

const maxSum = ({ dataPool, size = 3 }) => {
  // exception
  if (size > dataPool.length) return null

  // var
  let value_max = U.makeSumofArr(dataPool.slice(0, size))
  let value_temp = value_max

  // function
  const cb = (lastItem, nextItem) => {
    value_temp = value_temp - lastItem + nextItem

    if (value_max < value_temp) value_max = value_temp

    return
  }

  // run
  slidingWindow({ dataPool, size }, cb)

  return value_max
}

export default maxSum
