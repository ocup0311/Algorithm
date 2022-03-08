// function
const makePSArr = (str) => {
  const ps = [0]
  let [ptr1, ptr2] = [0, 1]

  while (ptr2 < str.length) {
    if (str[ptr1] === str[ptr2]) {
      ps[ptr2] = ptr1 + 1
      ptr1++
    } else {
      ps[ptr2] = 0
      ptr1 = 0
    }
    ptr2++
  }

  ps.unshift(-1)
  ps.pop()

  return ps
}

// main
const kmp = ({ dataPool, target }) => {
  const output = []
  let amount = 0
  let step = 0
  const ps = makePSArr(target)
  let [ptrD, ptrT] = [0, 0]

  while (ptrD < dataPool.length) {
    step++

    if (dataPool[ptrD] === target[ptrT]) {
      ptrD++
      ptrT++

      if (ptrT === target.length) {
        output.push(ptrD - ptrT)
        amount++
        ptrT = 0
      }
    } else {
      ptrD = ptrD - ps[ptrT]
      ptrT = 0
    }
  }

  return { output, amount, step }
}

export default kmp
