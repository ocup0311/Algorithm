// 回傳第 n 個質數
// ===================== main =====================

const primeArr = [2, 3, 5, 7, 11, 13, 17, 19]
let temp = 21

function nthPrime(nth) {
  if (nth !== Math.round(nth) || nth < 1) return '請給我一個正整數'

  // 不被小於根號次方的質數整除，亦為質數。
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

// ===================== test =====================

console.log(nthPrime(0))
console.log(nthPrime(1))
console.log(nthPrime(5))
console.log(nthPrime(9))
console.log(nthPrime(123))
console.log(nthPrime(10000))
