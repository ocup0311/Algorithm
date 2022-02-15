// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...
// input: 13
// output: 233

const { builtInput, runTest } = require('./@test.js')
const withStore = require('./withStore')
const withoutStore = require('./withoutStore')

const input0 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const input1 = 39
const input2 = -87
const input3 = 1000
const input4 = builtInput()

console.log('\n', '===== with Store ===============================')
input0.forEach((input) => runTest(input, withStore.fib))
runTest(input1, withStore.fib)
runTest(input2, withStore.fib)
runTest(input3, withStore.fib)
runTest(input4, withStore.fib)

console.log('\n', '===== without Store ===============================')
input0.forEach((input) => runTest(input, withoutStore.fib))
runTest(input1, withoutStore.fib)
runTest(input2, withoutStore.fib)
