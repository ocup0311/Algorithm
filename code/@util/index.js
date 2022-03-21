export * from './randomHelpers/index.js'
export * from './arrayHelpers/index.js'
export * from './errorHelpers/index.js'

// counter
export const toUpCounter = (counter, item) => {
  counter[item] = counter[item] === undefined ? 1 : counter[item] + 1
}

export const toDownCounter = (counter, item) => {
  counter[item] = counter[item] === undefined ? -1 : counter[item] - 1
}

// other
export const openLog = (v) => console.log(JSON.stringify(v, null, ' '))

// export const deepClone = (data) => JSON.parse(JSON.stringify(data))
// --> There're some limits: (X) Symbol key, undefined value, cyclic reference
export const deepClone = (value, cache = new WeakMap()) => {
  // exception
  if (value === null || typeof value !== 'object') return value
  if (value instanceof Date || value instanceof RegExp)
    return value.constructor(value)
  if (cache.has(value)) return cache.get(value)

  // var
  const clone = value.constructor()
  const allKeys = [
    ...Object.getOwnPropertyNames(value),
    ...Object.getOwnPropertySymbols(value),
  ]

  // run
  cache.set(value, clone)

  allKeys.forEach((key) => {
    clone[key] = deepClone(value[key], cache)
  })

  return clone
}
