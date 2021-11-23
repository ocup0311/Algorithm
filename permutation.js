// ===================== main =====================
const input1 = ['A', 'B', 'C']
const input2 = ['A', 'B', 'C', 'D']
const input3 = ['A', 'B', 'C', 'D', 'E']

function toPrintPermutation(input) {
  const output = [input]

  const permutation = (arr, head) => {
    while (head < arr.length - 1) {
      for (let ptr = head; ptr < arr.length; ptr++) {
        if (arr[head] !== arr[ptr]) {
          const newArr = arr.slice(0)

          newArr[head] = arr[ptr]
          newArr[ptr] = arr[head]
          output.push(newArr)

          permutation(newArr, head + 1)
        }
      }
      head++
    }
  }

  permutation(input, 0)

  return output
}

// ===================== test =====================

console.log(`======= ${input1} =======`, '\n', toPrintPermutation(input1))
console.log(`======= ${input2} =======`, '\n', toPrintPermutation(input2))
console.log(`======= ${input3} =======`, '\n', toPrintPermutation(input3))
