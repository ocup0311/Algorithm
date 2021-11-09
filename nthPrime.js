// ===================== main =====================

function nthPrime(nth) {
  const primeArr = [2, 3, 5, 7, 11, 13, 17, 19]
  let tmp = 20
  const isPrime = (num) => {
    if (num !== Math.round(num)) return false
    if (num < 2) return false

    for (let n = 0; n < primeArr.length; n++) {
      if (primeArr[n] > Math.sqrt(num)) return true
      if (num % primeArr[n] === 0) return false
    }
    return true
  }

  while (nth > primeArr.length) {
    if (isPrime(tmp)) primeArr.push(tmp)
    tmp++
  }

  return primeArr[nth - 1]
}

// ===================== test =====================

console.log(nthPrime(0))
console.log(nthPrime(1))
console.log(nthPrime(5))
console.log(nthPrime(9))
console.log(nthPrime(123))
console.log(nthPrime(10000))
