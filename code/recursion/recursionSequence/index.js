//
// input: 13
// output: 181

import { builtInput, runTest } from './@test.js'
import recursionSequence from './recursionSequence.js'

const input0 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const input1 = 100
const input2 = 39
const input3 = 0
const input4 = builtInput()

input0.forEach((input) => runTest(input, recursionSequence))
runTest(input1, recursionSequence)
runTest(input2, recursionSequence)
runTest(input3, recursionSequence)
runTest(input4, recursionSequence)
