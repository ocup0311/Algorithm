import U from '$util'

const runTest = ({ Factory }, isLog = true) => {
  // function
  const print = (info) => {
    if (isLog) console.log(info)
    return
  }

  // run
  const sample = new Factory(23)

  print('------ set({ key: 3673456, value: 99 }) ------')
  sample.set({ key: 3673456, value: 99 })
  print(sample.get(3673456))
  print('------ set({ key: 87654, value: 435 }) ------')
  sample.set({ key: 87654, value: 435 })
  print(sample.get(87654))
  print('------ set({ key: 467457, value: 99 }) ------')
  sample.set({ key: 467457, value: 99 })
  print(sample.get(467457))

  for (let key = 0; key < 100000; ) {
    const value = U.makeRandomN(1000)

    print(`------ set({ key: ${key}, value: ${value} }) ------`)
    sample.set({ key, value })
    print(sample.get(key))

    key = key + U.makeRandomN(10000)
  }
  sample.printAll()
}

export { runTest }
