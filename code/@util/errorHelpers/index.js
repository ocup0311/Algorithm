import OwnError from './OwnError.js'

export { default as OwnError } from './OwnError.js'

export const getObjValue = (object, property) => {
  if (object.hasOwnProperty(property)) return object[property]

  throw new OwnError(
    `Please use any in [ ${Object.keys(object)} ] instead of "${property}"`
  )
}

export const checkEnum = (type, enumerate) => {
  if (enumerate.some((v) => v === type)) return
  throw new OwnError(`Please give a argument in ${enumerate}.`)
}
