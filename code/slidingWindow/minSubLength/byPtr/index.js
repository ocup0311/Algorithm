// 每個項目必須是自然數。
// O(n)

export function minSubLength({ dataPool, target = 30 }) {
  // pointer
  let [start, end] = [0, 1]

  // var
  let minLength = Infinity
  let sum = dataPool[0]

  // run
  while (start < end) {
    if (sum < target) {
      if (end >= dataPool.length) break

      sum = sum + dataPool[end]
      end++
    } else {
      const currentLength = end - start
      if (minLength > currentLength) minLength = currentLength
      if (minLength === 1) break

      sum = sum - dataPool[start]
      start++
    }
  }

  return minLength === Infinity ? null : minLength
}
