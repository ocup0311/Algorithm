// O(n * size)

function slidingWindow({ dataPool, size = 3 }, fn) {
  // exception
  if (size > dataPool.length) return

  // run
  for (let i = 0; i <= dataPool.length - size; i++) {
    const set = dataPool.slice(i, i + size)
    fn(set)
  }

  return
}

module.exports = slidingWindow
