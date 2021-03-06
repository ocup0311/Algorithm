//
// input: [3,7,4,1,9,2]
// output: [1,2,3,4,7,9]

import * as U from '$util'
import { builtInput, runTestSet } from './@test.js'
import * as bubbleSort from './bubbleSort/index.js'
import * as insertionSort from './insertionSort/index.js'
import * as selectionSort from './selectionSort/index.js'
import * as mergeSort from './mergeSort/index.js'
import * as heapSort from './heapSort/index.js'
import * as quickSort from './quickSort/index.js'

const sorted = true

const input0 = [3, 7, 4, 1, 9, 2, 6, 93, 5, -8, -99]
const input1 = builtInput(2000)
const input2 = builtInput(20000)
const input3 = builtInput(0)
const input4 = builtInput(5000, sorted)

const inputSet = [input0, input1, input2, input3, input4]

// warm up :)
for (let i = 0; i < 9; i++) {
  runTestSet({ fn: quickSort.byLoop, inputSet }, false)
  runTestSet({ fn: quickSort.byRecursion, inputSet }, false)
  runTestSet({ fn: heapSort.bySameArr, inputSet }, false)
  runTestSet({ fn: heapSort.byNewArr, inputSet }, false)
  runTestSet({ fn: mergeSort.byBase, inputSet }, false)
  runTestSet({ fn: mergeSort.cleanUp, inputSet }, false)
  runTestSet({ fn: selectionSort.byBase, inputSet }, false)
  runTestSet({ fn: insertionSort.byBase, inputSet }, false)
  runTestSet({ fn: insertionSort.withKey, inputSet }, false)
  runTestSet({ fn: bubbleSort.byBase, inputSet }, false)
  runTestSet({ fn: bubbleSort.withBreak, inputSet }, false)
}

console.log('\n---------- RUN ----------')
const result10 = runTestSet({ fn: quickSort.byLoop, inputSet })
const result9 = runTestSet({ fn: quickSort.byRecursion, inputSet })
const result8 = runTestSet({ fn: heapSort.bySameArr, inputSet })
const result7 = runTestSet({ fn: heapSort.byNewArr, inputSet })
const result6 = runTestSet({ fn: mergeSort.cleanUp, inputSet })
const result5 = runTestSet({ fn: mergeSort.byBase, inputSet })
const result4 = runTestSet({ fn: selectionSort.byBase, inputSet })
const result3 = runTestSet({ fn: insertionSort.withKey, inputSet })
const result2 = runTestSet({ fn: insertionSort.byBase, inputSet })
const result1 = runTestSet({ fn: bubbleSort.withBreak, inputSet })
const result0 = runTestSet({ fn: bubbleSort.byBase, inputSet })

console.log('\n-------------------- COMPARE --------------------')
console.log(`\nO(n^2)   BubbleSort   ${result0.time}`)
console.log('steps: ', result0.steps)
console.log(`\nO(n^2)   BubbleSortWBP   ${result1.time}`)
console.log('steps: ', result1.steps)
console.log(`\nO(n^2)   InsertionSort   ${result2.time}`)
console.log('steps: ', result2.steps)
console.log(`\nO(n^2)   InsertionSortWK   ${result3.time}`)
console.log('steps: ', result3.steps)
console.log(`\nO(n^2)   SelectionSort   ${result4.time}`)
console.log('steps: ', result4.steps)
console.log(`\nO(nlongn)   MergeSort   ${result5.time}`)
console.log('steps: ', result5.steps)
console.log(`\nO(nlongn)   MergeSortC   ${result6.time}`)
console.log('steps: ', result6.steps)
console.log(`\nO(nlongn)   HeapSortN   ${result7.time}`)
console.log('steps: ', result7.steps)
console.log(`\nO(nlongn)   HeapSortS   ${result8.time}`)
console.log('steps: ', result8.steps)
console.log(`\nO(nlongn)   QuickSort recursion   ${result9.time}`)
console.log('steps: ', result9.steps)
console.log(`\nO(nlongn)   QuickSort loop   ${result10.time}`)
console.log('steps: ', result10.steps)

console.log(`\n---------- CHECK BY [${inputSet[0]}] ----------`)
console.log(
  U.checkSameArr(
    result0.arr,
    result1.arr,
    result2.arr,
    result3.arr,
    result4.arr,
    result5.arr,
    result6.arr,
    result7.arr,
    result8.arr,
    result9.arr,
    result10.arr
  )
)
