// O(n)

const byPtr = (input) => {
  // pointer
  let [left, right] = [0, input.length - 1]

  // var
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

export default byPtr
