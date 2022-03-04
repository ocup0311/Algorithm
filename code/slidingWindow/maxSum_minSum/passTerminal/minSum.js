import * as U from '$util'
import { slidingWindow } from '../../slidingWindow/passSet/index.js'

const minSum = ({ dataPool, size = 3 }) => {
  // exception
  if (size > dataPool.length) return null

  // var
  let value_min = U.makeSumofArr(dataPool.slice(0, size))
  let value_temp = value_min

  // function
  const cb = (lastItem, nextItem) => {
    value_temp = value_temp - lastItem + nextItem

    if (value_min > value_temp) value_min = value_temp

    return
  }

  // run
  slidingWindow({ dataPool, size }, cb)

  return value_min
}

export default minSum
