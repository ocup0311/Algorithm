import U from '$util'
import DivisionHash from './DivisionHash.js'
import MultiplicationHash from './MultiplicationHash.js'

import { performance } from 'perf_hooks'
import { runTest } from './@test.js'

// warm up :)
// for (let i = 0; i < 9; i++) {
//   runTest({ Factory: MultiplicationHash }, false)
//   runTest({ Factory: DivisionHash }, false)
// }

console.log('\n===================== Division =====================')
const t0s = performance.now()
runTest({ Factory: DivisionHash })
const t0e = performance.now()

console.log('\n===================== Multiplication =====================')
const t1s = performance.now()
runTest({ Factory: MultiplicationHash })
const t1e = performance.now()

console.log(`Division: ${Math.round((t0e - t0s) * 1000) / 1000} ms`)
console.log(`Multiplication: ${Math.round((t1e - t1s) * 1000) / 1000} ms`)
