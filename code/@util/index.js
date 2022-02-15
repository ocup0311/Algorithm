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
// Math.random() --> 包含 0，不包含1)
const makeRandomZ = (max) => Math.ceil((Math.random() - 0.5) * (max * 2))

const makeRandomN = (max) => Math.round(Math.random() * max)

const makeRandomIndex = (length) => Math.floor(Math.random() * length)

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

const makeRandomBoolean = (probability) => {
  const P =
    probability === undefined
      ? 0.5
      : typeof probability === 'string'
      ? parseInt(probability) / 100
      : probability

  // exception
  if (P >= 1) return true

  return makeRandomN(0.5 / (1 - P)) === 0 ? false : true
}

// counter
const toUpCounter = (counter, item) => {
  counter[item] = counter[item] === undefined ? 1 : counter[item] + 1
}

const toDownCounter = (counter, item) => {
  counter[item] = counter[item] === undefined ? -1 : counter[item] - 1
}

// log
const openLog = (v) => console.log(JSON.stringify(v, null, ' '))

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
  makeRandomBoolean,
  toUpCounter,
  toDownCounter,
  openLog,
}
