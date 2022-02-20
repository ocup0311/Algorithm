import U from '$util'
import { slidingWindow } from '../../slidingWindow/passSet/index.js'

function minSum({ dataPool, size = 3 }) {
  // exception
  if (size > dataPool.length) return null

  // var
  let value_min = Infinity

  // function
  const callBack = (windowSet) => {
    const value_temp = U.makeSumofArr(windowSet)

    if (value_min > value_temp) value_min = value_temp

    return
  }

  // run
  slidingWindow({ dataPool, size }, callBack)

  return value_min
}

export default minSum
