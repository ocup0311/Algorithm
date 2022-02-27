export const makeSumofArr = (arr) => arr.reduce((t, v) => t + v, 0)

export const makeProductofArr = (arr) => arr.reduce((t, v) => t * v, 1)

export const makeProductofArr_fromNextTo0 = (arr) => {
  let skip = 0
  const product = arr.reduce((t, v, i) => {
    if (v === 0) {
      skip = skip + i + 1
      return 1
    }
    return t * v
  }, 1)
  return { product, skip }
}

export const toSortNumber = (numArr) => numArr.sort((a, b) => a - b)

export const toSwapArr = (arr, index1, index2) => {
  // 原本方法建立 array 會更花時間與空間 commit 24b41ca
  // ;[arr[index1], arr[index2]] = [arr[index2], arr[index1]]

  let temp = arr[index1]
  arr[index1] = arr[index2]
  arr[index2] = temp
}

export const checkSameArr = (...arrs) => {
  const [arr1, ...otherArrs] = arrs
  if (!otherArrs.every((arr) => arr.length === arr1.length)) return false

  if (!otherArrs.every((arr) => arr.every((v, i) => v === arr1[i])))
    return false

  return true
}

export const checkSameArrItem = (...arrs) => {
  const [arr1, ...otherArrs] = arrs
  if (!otherArrs.every((arr) => arr.length === arr1.length)) return false

  const bucket = {}
  arr1.forEach((v) => (bucket[v] = true))
  if (!otherArrs.every((arr) => arr.every((v) => bucket[v]))) return false

  return true
}
