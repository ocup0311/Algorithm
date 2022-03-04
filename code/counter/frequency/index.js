import { runTest, builtInput } from './@test.js'
import frequency from './frequency.js'

const input1 = builtInput({ amount1: 5, amount2: 5 })
const input2 = builtInput({ amount1: 20, amount2: 20 }, true)
const input3 = builtInput({ amount1: 7, amount2: 8 })

runTest({ str1: 'abbcd', str2: 'bcbda' }, frequency)
runTest(input1, frequency)
runTest(input2, frequency)
runTest(input3, frequency)
