import U from '$util'

const builtArr = (amount, sorted = false) => {
  let output = []

  for (let i = 0; i < amount; i++) {
    if (sorted) {
      output.push(i)
    } else {
      output.push(U.makeRandomN(10))
    }
  }

  return output
}

const toTestBigData = (list) => {
  const bigNum = 10000
  const bigArr = builtArr(bigNum, true)
  list.pushArr(bigArr)
  for (let i = 0; i < bigNum; i++) {
    list.push(i)
  }
}

const runTest = (List) => {
  const list0 = new List()
  const list1 = new List()

  toTestBigData(list0)

  console.log('------ pushArr([99, 98]) ------')
  const x0 = list0.pushArr([99, 98])
  console.log(list0.getArr())
  console.log('------ push(1) ------')
  const a = list0.push(1)
  console.log(list0.getArr())
  console.log('------ push(2) ------')
  const b = list0.push(2)
  console.log(list0.getArr())
  console.log('------ push(3) ------')
  const c = list0.push(3)
  console.log(list0.getArr())

  console.log('------ pop() ------')
  const popValue = list0.pop()
  const d = list0.length
  console.log(list0.getArr())
  console.log('popValue:', popValue)
  console.log('------ push(4) ------')
  const e = list0.push(4)
  console.log(list0.getArr())

  console.log('------ printAll() ------')
  list0.printAll()
  console.log('------ getValue(1) ------')
  const value1 = list0.getValue(1)
  console.log('value1:', value1)

  console.log('------ unshift() ------')
  const unshiftValue = list0.unshift()
  const f = list0.length
  console.log('unshiftValue:', unshiftValue)
  console.log(list0.getArr())
  console.log('------ shift(9) ------')
  const g = list0.shift(9)
  console.log(list0.getArr())

  console.log('------ inserAt(2,18) ------')
  const h = list0.inserAt(2, 18)
  console.log(list0.getArr())
  console.log('------ inserAt(12,18) ------')
  const i = list0.inserAt(12, 18)
  console.log(list0.getArr())
  console.log('------ removeAt(1) ------')
  const removedValue1 = list0.removeAt(1)
  console.log('removedValue:', removedValue1)
  const j = list0.length
  console.log('------ removeAt(13) ------')
  const removedValue2 = list0.removeAt(13)
  const k = list0.length
  console.log('removedValue:', removedValue2)
  console.log(list0.getArr())

  console.log('------ pushArr([97, 96]) ------')
  const l = list0.pushArr([97, 96])
  console.log(list0.getArr())

  console.log('------ pushArr([100, 101]) ------')
  list1.pushArr([100, 101])
  console.log(list1.getArr())
  console.log('------ pushList(list1) ------')
  const m = list0.pushList(list1)
  console.log(list0.getArr())

  console.log('------ getList() ------')
  console.log(list0.getList())

  console.log(
    `size: 0 -> ${x0} -> ${a} -> ${b} -> ${c} -> ${d} -> ${e} -> ${f} -> ${g} -> ${h} -> ${i} -> ${j} -> ${k} -> ${l} -> ${m}`
  )

  return list0.getArr()
}

export { runTest }
