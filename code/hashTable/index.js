import { HashTable1, HashTable2, HashTable_REF } from './HashTable/index.js'

import { runTest } from './@test.js'

console.log('\n===================== Division =====================')
runTest({ Factory: HashTable1, hash: 'division' })

console.log('\n===================== Multiplication =====================')
runTest({ Factory: HashTable1, hash: 'multiplication' })
