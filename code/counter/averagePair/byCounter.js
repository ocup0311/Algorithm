// O(n)

function byCounter({ dataPool, target }) {
  const counter = {}
  const output = []

  dataPool.forEach((i) => {
    if (counter[i] !== undefined) {
      output.push([i, counter[i]])
    } else {
      counter[target * 2 - i] = i
    }
  })

  return output
}

export default byCounter
