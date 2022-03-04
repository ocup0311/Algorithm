// 照線性順序，找到目標｜全找完找不到
// input:{ dataPool:[87,5,13,9,15,78,99], target:78 } output: 5
// O(n)

// ===================== main =====================

const linearSearch = ({ dataPool, target }) => {
  for (let i = 0; i < dataPool.length; i++) {
    if (dataPool[i] === target) {
      return i
    }
  }

  return -1
}

export default linearSearch
