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

// log
export const openLog = (v) => console.log(JSON.stringify(v, null, ' '))
