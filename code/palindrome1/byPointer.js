// O(n)

function byPointer(input) {
  // pointer
  let [left, right] = [0, input.length - 1]
  const str = input.toUpperCase()

  // run
  while (left < right) {
    if (str[left] !== str[right]) {
      return false
    }
    left++
    right--
  }

  return true
}

module.exports = byPointer
