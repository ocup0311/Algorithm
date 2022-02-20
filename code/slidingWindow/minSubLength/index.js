// 一 array 中至少要幾個連續的項目相加，能大於 target
// input: { dataPool: [9, 8, 1, 4, 9, 5, 1, 2], target: 11 }
// output: 2

import { performance } from 'perf_hooks'
import { builtInput, runTest } from './@test.js'
import * as byMaxSum from './byMaxSum/index.js'
import * as byPtr from './byPtr/index.js'

const input0 = builtInput(200)
const input1 = { dataPool: [9, 8, 1, 4, 9, 5, 1, 2], target: 11 }
const input2 = builtInput(2)

console.log('====== minSubLength by directly use MaxSum ======')
const t0s = performance.now()
runTest(input0, byMaxSum.minSubLength)
runTest(input1, byMaxSum.minSubLength)
runTest(input2, byMaxSum.minSubLength)
const t0e = performance.now()

console.log('====== minSubLength by pointer ======')
const t1s = performance.now()
runTest(input0, byPtr.minSubLength)
runTest(input1, byPtr.minSubLength)
runTest(input2, byPtr.minSubLength)
const t1e = performance.now()

console.log(`O(n^2) by MaxSum: ${Math.round((t0e - t0s) * 1000) / 1000} ms`)
console.log(`O(n) by pointer: ${Math.round((t1e - t1s) * 1000) / 1000} ms`)
