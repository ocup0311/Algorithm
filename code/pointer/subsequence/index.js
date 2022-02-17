// 判斷一字串是否為 subsequence
// input: ['abc', 'abcd'] / ['abc', 'acb'] / ['abc', 'abdc'] / ['abc', 'abc dads']
// output: true, false, true, true

const { builtInput, runTest } = require('./@test.js')
const byPtr = require('./byPtr')

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
