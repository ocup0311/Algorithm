function heapPermutation(arr, size, n) {
  console.log(n)

  var swap = function (index1, index2) {
    var temp = arr[index1]
    arr[index1] = arr[index2]
    arr[index2] = temp
  }
  if (size === 1) {
    console.log(arr)
    return
  }
  for (let i = 0; i < size; i++) {
    heapPermutation(arr, size - 1, n)

    swap(size % 2 ? 0 : i, size - 1)
  }
}

var arr = ['a', 'b', 'c', 'd']

heapPermutation(arr, arr.length, arr.length)
