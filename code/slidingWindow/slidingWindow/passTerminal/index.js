// 執行一遍 slidingWindow 後，對每個 window 做一次 cb
//（以回傳 lastItem, nextItem 方式）
// O(n)

export function slidingWindow({ dataPool, size = 3 }, cb) {
  // exception
  if (size > dataPool.length) return null

  // run
  for (let i = 0; i < dataPool.length - size; i++) {
    const lastItem = dataPool[i]
    const nextItem = dataPool[i + size]

    cb(lastItem, nextItem)
  }

  return
}
