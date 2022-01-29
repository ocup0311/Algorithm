// 判斷是否為質數
// ===================== main =====================

function isPrime(num) {
  // domain：大於 1 的正整數
  if (num !== Math.round(num) || num < 2) return false

  // 不被小於根號次方的整數整除。
  for (let n = 2; n <= Math.sqrt(num); n++) {
    if (num !== n) {
      if (num % n === 0) return false
    }
  }
  return true
}

// ===================== test =====================

console.log(isPrime(0))
console.log(isPrime(1))
console.log(isPrime(2))
console.log(isPrime(4))
console.log(isPrime(73))
console.log(isPrime(12347))
console.log(isPrime(12348))
