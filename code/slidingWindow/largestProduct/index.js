//
// input: { dataPool: [5, 7, 21, 5, 3, 7, 18, 5, 10], size: 2 }
// output: largestProduct: 147

import { performance } from 'perf_hooks'
import { builtInput, runTest } from './@test.js'
import * as passTerminal from './passTerminal/index.js'
import * as passSet from './passSet/index.js'

const input0 = builtInput(2000, 300)
const input1 = { dataPool: [5, 7, 0, 5, 3, 7, 8, 5, 9], size: 2 }
const input2 = builtInput(2)
const input3 = builtInput(2, 1)

console.log('====== largest Product by pass Terminal ======')
const t0s = performance.now()
runTest(input0, passTerminal.largestProduct)
runTest(input1, passTerminal.largestProduct)
runTest(input2, passTerminal.largestProduct)
runTest(input3, passTerminal.largestProduct)
const t0e = performance.now()

console.log('====== largest Product by pass Set ======')
const t1s = performance.now()
runTest(input0, passSet.largestProduct, false)
runTest(input1, passSet.largestProduct)
runTest(input2, passSet.largestProduct)
runTest(input3, passSet.largestProduct)
const t1e = performance.now()

console.log(`O(n) pass Terminal: ${Math.round((t0e - t0s) * 1000) / 1000} ms`)
console.log(`O(n^2) pass passSet: ${Math.round((t1e - t1s) * 1000) / 1000} ms`)
