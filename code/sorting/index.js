//
// input: [3,7,4,1,9,2]
// output: [1,2,3,4,7,9]

const { builtInput, runTest, runTestSet } = require('./@test.js')
const BubleSort = require('./BubleSort')
const InsertionSort = require('./InsertionSort')

const input0 = [3, 7, 4, 1, 9, 2]
const input1 = [1, 1, 1, 5, 5, 7, 3, 3]
const input2 = builtInput(200)
const input3 = builtInput(0)
const inputSet = [input0, input1, input2, input3]

const result0 = runTestSet(BubleSort.byBase, ...inputSet)
const result1 = runTestSet(BubleSort.withBreakPoint, ...inputSet)
// const result2 = runTestSet(InsertionSort, ...inputSet)

console.log(`O(n^2) BubleSort: ${result0.times} ----------`)
console.log('steps: ', result0.steps)
console.log(`O(n^2) BubleSort: ${result1.times} ----------`)
console.log('steps: ', result1.steps)
// console.log(`O(n^2) InsertionSort: ${result2.times} ----------`)
// console.log('steps: ', ...result2.steps)
