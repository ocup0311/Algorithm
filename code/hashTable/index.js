import HashTable from './HashTable.js'

import { runTest } from './@test.js'

console.log('\n===================== Division =====================')
runTest({ Factory: HashTable, hash: 'division' })

console.log('\n===================== Multiplication =====================')
runTest({ Factory: HashTable, hash: 'multiplication' })
