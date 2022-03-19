import * as U from '$util'

// function
const parseKey = (key) => {
  if (typeof key === 'number') return key

  if (typeof key === 'string') {
    let modifiedKey = 1

    for (let i = 0; i < key.length; i++) {
      modifiedKey = modifiedKey * key.charCodeAt(i)
    }

    return modifiedKey
  }

  throw new U.OwnError(`Please give a key with type in [ number, string ]`)
}

const hashMethod = {
  division: (_key, size) => {
    const key = parseKey(_key)

    return key % size
  },

  multiplication: (_key, size) => {
    const key = parseKey(_key)
    const A = Math.sqrt(13) + 1
    return Math.floor(size * ((key * A) % 1))
  },
}

export default hashMethod
