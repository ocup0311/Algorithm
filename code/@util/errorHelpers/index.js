import OwnError from './OwnError.js'

export { default as OwnError } from './OwnError.js'

export const toCheckItem = (object, property) => {
  if (object.hasOwnProperty(property)) return object[property]

  throw new OwnError(
    `Please use any in [ ${Object.keys(object)} ] instead of "${property}"`
  )
}
