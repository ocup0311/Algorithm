// 最長的、由不同字母組成的 subString
// input: 'WriteafunctioncalleduniqueLettersString'
// output: 'Writeafunct'

import { performance } from 'perf_hooks'
import { builtInput, runTest } from './@test.js'
import * as byPtr from './byPtr/index.js'
import * as byPtr3 from './byPtr3/index.js'

const input0 = builtInput(2000)
const input1 = 'WriteafunctioncalleduniqueLettersString'
const input2 = builtInput(1)

console.log('====== by 1 pointer ======')
const t0s = performance.now()
runTest(input0, byPtr.uniqueLettersString)
runTest(input1, byPtr.uniqueLettersString)
runTest(input2, byPtr.uniqueLettersString)
const t0e = performance.now()

console.log('====== by 3 pointer ======')
const t1s = performance.now()
runTest(input0, byPtr3.uniqueLettersString)
runTest(input1, byPtr3.uniqueLettersString)
runTest(input2, byPtr3.uniqueLettersString)
const t1e = performance.now()

console.log(`O(n) by 1 pointer: ${Math.round((t0e - t0s) * 1000) / 1000} ms`)
console.log(`O(n) by 3 pointer: ${Math.round((t1e - t1s) * 1000) / 1000} ms`)
