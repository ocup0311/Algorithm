// by B. R. Heap
// ===================== main =====================

const input1 = ['A', 'B', 'C']
const input2 = ['A', 'B', 'C', 'D']
const input3 = ['A', 'B', 'C', 'D', 'E']

function heap(input) {
  const output = []

  // function
  const swap = (n1, n2, arr) => {
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

  // call
  generate(input.length, [...input])

  return output
}

// ===================== test =====================

console.log(`======= ${input1} =======`, '\n', heap(input1))
console.log(`======= ${input2} =======`, '\n', heap(input2))
console.log(`======= ${input3} =======`, '\n', heap(input3))
