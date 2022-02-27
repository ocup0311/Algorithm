import * as U from '$util'
import SinglyList from './SinglyList.js'
import DoublyList from './DoublyList.js'
import {
  runTestList,
  runTestStack,
  runTestQueue,
  runTestDeque,
} from './@test.js'

console.log('\n===================== SinglyList =====================')
const singleResult = runTestList({ Factory: SinglyList })

console.log('\n===================== DoublyList =====================')
const doubleResult = runTestList({ Factory: DoublyList })

console.log(`\n---------- CHECK ----------`)
console.log(U.toCheckSameArr(singleResult, doubleResult))

console.log('\n===================== runTestStack =====================')
runTestStack()
console.log('\n===================== runTestQueue =====================')
runTestQueue()
console.log('\n===================== runTestDeque =====================')
runTestDeque()

// TODO1
// const exception = ({ info, err }) => {
//   if (info) console.log(info)
//   if (err) console.error(err)
//   return
// }
// TODO2
// some methods just can call inside the class
