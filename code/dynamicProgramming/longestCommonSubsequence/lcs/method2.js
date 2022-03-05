// return without the result. only length
// O(2^n)

const lcs = (str1, str2) => {
  // var
  let step = 0

  // function
  const fn = (str1, str2) => {
    step++

    if (!str1 || !str2) return 0

    const firstChar1 = str1.slice(0, 1)
    const firstChar2 = str2.slice(0, 1)
    const restChar1 = str1.slice(1, str1.length)
    const restChar2 = str2.slice(1, str2.length)

    if (firstChar1 === firstChar2) return 1 + fn(restChar1, restChar2)

    return Math.max(fn(str1, restChar2), fn(restChar1, str2))
  }

  // run
  const length = fn(str1, str2)

  return { length, step }
}

export default lcs
