import U from '$util'
import SinglyList from './SinglyList.js'
import DoublyList from './DoublyList.js'
import { performance } from 'perf_hooks'
import { runTest } from './@test.js'

console.log('\n===================== SinglyList =====================')
const t0s = performance.now()
const singleResult = runTest(SinglyList)
const t0e = performance.now()

console.log('\n===================== DoublyList =====================')
const t1s = performance.now()
const doubleResult = runTest(DoublyList)
const t1e = performance.now()

console.log(`SinglyList: ${Math.round((t0e - t0s) * 1000) / 1000} ms`)
console.log(`DoublyList: ${Math.round((t1e - t1s) * 1000) / 1000} ms`)

console.log(`\n---------- CHECK ----------`)
console.log(U.toCheckSameArr(singleResult, doubleResult))
