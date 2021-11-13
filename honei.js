// ===================== main =====================

function honei(num, _first, _second, _third) {
  let step = 0
  const [first, second, third] = [_first, _second, _third]

  const doHonei = (n, F, S, T) => {
    if (n === 1) {
      T.push(F.pop())
      step++
    } else {
      doHonei(n - 1, F, T, S)
      doHonei(1, F, S, T)
      doHonei(n - 1, S, F, T)
    }
  }

  doHonei(num, first, second, third)

  return step
}

// ===================== test =====================

console.log(honei(10, [10, 9, 8, 7, 6, 5, 4, 3, 2, 1], [], []))

console.log(2 ** 10 - 1)

// ===================== 發想 =====================

// 有空 1.就從Ｆ拿去非空 2.再空
// 沒空 1.

// 1大＋順序小([8,7,6,5][4][3,2,1])：開始套用 honei
// 套用完再加1即可再套用。
// 結案。
