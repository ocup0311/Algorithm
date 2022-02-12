// 最長的、由不同字母組成的 subString
// input: 'WriteafunctioncalleduniqueLettersString'
// output: 'Writeafunct'

const { builtInput, runTest } = require('./@test.js')
const { uniqueLettersString } = require('./byPtr')

const input0 = builtInput(200)
const input1 = 'WriteafunctioncalleduniqueLettersString'
const input2 = builtInput(1)

runTest(input0, uniqueLettersString)
runTest(input1, uniqueLettersString)
runTest(input2, uniqueLettersString)
