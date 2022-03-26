// 回傳所有 質因數。
// ===================== main =====================

const primeArr = [2, 3, 5, 7, 11, 13, 17, 19]
let temp = 21

const nthPrime = (nth) => {
  const isPrime = (num) => {
    if (num !== Math.round(num) || num < 2) return false

    for (let n = 0; n < primeArr.length; n++) {
      if (primeArr[n] > Math.sqrt(num)) return true
      if (num % primeArr[n] === 0) return false
    }
    return true
  }

  while (nth > primeArr.length) {
    if (isPrime(temp)) primeArr.push(temp)
    temp = temp + 2
  }

  return primeArr[nth - 1]
}

function factorPrime(num) {
  const factorPrimeArr = []
  let temp2 = num
  let x = 1

  const diviseByPrime = (dividend, divisor) => {
    if (dividend % divisor !== 0) return dividend
    return diviseByPrime(dividend / divisor, divisor)
  }

  while (temp2 > 1) {
    let y = diviseByPrime(temp2, nthPrime(x))
    if (y !== temp2) {
      temp2 = y
      factorPrimeArr.push(primeArr[x - 1])
    }
    x++
  }

  return factorPrimeArr
}

// ===================== test =====================

console.log(factorPrime(660 * 23 * 39 * 12345 * 96347))
