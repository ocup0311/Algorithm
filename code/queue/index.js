import * as Queue from './Queue/index.js'
import { runTest } from './@test.js'

console.log('\n===================== bySingleList =====================')
runTest(Queue.bySingleList)

console.log('\n===================== byDoublyList =====================')
runTest(Queue.byDoublyList)

console.log('\n===================== byFixedArray =====================')
runTest(Queue.byFixedArray, 7)

console.log('\n===================== byFlexibleArray =====================')
runTest(Queue.byFlexibleArray)
