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

const toTestBigData = ({ fn, props }) => {
  const bigData = 5000
  const bigArr = builtArr(bigData, true)
  props.sample.pushArr(bigArr)

  for (let i = 0; i < bigData; i++) {
    fn(props, false)
  }
}

const toTestOnce = ({ Factory, sample = [] }, isLog = true) => {
  // function
  const print = (info) => {
    if (isLog) console.log(info)
    return
  }

  // run
  const list1 = new Factory()

  print('------ pushArr([99, 98]) ------')
  const x0 = sample.pushArr([99, 98])
  print(sample.getArr())
  print('------ push(1) ------')
  const a = sample.push(1)
  print(sample.getArr())
  print('------ push(2) ------')
  const b = sample.push(2)
  print(sample.getArr())
  print('------ push(3) ------')
  const c = sample.push(3)
  print(sample.getArr())

  print('------ pop() ------')
  const popValue = sample.pop()
  const d = sample.length
  print(sample.getArr())
  print('popValue:', popValue)
  print('------ push(4) ------')
  const e = sample.push(4)
  print(sample.getArr())

  print('------ printAll() ------')
  if (isLog) sample.printAll()
  print('------ getValue(1) ------')
  const value1 = sample.getValue(1)
  print('value1:', value1)

  print('------ unshift() ------')
  const unshiftValue = sample.unshift()
  const f = sample.length
  print('unshiftValue:', unshiftValue)
  print(sample.getArr())
  print('------ shift(9) ------')
  const g = sample.shift(9)
  print(sample.getArr())

  print('------ inserAt(2,18) ------')
  const h = sample.inserAt(2, 18)
  print(sample.getArr())
  print('------ inserAt(12,18) ------')
  const i = sample.inserAt(12, 18)
  print(sample.getArr())
  print('------ removeAt(1) ------')
  const removedValue1 = sample.removeAt(1)
  print('removedValue:', removedValue1)
  const j = sample.length
  print('------ removeAt(13) ------')
  const removedValue2 = sample.removeAt(13)
  const k = sample.length
  print('removedValue:', removedValue2)
  print(sample.getArr())

  print('------ pushArr([97, 96]) ------')
  const l = sample.pushArr([97, 96])
  print(sample.getArr())

  print('------ pushArr([100, 101]) ------')
  list1.pushArr([100, 101])
  print(list1.getArr())
  print('------ pushList(list1) ------')
  const m = sample.pushList(list1)
  print(sample.getArr())

  print('------ getList() ------')
  print(sample.getList())

  print(
    `size: 0 -> ${x0} -> ${a} -> ${b} -> ${c} -> ${d} -> ${e} -> ${f} -> ${g} -> ${h} -> ${i} -> ${j} -> ${k} -> ${l} -> ${m}`
  )

  return sample.getArr()
}

const runTest = ({ Factory }, bigData = false) => {
  const sample = new Factory()

  const oneData = toTestOnce({ Factory, sample })

  if (bigData) toTestBigData({ fn: toTestOnce, props: { Factory, sample } })

  return oneData
}

export { runTest }
