//
// input: { dataPool: [5, 7, 21, 5, 3, 7], size: 3 }
// output: slidingWindow: [5, 7, 21], [7, 21, 5], [21, 5, 3], [5, 3, 7]

import { performance } from 'perf_hooks'
import { builtInput, runTest } from './@test.js'
import * as passTerminal from './passTerminal/index.js'
import * as passSet from './passSet/index.js'

const input0 = builtInput(13, 7)
const input1 = { dataPool: [5, 7, 21, 5, 3, 7, 18, 5, 10], size: 2 }
const input2 = builtInput(2)
const input3 = builtInput(2, 1)

console.log('====== sliding Window by pass Set ======')
const t0s = performance.now()
runTest(input0, passSet.slidingWindow)
runTest(input1, passSet.slidingWindow)
runTest(input2, passSet.slidingWindow)
runTest(input3, passSet.slidingWindow)
const t0e = performance.now()

console.log('====== sliding Window by pass Terminal ======')
const t1s = performance.now()
runTest(input0, passTerminal.slidingWindow)
runTest(input1, passTerminal.slidingWindow)
runTest(input2, passTerminal.slidingWindow)
runTest(input3, passTerminal.slidingWindow)
const t1e = performance.now()

console.log(`O(n^2) pass Set: ${Math.round((t0e - t0s) * 1000) / 1000} ms`)
console.log(`O(n) pass Terminal: ${Math.round((t1e - t1s) * 1000) / 1000} ms`)
