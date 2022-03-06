import { builtInput, runTest } from './@test.js'
import permutation_3item from './permutation_3item.js'

const input1 = builtInput(3)
const input2 = builtInput(3)
const input3 = builtInput(3)

runTest(input1, permutation_3item)
runTest(input2, permutation_3item)
runTest(input3, permutation_3item)
