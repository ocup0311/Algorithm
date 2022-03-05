import subsequence from '../../../pointer/subsequence/byPtr.js'

const lcs = (str1, str2) => {
  // var
  let result = ''
  let step1 = 0
  let step2 = 0

  // function
  const isSub = (str) => subsequence({ subsequenceStr: str, originalStr: str2 })

  const fn = (str) => {
    step1++
    if (result.length >= str.length) return
    if (isSub(str)) {
      step2++
      result = str
      return
    }

    for (let i = 0; i < str.length; i++) {
      fn(str.slice(0, i) + str.slice(i + 1))
    }
  }

  // run
  fn(str1)

  return { result, length: result.length, step1, step2 }
}

export default lcs
