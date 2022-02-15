//
// input: [0, [[[1, [2], 3]], [4, 5, 6]], [[[[7, [8, 9]]]], 10]]
// output: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const { builtInput, runTest } = require('./@test.js')
const { flatArrays } = require('./flatArrays')

const input0 = [0, [[[1, [2], 3]], [4, 5, 6]], [[[[7, [8, 9]]]], 10]]
const input1 = builtInput(39)
const input2 = builtInput(13)

runTest(input0, flatArrays)
runTest(input1, flatArrays)
runTest(input2, flatArrays)
