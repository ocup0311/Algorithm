// ===================== input =====================

const builtInput = (num) => {
  const target = []

  for (let i = 1; i <= num; i++) {
    target.unshift(i)
  }

  return target
}

const input = builtInput(5)

// ===================== main =====================

function honei(num, _first, _second, _third) {
  const [first, second, third] = [[..._first], [..._second], [..._third]]
  const output = [[_first, _second, _third]]

  const doHonei = (n, F, S, T) => {
    if (n === 1) {
      T.push(F.pop())
      output.push([[...first], [...second], [...third]])
    } else {
      doHonei(n - 1, F, T, S)
      doHonei(1, F, S, T)
      doHonei(n - 1, S, F, T)
    }
  }

  doHonei(num, first, second, third)

  console.log('＝＝＝＝＝＝＝ 移動順序 ＝＝＝＝＝＝＝')
  console.log(output)
  console.log('＝＝＝＝＝＝＝ 最後狀態 ＝＝＝＝＝＝＝')
  console.log(output[output.length - 1])
  console.log('＝＝＝＝＝＝＝ 移動次數 ＝＝＝＝＝＝＝')
  console.log(output.length - 1)

  return
}

// ===================== test =====================

honei(input.length, input, [], [])

console.log(
  '＝＝＝＝＝＝＝ 公式解次數 ＝＝＝＝＝＝＝',
  '\n',
  2 ** input.length - 1
)

// ===================== 發想 =====================

// 有空 1.就從Ｆ拿去非空 2.再空
// 沒空 1.

// 1大＋順序小([8,7,6,5][4][3,2,1])：開始套用 honei
// 套用完再加1即可再套用。
// 結案。
