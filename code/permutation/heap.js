// by B. R. heapPermutation
// ref: https://cuigeg.github.io/2017/05/05/heapPermutation-algorithms/
// 全排列，每個 item 都視為不同的。

// ===================== input =====================

const input1 = ['A', 'B', 'C']
const input2 = ['A', 'B', 'C', 'D']
const input3 = ['A', 'B', 'A', 'B']
const input4 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K']

// ===================== main =====================

function heapPermutation(input) {
  const output = []
  let step = 0

  // function
  const swap = (n1, n2, arr) => {
    step++

    const temp = arr[n1]
    arr[n1] = arr[n2]
    arr[n2] = temp
  }

  const generate = (n, arr) => {
    if (n === 1) {
      const item = [...arr]
      output.push(item)
      return
    }

    generate(n - 1, arr)

    for (let i = 0; i < n - 1; i++) {
      if (n % 2 === 0) {
        swap(i, n - 1, arr)
      } else {
        swap(0, n - 1, arr)
      }

      generate(n - 1, arr)
    }
  }

  // run
  generate(input.length, [...input])

  return { output, step }
}

// ===================== test =====================

const test = (input) => {
  const result = heapPermutation(input)

  console.log(`======= ${input} =======`)
  console.log(`SWAP ${result.step} times`)
  console.log(result.output)
}

test(input1)
test(input2)
test(input3)
test(input4)
