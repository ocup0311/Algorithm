// O(n)

function byPointer({ dataPool, target }) {
  // pointer
  let [left, right] = [0, dataPool.length - 1]

  const output = []

  // function
  const getAverage = (num1, num2) => (num1 + num2) / 2

  // run
  while (left < right) {
    const average = getAverage(dataPool[left], dataPool[right])

    if (average === target) {
      output.push([dataPool[left], dataPool[right]])
      left++
      right--
    }
    if (average < target) {
      left++
    }
    if (average > target) {
      right--
    }
  }

  return output
}

module.exports = byPointer
