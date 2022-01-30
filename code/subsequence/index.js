// 判斷一字串是否為 subsequence
// input: ['abc', 'abcd'] / ['abc', 'acb'] / ['abc', 'abdc'] / ['abc', 'abc dads']
// output: true, false, true, true

const { builtInput, runTest } = require('./@test.js')
const byPointer = require('./byPointer')

const input0 = { subsequenceStr: 'abc', originalStr: 'abcd' }
const input1 = { subsequenceStr: 'abc', originalStr: 'acb' }
const input2 = { subsequenceStr: 'abc', originalStr: 'abdc' }
const input3 = { subsequenceStr: 'abc', originalStr: 'dads' }
const input4 = builtInput({ amountS: 3, amountO: 4 }, true)

runTest(input0, byPointer)
// runTest(input1, byPointer)
// runTest(input2, byPointer)
// runTest(input3, byPointer)
runTest(input4, byPointer)
