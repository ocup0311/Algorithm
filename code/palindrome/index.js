// 判斷一字串是否為 回文
// input:'abba', 'abbc', 'tacocat'
// output: true, false, true

const { builtInput, runTest } = require('./@test.js')
const byPtr = require('./byPtr')

const input0 = 'evacanistabbatsinacave'
const input1 = builtInput(9, true)
const input2 = builtInput(6)
const input3 = builtInput(32)
const input4 = builtInput(32, true)

runTest(input0, byPtr)
runTest(input1, byPtr)
runTest(input2, byPtr)
runTest(input3, byPtr)
runTest(input4, byPtr)
