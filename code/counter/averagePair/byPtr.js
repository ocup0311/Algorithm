// O(n)

const byPtr = ({ dataPool, target }) => {
  // pointer
  let [left, right] = [0, dataPool.length - 1]

  // var
  const output = []

  // function
  const makeAverage = (num1, num2) => (num1 + num2) / 2

  // run
  while (left < right) {
    const average = makeAverage(dataPool[left], dataPool[right])

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

export default byPtr
