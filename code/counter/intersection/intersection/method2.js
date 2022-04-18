// 比對兩個 array 相同之處
// input:[2,2,5,3,9] & [2,7,9,3,2] output:[2,2,3,9]
// O(n)

const intersection = ({ arr1, arr2 }) => {
  const counter = {}
  const output = []

  for (let i = 0; i < arr1.length; i++) {
    counter[arr1[i]] = counter[arr1[i]] + 1 || 1
  }

  for (let i = 0; i < arr2.length; i++) {
    if (counter[arr2[i]] > 0) {
      counter[arr2[i]]--
      output.push(arr2[i])
    }
  }

  return output
}

export default intersection
