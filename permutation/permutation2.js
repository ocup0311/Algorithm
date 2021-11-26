// ref: https://cuigeg.github.io/2017/05/05/heapPermutation-algorithms/
// 全排列，每個 item 都視為不同的。
// ===================== input =====================

const input1 = ['A', 'B', 'C']
const input2 = ['A', 'B', 'C', 'D']
const input3 = ['A', 'B', 'A', 'B']
const input4 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']

// ===================== main =====================

function permutation2(input) {
  const output = []
  let step = 0

  // function
  const swap = (n1, n2, arr) => {
    step++

    const temp = arr[n1]
    arr[n1] = arr[n2]
    arr[n2] = temp
  }

  const generate = (arr, start) => {
    if (start === arr.length - 1) {
      output.push([...arr])
    } else {
      for (let current = start; current < arr.length; current++) {
        swap(start, current, arr)
        generate(arr, start + 1)
        swap(start, current, arr)
      }
    }
  }

  // call
  generate(input, 0)

  return { output, step }
}

// ===================== test =====================

const test = (input) => {
  const result = permutation2(input)

  console.log(`======= ${input} =======`)
  console.log(`SWAP ${result.step} times`)
  console.log(result.output)
}

test(input1)
test(input2)
test(input3)
test(input4)
