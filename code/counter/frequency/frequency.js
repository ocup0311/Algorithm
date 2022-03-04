// 比對兩個 string ，是否有一樣的字母組成。
// input:'abbcd' & 'bcbda' output: true
// input:'abbcd' & 'abbcc' output: false
// input:'abbcd' & 'abbcdd' output: false
// O(n)

import * as U from '$util'

const frequency = ({ str1, str2 }) => {
  if (str1.length !== str2.length) return false

  const itemList = {}

  // function
  const addItemToList = (str) => {
    for (let i = 0; i < str.length; i++) {
      U.toUpCounter(itemList, str[i])
    }
  }

  const minusItemToList = (str) => {
    for (let i = 0; i < str.length; i++) {
      U.toDownCounter(itemList, str[i])
    }
  }

  // run
  addItemToList(str1)
  minusItemToList(str2)

  for (let item in itemList) {
    if (itemList[item] !== 0) return false
  }

  return true
}

export default frequency
