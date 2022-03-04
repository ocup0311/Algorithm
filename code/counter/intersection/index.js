import { runTest, builtInput_1to100 } from './@test.js'
import intersection from './intersection.js'

const input1 = builtInput_1to100(5, 5)
const input2 = builtInput_1to100(20, 18)
const input3 = builtInput_1to100(7, 100)

runTest({ arr1: [99, 7, 9, 3, 13], arr2: [3, 9, 7, 11] }, intersection)
runTest(input1, intersection)
runTest(input2, intersection)
runTest(input3, intersection)
