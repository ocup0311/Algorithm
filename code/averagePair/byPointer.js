// O(n^2)

function byPointer({ dataPool, target }) {
  let ptr1 = 0
  let ptr2 = dataPool.length - 1
  const output = []

  // function
  const getAverage = (num1, num2) => (num1 + num2) / 2

  // run
  while (ptr1 < ptr2) {
    const average = getAverage(dataPool[ptr1], dataPool[ptr2])

    if (average === target) {
      output.push([dataPool[ptr1], dataPool[ptr2]])
      ptr1++
      ptr2--
    }
    if (average < target) {
      ptr1++
    }
    if (average > target) {
      ptr2--
    }
  }

  return output
}

module.exports = byPointer
