import LinkedList from './LinkedList.js'

const testList1 = new LinkedList()
const a = testList1.push(1)
const b = testList1.push(2)
const c = testList1.push(3)
testList1.printAll()
const gg = testList1.pop()
const d = testList1.push(4)
console.log('size: ', a, b, c, d)
console.log('gg:', gg)

testList1.printAll()
const vv = testList1.getValue(1)

console.log('vv:', vv)
