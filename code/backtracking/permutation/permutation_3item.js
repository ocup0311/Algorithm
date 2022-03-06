// just for practice backtracking with 3-item array

const permutation_3item = (input = ['A', 'B', 'C']) => {
  const output = []
  let [step1, step2, step3, step4] = [0, 0, 0, 0]

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      step1++
      if (i === j) continue // <-- backtracking
      step2++
      for (let k = 0; k < 3; k++) {
        step3++
        if (i === k || j === k) continue // <-- backtracking
        step4++
        output.push([input[i], input[j], input[k]])
      }
    }
  }

  return { output, step: [step1, step2, step3, step4] }
}

export default permutation_3item
