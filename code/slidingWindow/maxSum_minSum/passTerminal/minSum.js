import * as U from '$util'
import { slidingWindow } from '../../slidingWindow/passSet/index.js'

function minSum({ dataPool, size = 3 }) {
  // exception
  if (size > dataPool.length) return null

  // var
  let value_min = U.makeSumofArr(dataPool.slice(0, size))
  let value_temp = value_min

  // function
  const callBack = (lastItem, nextItem) => {
    value_temp = value_temp - lastItem + nextItem

    if (value_min > value_temp) value_min = value_temp

    return
  }

  // run
  slidingWindow({ dataPool, size }, callBack)

  return value_min
}

export default minSum
