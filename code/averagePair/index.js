// 在一 sorted array 中，找出所有兩兩平均等於給定的數字
// input:{ dataPool:[-11, 0, 1, 2, 3, 9, 14, 17, 21], target:1.5 }
// output: [[-11, 14], [0, 3], [1, 2]]

const { performance } = require('perf_hooks')
const { builtInput, test } = require('./util.js')
const byLoop = require('./byLoop')
const byCounter = require('./byCounter')
const byPointer = require('./byPointer')

const input0 = { dataPool: [-11, 0, 1, 2, 3, 9, 14, 17, 21], target: 1.5 }
const input1 = builtInput(15)
const input2 = builtInput(10, true)
const input3 = builtInput(7)

console.log('====== get average pair by LOOP ======')
const t0s = performance.now()
test(input0, byLoop)
test(input1, byLoop)
test(input2, byLoop)
test(input3, byLoop)
const t0e = performance.now()

console.log('====== get average pair by COUNTER ======')
const t1s = performance.now()
test(input0, byCounter)
test(input1, byCounter)
test(input2, byCounter)
test(input3, byCounter)
const t1e = performance.now()

console.log('====== get average pair by POINTER ======')
const t2s = performance.now()
test(input0, byPointer)
test(input1, byPointer)
test(input2, byPointer)
test(input3, byPointer)
const t2e = performance.now()

console.log(`O(n^2) byLoop: ${Math.round((t0e - t0s) * 1000) / 1000} ms`)
console.log(`O(n) byCounter: ${Math.round((t1e - t1s) * 1000) / 1000} ms`)
console.log(`O(n) byPointer: ${Math.round((t2e - t2s) * 1000) / 1000} ms`)
