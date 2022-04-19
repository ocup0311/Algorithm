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
  const strX = x.toString()
  const arrX = strX.split('')

  const reStrX = arrX.reduceRight((t, v) => (v === '-' ? v + t : t + v), '')
  const reNumX = Number(reStrX)

  if (-(2 ** 31) > reNumX || reNumX > 2 ** 31 - 1) return 0

  return reNumX
}

// 2. ------------------------------------------------------------
// 以不能顯示超過範圍的數字為前提
// Runtime: 27.18% / 118 ms
// Memory: 60.22% / 44 MB
const reverse = (x) => {
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
    const checkResult =
      num < 0
        ? check(arrX, -(2 ** 30) - 2 ** 30)
        : check(arrX, 2 ** 30 - 1 + 2 ** 30)

    return checkResult && arrX
  }

  // run
  const arrX = checkRange(x)

  if (arrX === false) return 0

  const reStrX = arrX.reduceRight((t, v) => (v === '-' ? v + t : t + v), '')
  const reNumX = Number(reStrX)

  return reNumX
}
