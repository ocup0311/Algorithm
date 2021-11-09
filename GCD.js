// ===================== main =====================

function GCD(num1, num2) {
  let a = num1 > num2 ? num1 : num2
  let b = a === num2 ? num1 : num2
  let r

  while (r !== 0) {
    r = a % b
    a = b
    b = r
  }

  return a
}

// ===================== test =====================

console.log(GCD(1, 5))
console.log(GCD(120, 36))
console.log(GCD(73, 5))
console.log(GCD(8, 12347))
console.log(GCD(2, 12348))
