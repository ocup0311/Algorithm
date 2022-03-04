// 需先排列數據。切一半找
// input:{ dataPool:[5,9,15,78,99], target:78 } output: 3
// O(logn)

const binarySearch = ({ dataPool, target }) => {
  let [index_min, index_max] = [0, dataPool.length - 1]

  while (index_min <= index_max) {
    const index_middle = Math.round((index_min + index_max) / 2)

    switch (true) {
      case target > dataPool[index_middle]:
        index_min = index_middle + 1
        break

      case target < dataPool[index_middle]:
        index_max = index_middle - 1
        break

      default:
        return index_middle
    }
  }

  return -1
}

export default binarySearch
