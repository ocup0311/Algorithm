// O(n)

function slidingWindow({ dataPool, size = 3 }, fn) {
  // exception
  if (size > dataPool.length) return

  // run
  for (let i = 0; i <= dataPool.length - size; i++) {
    const pre = dataPool[i]
    const pro = dataPool[i + size]
    fn(pre, pro)
  }

  return
}

module.exports = slidingWindow
