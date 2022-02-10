// 一 array 中至少要幾個連續的項目相加，能大於 target
// input: { dataPool: [9, 8, 1, 4, 9, 5, 1, 2], target: 11 }
// output: 2

const { builtInput, runTest } = require('./@test.js')
const minSubLength = require('./minSubLength')

const input0 = builtInput(200)
const input1 = { dataPool: [9, 8, 1, 4, 9, 5, 1, 2], target: 11 }
const input2 = builtInput(2)

runTest(input0, minSubLength)
runTest(input1, minSubLength)
runTest(input2, minSubLength)
