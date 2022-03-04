// O(nlogn)

// main
const mergeSort = (originalArr) => {
  // var
  let step = 0

  // function
  const merge = (arr1, arr2) => {
    let [ptr1, ptr2] = [0, 0]
    const mergedArr = []

    // run
    while (ptr1 < arr1.length && ptr2 < arr2.length) {
      if (arr1[ptr1] < arr2[ptr2]) {
        mergedArr.push(arr1[ptr1])
        ptr1++
        step++
      } else {
        mergedArr.push(arr2[ptr2])
        ptr2++
        step++
      }
    }

    while (ptr1 < arr1.length) {
      mergedArr.push(arr1[ptr1])
      ptr1++
      step++
    }
    while (ptr2 < arr2.length) {
      mergedArr.push(arr2[ptr2])
      ptr2++
      step++
    }

    return mergedArr
  }

  const sort = (arr) => {
    // 也可以 arr.length === 1, 但我的 test input 有傳入空 array，所以才要 < 2
    if (arr.length < 2) return arr

    const middleIndex = Math.ceil(arr.length / 2)

    const arr1 = arr.slice(0, middleIndex)
    const arr2 = arr.slice(middleIndex, arr.length)

    return merge(sort(arr1), sort(arr2))
  }

  // run
  const sortedArr = sort(originalArr)

  return { sortedArr, step }
}

export default mergeSort
