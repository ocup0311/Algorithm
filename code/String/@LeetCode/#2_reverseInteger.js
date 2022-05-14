// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes
// the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

// Example 1:
// Input: x = 123
// Output: 321

// Example 2:
// Input: x = -123
// Output: -321

// Example 3:
// Input: x = 120
// Output: 21

// Constraints:
// -231 <= x <= 231 - 1

// Notice --------------------------------------------------------
// 1. 超過數字範圍回傳 0
// 2. I/O 都已經是數字
// 3. 以不能顯示超過範圍的數字為前提

// 1. ------------------------------------------------------------
// Runtime: 96.02% / 68 ms
// Memory: 79.62% / 43.7 MB
const reverse1 = (x) => {
  const INT_MAX = 2 ** 30 - 1 + 2 ** 30
  const INT_MIN = -(2 ** 30) - 2 ** 30

  const strX = x.toString()
  const arrX = strX.split('')

  const reStrX = arrX.reduceRight((t, v) => (v === '-' ? v + t : t + v), '')
  const reNumX = Number(reStrX)

  if (INT_MIN > reNumX || reNumX > INT_MAX) return 0

  return reNumX
}

// 2. ------------------------------------------------------------
// 以不能顯示超過範圍的數字為前提
// Runtime: 86.44% / 74 ms
// Memory: 79.62% / 43.8 MB
const reverse2 = (x) => {
  const INT_MAX = 2 ** 30 - 1 + 2 ** 30
  const INT_MIN = -(2 ** 30) - 2 ** 30

  // function
  const checkRange = (num) => {
    const strX = num.toString()
    const arrX = strX.split('')

    // function
    const check = (arrTarget, numRange) => {
      const strRange = numRange.toString()
      const arrRange = strRange.split('')
      const lenRange = arrRange.length

      if (arrTarget.length < lenRange) return true

      let ptr = lenRange - 1
      for (let i = 0; i < lenRange; i++) {
        if (arrRange[i] === '-') continue
        if (arrTarget[ptr] > arrRange[i]) return false
        if (arrTarget[ptr] < arrRange[i]) return true
        ptr--
      }

      return true
    }

    // run
    const checkResult = num < 0 ? check(arrX, INT_MIN) : check(arrX, INT_MAX)

    return checkResult && arrX
  }

  // run
  const arrX = checkRange(x)

  if (arrX === false) return 0

  const reStrX = arrX.reduceRight((t, v) => (v === '-' ? v + t : t + v), '')
  const reNumX = Number(reStrX)

  return reNumX
}

// 3. ------------------------------------------------------------
// just number
// Runtime: 78.36% / 79 ms
// Memory: 79.62% / 43.7 MB
const reverse3 = (x) => {
  // function
  const getRest = (n) => Math.trunc(n / 10)
  const getPop = (n) => n % 10

  // var
  const INT_MAX = 2 ** 30 - 1 + 2 ** 30
  const INT_MIN = -(2 ** 30) - 2 ** 30
  const PRE_MAX = getRest(INT_MAX)
  const PRE_MIN = getRest(INT_MIN)
  const END_MAX = getPop(INT_MAX)
  const END_MIN = getPop(INT_MIN)

  let rest = x
  let reX = 0

  // run
  while (rest !== 0) {
    const pop = getPop(rest)
    rest = getRest(rest)

    if (reX > PRE_MAX || (reX === PRE_MAX && pop > END_MAX)) return 0
    if (reX < PRE_MIN || (reX === PRE_MIN && pop < END_MIN)) return 0

    reX = reX * 10 + pop
  }

  return reX
}

// 4. ------------------------------------------------------------
// Runtime: 92.76% / 70 ms
// Memory: 49.55% / 44 MB
const reverse = (x) => {
  // CONST
  const INT_MAX = 2 ** 30 - 1 + 2 ** 30
  const INT_MIN = -(2 ** 30) - 2 ** 30

  // function
  const makeArr = (num) => Math.abs(num).toString().split('')

  // var
  const arrX = makeArr(x)
  const lenX = arrX.length
  const sign = x < 0 ? '-' : '+'
  const arrLimit = x < 0 ? makeArr(INT_MIN) : makeArr(INT_MAX)
  const lenLimit = arrLimit.length

  let reStrX = ''
  let isValid = lenX < lenLimit ? true : false

  // run
  for (let i = 0; i < lenX; i++) {
    const pop = arrX[lenX - 1 - i]

    if (!isValid) {
      if (pop < arrLimit[i]) isValid = true
      if (pop > arrLimit[i]) return 0
    }

    reStrX = reStrX + pop
  }

  return Number(sign + reStrX)
}
