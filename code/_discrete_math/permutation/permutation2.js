// ref: https://cuigeg.github.io/2017/05/05/heapPermutation-algorithms/
// 全排列，每個 item 都視為不同的。
// ===================== input =====================

const builtInput = (num) => {
  const A_Z = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ]
  const result = []

  for (let i = 0; i < num; i++) {
    const x = Math.ceil(i / 26)
    const y = i % 26

    result.push(`${A_Z[y]}${x}`)
  }

  return result
}

const input1 = builtInput(3)
const input2 = builtInput(4)
const input3 = [...builtInput(2), ...builtInput(2)]
const input4 = builtInput(10)

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

  // run
  generate(input, 0)

  return { output, step }
}

// ===================== test =====================

const runTest = (input) => {
  const result = permutation2(input)

  console.log(`======= ${input} =======`)
  console.log(`SWAP ${result.step} times`)
  console.log(result.output)
}

runTest(input1)
runTest(input2)
runTest(input3)
runTest(input4)
