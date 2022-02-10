//
// input: { dataPool: [5, 7, 21, 5, 3, 7, 18, 5, 10], size: 2 }
// output: maxSum: 28, minSum: 8

const { performance } = require('perf_hooks')
const { builtInput, runTest } = require('./@test.js')
const passSet = require('./passSet')
const passTerminal = require('./passTerminal')

const input0 = { dataPool: [5, 7, 21, 5, 3, 7, 18, 5, 10], size: 2 }
const input1 = builtInput(2000, 500)
const input2 = builtInput(2)

console.log('====== sliding Window by pass Set ======')
const t0s = performance.now()
runTest(input0, passSet.maxSum)
runTest(input0, passSet.minSum)

runTest(input1, passSet.maxSum)
runTest(input1, passSet.minSum)

runTest(input2, passSet.maxSum)
runTest(input2, passSet.minSum)
const t0e = performance.now()

console.log('====== sliding Window by pass Terminal ======')
const t1s = performance.now()
runTest(input0, passTerminal.maxSum)
runTest(input0, passTerminal.minSum)

runTest(input1, passTerminal.maxSum)
runTest(input1, passTerminal.minSum)

runTest(input2, passTerminal.maxSum)
runTest(input2, passTerminal.minSum)
const t1e = performance.now()

console.log(`O(n^2) pass Set: ${Math.round((t0e - t0s) * 1000) / 1000} ms`)
console.log(`O(n) pass Terminal: ${Math.round((t1e - t1s) * 1000) / 1000} ms`)
