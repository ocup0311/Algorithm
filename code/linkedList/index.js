import LinkedList from './LinkedList.js'

const testList1 = new LinkedList()
console.log('===== push(1) =====')
const a = testList1.push(1)
console.log(testList1.getListArr())
console.log('===== push(2) =====')
const b = testList1.push(2)
console.log(testList1.getListArr())
console.log('===== push(3) =====')
const c = testList1.push(3)
console.log(testList1.getListArr())

console.log('===== pop() =====')
const popValue = testList1.pop()
const d = testList1.length
console.log(testList1.getListArr())
console.log('popValue:', popValue)
console.log('===== push(4) =====')
const e = testList1.push(4)
console.log(testList1.getListArr())

console.log('===== printAll() =====')
testList1.printAll()
console.log('===== getValue(1) =====')
const value1 = testList1.getValue(1)
console.log('value1:', value1)

console.log('===== unshift() =====')
const unshiftValue = testList1.unshift()
const f = testList1.length
console.log('unshiftValue:', unshiftValue)
console.log(testList1.getListArr())
console.log('===== shift(9) =====')
const g = testList1.shift(9)
console.log(testList1.getListArr())

console.log('===== inserAt(2,18) =====')
const h = testList1.inserAt(2, 18)
console.log(testList1.getListArr())
console.log('===== inserAt(12,18) =====')
const i = testList1.inserAt(12, 18)
console.log(testList1.getListArr())
console.log('===== removeAt(1) =====')
const removedValue1 = testList1.removeAt(1)
console.log('removedValue:', removedValue1)
const j = testList1.length
console.log('===== removeAt(13) =====')
const removedValue2 = testList1.removeAt(13)
const k = testList1.length
console.log('removedValue:', removedValue2)
console.log(testList1.getListArr())

console.log('===== getList() =====')
console.log(testList1.getList())

console.log(
  `size: 0 -> ${a} -> ${b} -> ${c} -> ${d} -> ${e} -> ${f} -> ${g} -> ${h} -> ${i} -> ${j} -> ${k}`
)
