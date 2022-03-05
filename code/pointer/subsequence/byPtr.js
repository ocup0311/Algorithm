// O(n)

const byPtr = ({ subsequenceStr, originalStr }) => {
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
    if (regexStrS[ptrS] !== regexStrO[ptrO]) {
      ptrO++
      continue
    }

    ptrS++
    ptrO++
  }

  return true
}

export default byPtr
