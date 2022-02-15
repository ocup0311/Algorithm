// O()

function flatArrays(input) {
  // var
  const output = []

  // function
  const toFlatArr = (arr2) =>
    arr2.forEach((item) => {
      if (!Array.isArray(item)) output.push(item)
      else toFlatArr(item)
    })

  // run
  toFlatArr(input)

  return output
}

module.exports = { flatArrays }
