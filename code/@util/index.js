// arr
const makeSumofArr = (arr) => arr.reduce((t, v) => t + v, 0)

const makeProductofArr = (arr) => arr.reduce((t, v) => t * v, 1)

const makeProductofArr_fromNextTo0 = (arr) => {
  let skip = 0
  const product = arr.reduce((t, v, i) => {
    if (v === 0) {
      skip = skip + i + 1
      return 1
    }
    return t * v
  }, 1)
  return { product, skip }
}

const toSortNumber = (numArr) => numArr.sort((a, b) => a - b)

// random
const makeRandomZ = (max) => Math.ceil((Math.random() - 0.5) * (max * 2))

const makeRandomN = (max) => Math.round(Math.random() * max)

const makeRandomIndex = (max) => Math.floor(Math.random() * max)

const makeRandomLetter = (letterPool) => {
  return letterPool[makeRandomIndex(letterPool.length)]
}

const makeRandomStr = (letterPool, amount) => {
  let output = ''

  for (let i = 0; i < amount; i++) {
    output = output + makeRandomLetter(letterPool)
  }

  return output
}

// counter
const toUpCounter = (counter, item) => {
  counter[item] = counter[item] === undefined ? 1 : counter[item] + 1
}

const toDownCounter = (counter, item) => {
  counter[item] = counter[item] === undefined ? -1 : counter[item] - 1
}

module.exports = {
  makeSumofArr,
  makeProductofArr,
  makeProductofArr_fromNextTo0,
  toSortNumber,
  makeRandomN,
  makeRandomZ,
  makeRandomIndex,
  makeRandomLetter,
  makeRandomStr,
  toUpCounter,
  toDownCounter,
}
