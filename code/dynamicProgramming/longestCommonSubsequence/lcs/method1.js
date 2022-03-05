// very slow
// O(m * n!)?

import subsequence from '../../../pointer/subsequence/byPtr.js'

const lcs = (str1, str2) => {
  // var
  let result = ''
  let step = 0

  // function
  const isSub = (str) => subsequence({ subsequenceStr: str, originalStr: str2 })
  const fn = (str) => {
    step++

    if (result.length >= str.length) return
    if (isSub(str)) {
      result = str
      return
    }

    for (let i = 0; i < str.length; i++) {
      fn(str.slice(0, i) + str.slice(i + 1))
    }
  }

  // run
  fn(str1)

  return { result, length: result.length, step }
}

export default lcs
