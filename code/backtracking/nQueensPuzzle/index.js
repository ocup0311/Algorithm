import { runTest } from './@test.js'
import nQueens from './nQueens.js'

runTest(4, nQueens, true)

runTest(3, nQueens)
runTest(4, nQueens)
runTest(5, nQueens)
runTest(6, nQueens)
runTest(7, nQueens)
runTest(8, nQueens)
