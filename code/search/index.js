import { runTest, builtInput } from './@test.js'
import binarySearch from './binarySearch.js'
import linearSearch from './linearSearch.js'

const input1 = builtInput(15)
const input2 = builtInput(20, true)
const input3 = builtInput(7)

console.log('================ binarySearch ================')
runTest(input1, binarySearch)
runTest(input2, binarySearch)
runTest(input3, binarySearch)

console.log('================ linearSearch ================')
runTest(input1, linearSearch)
runTest(input2, linearSearch)
runTest(input3, linearSearch)
