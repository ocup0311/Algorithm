import * as Stack from './Stack/index.js'
import { runTest } from './@test.js'

console.log('\n===================== bySingleList =====================')
runTest(Stack.bySingleList)

console.log('\n===================== byDoublyList =====================')
runTest(Stack.byDoublyList)

console.log('\n===================== byFixedArray =====================')
runTest(Stack.byFixedArray, 7)

console.log('\n===================== byFlexibleArray =====================')
runTest(Stack.byFlexibleArray)
