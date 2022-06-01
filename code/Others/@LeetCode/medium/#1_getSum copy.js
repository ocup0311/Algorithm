// Notice --------------------------------------------------------

// 1. ------------------------------------------------------------
// Runtime: 76.28% / 65 ms
// Memory Usage: 73.97% / 41.8 MB
const getSum1 = (a, b) => {
  if (b === 0) return a

  const sum = a ^ b
  const carry = (a & b) << 1

  return getSum(sum, carry)
}

// 2. ------------------------------------------------------------
// Runtime: 66 ms
// Memory Usage: 41.5 MB
const getSum = (a, b) => {
  let sum = a
  let carry = b

  while (carry !== 0) {
    const newSum = sum ^ carry

    carry = (sum & carry) << 1
    sum = newSum
  }

  return sum
}
