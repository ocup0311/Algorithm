// 判斷一字串是否為 回文
// input:'abba', 'abbc', 'tacocat'
// output: true, false, true

const { builtInput, runTest } = require('./@test.js')
const byPointer = require('./byPointer')

const input0 = 'evacanistabbatsinacave'
const input1 = builtInput(9, true)
const input2 = builtInput(6)
const input3 = builtInput(32)
const input4 = builtInput(32, true)

runTest(input0, byPointer)
runTest(input1, byPointer)
runTest(input2, byPointer)
runTest(input3, byPointer)
runTest(input4, byPointer)
