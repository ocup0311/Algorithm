// arr
const makeSumofArr = (arr) => arr.reduce((t, v) => t + v, 0)

const toSortNumber = (numArr) => numArr.sort((a, b) => a - b)

// random
const makeRandomZ = (max) => Math.ceil((Math.random() - 0.5) * (max * 2))

const makeRandomN = (max) => Math.round(Math.random() * max)

const makeRandomIndex = (max) => Math.floor(Math.random() * max)

const makeRandomLetter = (letterPool) => {
  return letterPool[makeRandomIndex(letterPool.length)]
}

module.exports = {
  makeSumofArr,
  toSortNumber,
  makeRandomN,
  makeRandomZ,
  makeRandomIndex,
  makeRandomLetter,
}
