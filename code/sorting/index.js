//
// input: [3,7,4,1,9,2]
// output: [1,2,3,4,7,9]

const U = require('@util')
const { builtInput, runTestSet } = require('./@test.js')
const bubleSort = require('./bubleSort')
const insertionSort = require('./insertionSort')

const input0 = [3, 7, 4, 1, 9, 2]
const input1 = builtInput(2000)
const input2 = builtInput(20000)
const input3 = builtInput(0)
const inputSet = [input0, input1, input2, input3]

// warm up :)
;(() => {
  for (let i = 0; i < 9; i++) {
    runTestSet({ fn: bubleSort.withBreak, inputSet }, false)
    runTestSet({ fn: bubleSort.byBase, inputSet }, false)
    runTestSet({ fn: insertionSort.withKey, inputSet }, false)
    runTestSet({ fn: insertionSort.byBase, inputSet }, false)
  }
})()

console.log('\n---------- RUN ----------')
const result3 = runTestSet({ fn: insertionSort.withKey, inputSet })
const result2 = runTestSet({ fn: insertionSort.byBase, inputSet })
const result1 = runTestSet({ fn: bubleSort.withBreak, inputSet })
const result0 = runTestSet({ fn: bubleSort.byBase, inputSet })

console.log('\n-------------------- COMPARE --------------------')
console.log(`\nO(n^2)   BubleSort   ${result0.time}`)
console.log('steps: ', result0.steps)
console.log(`\nO(n^2)   BubleSortWBP   ${result1.time}`)
console.log('steps: ', result1.steps)
console.log(`\nO(n^2)   InsertionSort   ${result2.time}`)
console.log('steps: ', result2.steps)
console.log(`\nO(n^2)   InsertionSortWK   ${result3.time}`)
console.log('steps: ', result3.steps)

console.log(`\n---------- CHECK BY [${input0}] ----------`)
console.log(
  U.toCheckSameArr(result0.arr, result1.arr, result2.arr, result3.arr)
)
