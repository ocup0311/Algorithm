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

  const generate = (arr, start, end) => {
    if (start === end - 1) {
      output.push(arr)
    } else {
      for (let current = start; current < end; current++) {
        swap(start, current, arr)
        generate(arr, start + 1, arr.length)
        swap(start, current, arr)
      }
    }
  }

  // call
  generate(input, 0, input.length)

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
