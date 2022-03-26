import * as U from '$util'
import Stack from './Stack.js'
import Queue from './Queue.js'
import Deque from './Deque.js'

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
  const print = (...info) => {
    if (isLog) console.log(...info)
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
  sample.pop()
  sample.pop()
  sample.pop()
  sample.pop()
  sample.pop()
  sample.pop()
  sample.pop()
  sample.pop()
  sample.pop()
  sample.pop()
  sample.pop()

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

  print('------ shift() ------')
  const shiftValue = sample.shift()
  const f = sample.length
  print('shiftValue:', shiftValue)
  print(sample.getArr())
  print('------ unshift(9) ------')
  const g = sample.unshift(9)
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

export const runTestList = ({ Factory }, bigData = false) => {
  const sample = new Factory()

  const oneData = toTestOnce({ Factory, sample })

  if (bigData) toTestBigData({ fn: toTestOnce, props: { Factory, sample } })

  return oneData
}

export const runTestStack = () => {
  const stack = new Stack()
  console.log('------ push(1) ------')
  stack.push(1)
  console.log(stack.getArr())
  console.log('------ push(2) ------')
  stack.push(2)
  console.log(stack.getArr())
  console.log('------ pop() ------')
  stack.pop()
  console.log(stack.getArr())
  console.log('------ push(3) ------')
  stack.push(3)
  console.log(stack.getArr())
  console.log('------ printAll() ------')
  stack.printAll()
}

export const runTestQueue = () => {
  const queue = new Queue()
  console.log('------ enqueue(1) ------')
  queue.enqueue(1)
  console.log(queue.getArr())
  console.log('------ enqueue(2) ------')
  queue.enqueue(2)
  console.log(queue.getArr())
  console.log('------ dequeue() ------')
  queue.dequeue()
  console.log(queue.getArr())
  console.log('------ enqueue(3) ------')
  queue.enqueue(3)
  console.log(queue.getArr())
  console.log('------ printAll() ------')
  queue.printAll()
}

export const runTestDeque = () => {
  const deque = new Deque()
  console.log('------ push(1) ------')
  deque.push(1)
  console.log(deque.getArr())
  console.log('------ push(2) ------')
  deque.push(2)
  console.log(deque.getArr())
  console.log('------ pop() ------')
  deque.pop()
  console.log(deque.getArr())
  console.log('------ inject(3) ------')
  deque.inject(3)
  console.log(deque.getArr())
  console.log('------ inject(4) ------')
  deque.inject(4)
  console.log(deque.getArr())
  console.log('------ eject() ------')
  deque.eject()
  console.log(deque.getArr())
  console.log('------ push(5) ------')
  deque.push(5)
  console.log(deque.getArr())
  console.log('------ printAll() ------')
  deque.printAll()
}
