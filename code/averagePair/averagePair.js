// 在一 sorted array 中，找出所有兩兩平均等於給定的數字
// input:{ dataPool:[-11, 0, 1, 2, 3, 9, 14, 17, 21], average:1.5 }
// output: [[-11, 14], [0, 3], [1, 2]]
// O(n^2)

// ===================== main =====================

function averagePair({ dataPool, average }) {
  return dataPool.reduce((total, value, index, array) => {
    const pairNum = array
      .slice(index + 1)
      .find((v) => v === average * 2 - value)

    if (pairNum !== undefined) total.push([value, pairNum])

    return total
  }, [])
}

// ===================== test =====================
const { builtInput, test } = require('./util.js')

const input0 = { dataPool: [-11, 0, 1, 2, 3, 9, 14, 17, 21], average: 1.5 }
const input1 = builtInput(15)
const input2 = builtInput(20, true)
const input3 = builtInput(7)

test(input0, averagePair)
test(input1, averagePair)
test(input2, averagePair)
test(input3, averagePair)
