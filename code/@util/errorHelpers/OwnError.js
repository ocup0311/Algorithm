class OwnError extends Error {
  constructor(message, ...params) {
    const passMessage =
      typeof message === 'string' ? `\x1b[33m ${message}\x1b[0m \n` : message

    const passParams = [passMessage, ...params]

    super(...passParams)
  }
}

export default OwnError
