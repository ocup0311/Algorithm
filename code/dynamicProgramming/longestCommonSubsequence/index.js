import * as lcs from './lcs/index.js'

const input1 = ['ATAACGCGCTGCTCGGGT', 'TCAATCAGGATCCGCTGA']

const result1 = lcs.method1(...input1)
console.log(result1)
const result2 = lcs.method2(...input1)
console.log(result2)
