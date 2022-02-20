//

import { builtInput, runTest } from './@test.js'
import fromFriend from './fromFriend/index.js'
import fromMe202103 from './fromMe202103/index.js'

const input = builtInput()

runTest(input, fromFriend.idsToChildren)

runTest(input, fromMe202103.idsToChildren)
