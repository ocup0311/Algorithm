// 執行一遍 slidingWindow 後，對每個 window 做一次 callBack
//（以回傳 whole window 方式）
// O(n * size)

function slidingWindow({ dataPool, size = 3 }, callBack) {
  // exception
  if (size > dataPool.length) return null

  // run
  for (let i = 0; i <= dataPool.length - size; i++) {
    const windowSet = dataPool.slice(i, i + size)
    callBack(windowSet)
  }

  return
}

module.exports = { slidingWindow }
