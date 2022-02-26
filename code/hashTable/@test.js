import * as U from '$util'

export const runTest = ({ Factory, hash }, isLog = true) => {
  // function
  const print = (...info) => {
    if (isLog) console.log(...info)
    return
  }

  // run
  const sample = new Factory({ size: 23, hash })

  print('------ setItem({ key: 3673456, value: 99 }) ------')
  sample.setItem({ key: 3673456, value: 99 })
  print('value: ', sample.getValue(3673456))
  print(sample.getItem(3673456))
  print('------ setItem({ key: 87654, value: 435 }) ------')
  sample.setItem({ key: 87654, value: 435 })
  print('value: ', sample.getValue(87654))
  print(sample.getItem(87654))
  print('------ setItem({ key: 999999, value: 99 }) ------')
  sample.setItem({ key: 999999, value: 99 })
  print('value: ', sample.getValue(999999))
  print(sample.getItem(999999))
  print('------ setItem({ key: "999999", value: 99 }) ------')
  sample.setItem({ key: '999999', value: 99 })
  print('value: ', sample.getValue('999999'))
  print(sample.getItem('999999'))
  print('------ setItem({ key: "TEST", value: 99 }) ------')
  sample.setItem({ key: 'TEST', value: 99 })
  print('value: ', sample.getValue('TEST'))
  print(sample.getItem('TEST'))

  for (let key = 0; key < 100000; ) {
    const value = U.makeRandomN(1000)

    print(`------ setItem({ key: ${key}, value: ${value} }) ------`)
    sample.setItem({ key, value })

    print('value: ', sample.getValue(key))
    print(sample.getItem(key))

    key = key + U.makeRandomN(10000)
  }
  sample.printAll()
}
