import zeroOneKP from './zeroOneKP.js'

const input1 = {
  items: [
    { key: 'A', cost: 4, profit: 10 },
    { key: 'B', cost: 2, profit: 10 },
    { key: 'C', cost: 6, profit: 12 },
    { key: 'D', cost: 9, profit: 15 },
  ],
  maxCost: 15,
}

const input2 = {
  items: [
    { key: 'A', cost: 2, profit: 10 },
    { key: 'B', cost: 20, profit: 70 },
    { key: 'C', cost: 12, profit: 35 },
    { key: 'D', cost: 5, profit: 20 },
    { key: 'E', cost: 15, profit: 65 },
    { key: 'F', cost: 10, profit: 30 },
  ],
  maxCost: 30,
}

console.log(`============== zeroOneKP(input1) ==============`)
const result1 = zeroOneKP(input1)
console.log(result1)
console.log(`============== zeroOneKP(input2) ==============`)
const result2 = zeroOneKP(input2)
console.log(result2)
