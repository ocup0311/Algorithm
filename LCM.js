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

function LCM(num1, num2) {
  return (num1 * num2) / GCD(num1, num2)
}

// ===================== test =====================

console.log(LCM(1, 5))
console.log(LCM(120, 36))
console.log(LCM(73, 5))
console.log(LCM(8, 12347))
console.log(LCM(2, 12348))
