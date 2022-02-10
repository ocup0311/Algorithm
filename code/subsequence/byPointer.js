// O(n)

function byPointer({ subsequenceStr, originalStr }) {
  // exception
  if (subsequenceStr.length > originalStr.length) return false

  // var
  let ptrS = 0
  let ptrO = 0
  const regexStrS = subsequenceStr.toUpperCase()
  const regexStrO = originalStr.toUpperCase()

  // run
  while (ptrS < regexStrS.length) {
    if (ptrO >= regexStrO.length) return false
    if (regexStrS[ptrS] !== regexStrO[ptrO]) ptrO++

    ptrS++
    ptrO++
  }

  return true
}

module.exports = byPointer