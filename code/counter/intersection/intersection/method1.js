// 比對兩個 array 相同之處
// input:[5,3,9] & [7,9,3,2] output:[3,9]
// O(n)
// 註：個別 array 中，每項不重複，才可用此法。否則需細修 itemList 的計數法。

const intersection = ({ arr1, arr2 }) => {
  const output = []
  const itemList = {}

  // function
  const addItemToList = (arr) => {
    arr.forEach((i) => {
      itemList[i] = itemList[i] + 1 || 1
    })
  }

  // run
  addItemToList(arr1)
  addItemToList(arr2)

  for (let item in itemList) {
    if (itemList[item] === 2) output.push(item)
  }

  return output
}

export default intersection
