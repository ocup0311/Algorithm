import * as U from '$util'
import SinglyList from './SinglyList.js'
import DoublyList from './DoublyList.js'
import Stack from './Stack.js'
import Queue from './Queue.js'
import Deque from './Deque.js'
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
console.log(U.checkSameArr(singleResult, doubleResult))

console.log('\n===================== runTestStack =====================')
runTestStack({ Factory: Stack })
console.log('\n===================== runTestQueue =====================')
runTestQueue({ Factory: Queue })
console.log('\n===================== runTestDeque =====================')
runTestDeque({ Factory: Deque })

// TODO:
// const exception = ({ info, err }) => {
//   if (info) console.log(info)
//   if (err) console.error(err)
//   return
// }
