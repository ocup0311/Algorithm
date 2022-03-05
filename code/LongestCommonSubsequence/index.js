import subsequence from '../pointer/subsequence/byPtr.js'

const LCS = (str1, str2) => {
  // var
  let output = ''
  let step1 = 0
  let step2 = 0

  // function
  const isSub = (str) => subsequence({ subsequenceStr: str, originalStr: str2 })

  const fn = (str) => {
    step1++
    if (output.length >= str.length) return
    if (isSub(str)) {
      step2++
      output = str
      return
    }

    for (let i = 0; i < str.length; i++) {
      fn(str.slice(0, i) + str.slice(i + 1))
    }
  }

  // run
  fn(str1)
  console.log(step1, step2)
  return output
}

const xx = LCS('addfgf', 'adefrtyf')
console.log(xx)
