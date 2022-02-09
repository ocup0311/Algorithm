//
// input: { dataPool: [5, 7, 21, 5, 3, 7, 18, 5, 10], size: 2 }
// output: maxSum: 28, minSum: 8

const { builtInput, runTest } = require('./@test.js')
const maxSum = require('./maxSum')
const minSum = require('./minSum')

const input0 = { dataPool: [5, 7, 21, 5, 3, 7, 18, 5, 10], size: 2 }
const input1 = builtInput(20)

runTest(input0, maxSum)
runTest(input0, minSum)

runTest(input1, maxSum)
runTest(input1, minSum)
