// 執行一遍 slidingWindow 後，對每個 window 做一次 cb
//（以回傳 whole window 方式）
// O(n * size)

export const slidingWindow = ({ dataPool, size = 3 }, cb) => {
  // exception
  if (size > dataPool.length) return null

  // run
  for (let i = 0; i <= dataPool.length - size; i++) {
    const windowSet = dataPool.slice(i, i + size)
    cb(windowSet)
  }

  return
}
