// ===================== main =====================

function isPrime(num) {
  if (num !== Math.round(num)) return false
  if (num < 2) return false

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
