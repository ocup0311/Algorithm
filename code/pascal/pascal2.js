// 帕斯卡定理:
// 輸入第n層，以陣列輸出該層係數
//     1
//    1 1
//   1 2 1
//  1 3 3 1
// 1 4 6 4 1
// ===================== main =====================

function pascal2(layer) {
  if (layer < 1) return '請輸入正整數。'

  let output = [1]
  let middle = []

  for (let i = 1; i < layer; i++) {
    output = [1, ...middle, 1]
    middle = []

    for (let j = 0; j < output.length - 1; j++) {
      middle[j] = output[j] + output[j + 1]
    }
  }

  return output
}

// ===================== test =====================

const runTest = (input) => {
  const result = pascal2(input)

  console.log(`＝＝＝＝＝＝＝ 第${input}層 ＝＝＝＝＝＝＝`)
  console.log(result)
}

runTest(1)
runTest(2)
runTest(3)
runTest(4)
runTest(5)
runTest(6)
