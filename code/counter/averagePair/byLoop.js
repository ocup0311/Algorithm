// O(n^2)

function byLoop({ dataPool, target }) {
  const output = dataPool.reduce((total, value, index, array) => {
    const pairNum = array.slice(index + 1).find((v) => v === target * 2 - value)

    if (pairNum !== undefined) total.push([value, pairNum])

    return total
  }, [])

  return output
}

export default byLoop
