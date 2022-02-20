// 判斷一字串是否為 subsequence
// input: ['abc', 'abcd'] / ['abc', 'acb'] / ['abc', 'abdc'] / ['abc', 'abc dads']
// output: true, false, true, true

import { builtInput, runTest } from './@test.js'
import byPtr from './byPtr.js'

const input0 = { subsequenceStr: 'abc', originalStr: 'abcd' }
const input1 = { subsequenceStr: 'abc', originalStr: 'acb' }
const input2 = { subsequenceStr: 'abc', originalStr: 'abdc' }
const input3 = builtInput({ amountS: 20, amountO: 25 })
const input4 = builtInput({ amountS: 13, amountO: 24 }, true)

runTest(input0, byPtr)
runTest(input1, byPtr)
runTest(input2, byPtr)
runTest(input3, byPtr)
runTest(input4, byPtr)
