// Math.random() --> 包含 0，不包含1)
export const makeRandomZ = (max) => Math.ceil((Math.random() - 0.5) * (max * 2))

export const makeRandomN = (max) => Math.round(Math.random() * max)

export const makeRandomIndex = (length) => Math.floor(Math.random() * length)

export const makeRandomLetter = (letterPool) => {
  return letterPool[makeRandomIndex(letterPool.length)]
}

export const makeRandomStr = (letterPool, amount) => {
  let output = ''

  for (let i = 0; i < amount; i++) {
    output = output + makeRandomLetter(letterPool)
  }

  return output
}

export const makeRandomBoolean = (probability) => {
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
