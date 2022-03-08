import { runTest, builtInput } from './@test.js'
import kmp from './kmp.js'

const input1 = builtInput({ amountT: 3, amountD: 15000 })
const input2 = builtInput({ amountT: 10, amountD: 20 })
const input3 = { dataPool: 'abcdabcdabcg', target: 'abcdabcg' }
const input4 = builtInput({ amountT: 10, amountD: 20 }, true)

runTest(input1, kmp)
runTest(input2, kmp)
runTest(input3, kmp)
runTest(input4, kmp)
