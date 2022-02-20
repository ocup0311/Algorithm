//
// input: { dataPool: [5, 7, 21, 5, 3, 7, 18, 5, 10], size: 2 }
// output: maxSum: 28, minSum: 8

import { performance } from 'perf_hooks'
import { builtInput, runTest } from './@test.js'
import * as passTerminal from './passTerminal/index.js'
import * as passSet from './passSet/index.js'

const input0 = builtInput(2000, 500)
const input1 = { dataPool: [5, 7, 21, 5, 3, 7, 18, 5, 10], size: 2 }
const input2 = builtInput(2)
const input3 = builtInput(2, 1)

console.log('====== sliding Window by pass Set ======')
const t0s = performance.now()
runTest(input0, passSet.maxSum)
runTest(input0, passSet.minSum)

runTest(input1, passSet.maxSum)
runTest(input1, passSet.minSum)

runTest(input2, passSet.maxSum)
runTest(input2, passSet.minSum)

runTest(input3, passSet.maxSum)
runTest(input3, passSet.minSum)
const t0e = performance.now()

console.log('====== sliding Window by pass Terminal ======')
const t1s = performance.now()
runTest(input0, passTerminal.maxSum)
runTest(input0, passTerminal.minSum)

runTest(input1, passTerminal.maxSum)
runTest(input1, passTerminal.minSum)

runTest(input2, passTerminal.maxSum)
runTest(input2, passTerminal.minSum)

runTest(input3, passTerminal.maxSum)
runTest(input3, passTerminal.minSum)
const t1e = performance.now()

console.log(`O(n^2) pass Set: ${Math.round((t0e - t0s) * 1000) / 1000} ms`)
console.log(`O(n) pass Terminal: ${Math.round((t1e - t1s) * 1000) / 1000} ms`)
