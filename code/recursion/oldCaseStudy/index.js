//

const { builtInput, runTest } = require('./@test.js')
const fromFriend = require('./fromFriend')
const fromMe202103 = require('./fromMe202103')

const input = builtInput()

runTest(input, fromFriend.idsToChildren)

runTest(input, fromMe202103.idsToChildren)
