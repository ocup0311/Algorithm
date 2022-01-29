// 有重複的 item，則會出錯。

// ===================== input =====================

const input1 = ['A', 'B', 'C']
const input2 = ['A', 'B', 'C', 'D']
const input3 = ['A', 'B', 'A', 'B']
const input4 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']

// ===================== main =====================

function permutation(input) {
  const output = [input]
  let step = 0

  // function
  const generate = (arr, head) => {
    while (head < arr.length - 1) {
      for (let ptr = head; ptr < arr.length; ptr++) {
        if (arr[head] !== arr[ptr]) {
          step++
          const newArr = arr.slice(0)

          newArr[head] = arr[ptr]
          newArr[ptr] = arr[head]
          output.push(newArr)

          generate(newArr, head + 1)
        }
      }
      head++
    }
  }

  // run
  generate(input, 0)

  return { output, step }
}

// ===================== test =====================

const test = (input) => {
  const result = permutation(input)

  console.log(`======= ${input} =======`)
  console.log(`SWAP ${result.step} times`)
  console.log(result.output)
}

test(input1)
test(input2)
test(input3)
test(input4)
