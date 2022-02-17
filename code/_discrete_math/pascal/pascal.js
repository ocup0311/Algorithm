// 帕斯卡定理:
// 輸入第n層，以陣列輸出該層係數
//     1
//    1 1
//   1 2 1
//  1 3 3 1
// 1 4 6 4 1
// ===================== main =====================

function pascal(layer) {
  if (layer < 1) return '請輸入正整數。'

  const output = []
  const factorial = [1]

  for (let j = 1; j <= layer; j++) {
    factorial[j] = factorial[j - 1] * j
  }

  for (let i = 0; i < layer; i++) {
    output[i] = factorial[layer - 1] / (factorial[i] * factorial[layer - 1 - i])
  }

  return output
}

// ===================== test =====================

const runTest = (input) => {
  const result = pascal(input)

  console.log(`＝＝＝＝＝＝＝ 第${input}層 ＝＝＝＝＝＝＝`)
  console.log(result)
}

runTest(1)
runTest(2)
runTest(3)
runTest(4)
runTest(5)
runTest(6)
