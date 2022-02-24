import * as U from '$util'
import SinglyList from './SinglyList.js'
import DoublyList from './DoublyList.js'
import { performance } from 'perf_hooks'
import { runTest } from './@test.js'

// warm up :)
for (let i = 0; i < 9; i++) {
  runTest({ Factory: DoublyList })
  runTest({ Factory: SinglyList })
}

console.log('\n===================== SinglyList =====================')
const t0s = performance.now()
const singleResult = runTest({ Factory: SinglyList }, true)
const t0e = performance.now()

console.log('\n===================== DoublyList =====================')
const t1s = performance.now()
const doubleResult = runTest({ Factory: DoublyList }, true)
const t1e = performance.now()

console.log(`SinglyList: ${Math.round((t0e - t0s) * 1000) / 1000} ms`)
console.log(`DoublyList: ${Math.round((t1e - t1s) * 1000) / 1000} ms`)

console.log(`\n---------- CHECK ----------`)
console.log(U.toCheckSameArr(singleResult, doubleResult))

// TODO1
// const exception = ({ info, err }) => {
//   if (info) console.log(info)
//   if (err) console.error(err)
//   return
// }
// TODO2
// some methods just can call inside the class
