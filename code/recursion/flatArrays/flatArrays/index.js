// O(n+m)
// item * n, array * m

function flatArrays(originalArr) {
  // var
  const flattedArr = []

  // function
  const getItems = (input) => {
    if (Array.isArray(input)) input.forEach(getItems)
    else flattedArr.push(input)
  }

  // run
  getItems(originalArr)

  return flattedArr
}

export default flatArrays
