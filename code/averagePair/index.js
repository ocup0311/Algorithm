// 在一 sorted array 中，找出所有兩兩平均等於給定的數字
// input:{ dataPool:[-11, 0, 1, 2, 3, 9, 14, 17, 21], target:1.5 }
// output: [[-11, 14], [0, 3], [1, 2]]

const { performance } = require('perf_hooks')
const { builtInput, runTest } = require('./@test.js')
const byLoop = require('./byLoop')
const byCounter = require('./byCounter')
const byPointer = require('./byPointer')

const input0 = { dataPool: [-11, 0, 1, 2, 3, 9, 14, 17, 21], target: 1.5 }
const input1 = builtInput(15)
const input2 = builtInput(10, true)
const input3 = builtInput(7)

console.log('====== get average pair by LOOP ======')
const t0s = performance.now()
runTest(input0, byLoop)
runTest(input1, byLoop)
runTest(input2, byLoop)
runTest(input3, byLoop)
const t0e = performance.now()

console.log('====== get average pair by COUNTER ======')
const t1s = performance.now()
runTest(input0, byCounter)
runTest(input1, byCounter)
runTest(input2, byCounter)
runTest(input3, byCounter)
const t1e = performance.now()

console.log('====== get average pair by POINTER ======')
const t2s = performance.now()
runTest(input0, byPointer)
runTest(input1, byPointer)
runTest(input2, byPointer)
runTest(input3, byPointer)
const t2e = performance.now()

console.log(`O(n^2) byLoop: ${Math.round((t0e - t0s) * 1000) / 1000} ms`)
console.log(`O(n) byCounter: ${Math.round((t1e - t1s) * 1000) / 1000} ms`)
console.log(`O(n) byPointer: ${Math.round((t2e - t2s) * 1000) / 1000} ms`)
