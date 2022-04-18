import { runTest, builtInput_1to100 } from './@test.js'
import { method1, method2 } from './intersection/index.js'

const input1 = builtInput_1to100(5, 5)
const input2 = builtInput_1to100(20, 18)
const input3 = builtInput_1to100(7, 100)

console.log('\n==================== method1 ====================')
runTest({ arr1: [99, 7, 9, 3, 13], arr2: [3, 9, 7, 11] }, method1)
runTest(input1, method1)
runTest(input2, method1)
runTest(input3, method1)

console.log('\n==================== method2 ====================')
runTest({ arr1: [99, 7, 9, 3, 13, 7], arr2: [3, 9, 7, 11, 7] }, method2)
runTest(input1, method2)
runTest(input2, method2)
runTest(input3, method2)
