const primeArr = [2, 3, 5, 7, 11, 13, 17, 19]
let tmp = 21

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
    if (isPrime(tmp)) primeArr.push(tmp)
    tmp = tmp + 2
  }

  return primeArr[nth - 1]
}

function factorPrime(num) {
  const factorPrimeArr = []
  let tmp2 = num
  let x = 1

  const diviseByPrime = (dividend, divisor) => {
    if (dividend % divisor !== 0) return dividend
    return diviseByPrime(dividend / divisor, divisor)
  }

  while (tmp2 > 1) {
    let y = diviseByPrime(tmp2, nthPrime(x))
    if (y !== tmp2) {
      tmp2 = y
      factorPrimeArr.push(primeArr[x - 1])
    }
    x++
  }

  return factorPrimeArr
}

console.log(factorPrime(660 * 23 * 39 * 12345 * 96347))
