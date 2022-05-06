// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

// Example 1:
// Input: n = 3
// Output: ["((()))","(()())","(())()","()(())","()()()"]

// Example 2:
// Input: n = 1
// Output: ["()"]

// Constraints:
// 1 <= n <= 8

/**
 * @param {number} n
 * @return {string[]}
 */

// Notice --------------------------------------------------------

// 1. ------------------------------------------------------------
// 新的 () 要在上一個的 ( 後面
// Runtime: 51.57% / 82 ms
// Memory Usage: 50.99% / 43 MB
const generateParenthesis1 = (n) => {
  // exception
  if (n === 1) return ['()']

  // var
  let output = ['()']
  let position = [1]
  let ptr = 1

  // function
  const addOneParenthesis = (pos) => (t, v, i) => {
    for (let j = pos[i]; j <= v.length; j++) {
      const str = v.slice(0, j) + '()' + v.slice(j)
      t.output.push(str)
      t.position.push(j + 1)
    }

    return t
  }

  // run
  while (ptr < n) {
    const newoutput = output.reduce(addOneParenthesis(position), {
      output: [],
      position: [],
    })

    output = newoutput.output
    position = newoutput.position
    ptr++
  }

  return output
}

// 2. ------------------------------------------------------------
// with store
// Runtime: 94.66% / 60 ms
// Memory Usage: 83.68% / 42.5 MB
const generateParenthesis2 = (() => {
  const store = [
    { output: [], position: [] },
    { output: ['()'], position: [1] },
  ]

  // function
  const addOneParenthesis = (pos) => (set, preStr, idx) => {
    for (let j = pos[idx]; j <= preStr.length; j++) {
      const newStr = preStr.slice(0, j) + '()' + preStr.slice(j)
      set.output.push(newStr)
      set.position.push(j + 1)
    }

    return set
  }

  // main
  return (n) => {
    // exception
    if (n < 1) return null
    if (store[n]) return store[n].output

    // var
    let ptr = store.length - 1

    // run
    while (ptr <= n) {
      const { output, position } = store[ptr]
      const newoutput = output.reduce(addOneParenthesis(position), {
        output: [],
        position: [],
      })

      ptr++
      store[ptr] = newoutput
    }

    return store[n].output
  }
})()

// 3. ------------------------------------------------------------
const generateParenthesis3 = (n) => {
  const result = []

  const dfs = (left, right, res, tmp = []) => {
    if (left === 0 && right === 0) {
      res.push(tmp.join(''))
      return
    }

    if (left === right) {
      tmp.push('(')
      dfs(left - 1, right, res, tmp)
      tmp.pop()
      return
    }

    if (left === 0) {
      tmp.push(')')
      dfs(left, right - 1, res, tmp)
      tmp.pop()
      return
    }

    tmp.push('(')
    dfs(left - 1, right, res, tmp)
    tmp.pop()

    tmp.push(')')
    dfs(left, right - 1, res, tmp)
    tmp.pop()

    return
  }

  dfs(n, n, result)

  return result
}

// 4. ------------------------------------------------------------
const generateParenthesis = (n) => {
  const result = []

  const dfs = (left, right, res, tmp = []) => {
    if (left === 0 && right === 0) {
      res.push(tmp.join(''))
      return
    }

    if (left > 0) {
      tmp.push('(')
      dfs(left - 1, right, res, tmp)
      tmp.pop()
    }
    if (right > left) {
      tmp.push(')')
      dfs(left, right - 1, res, tmp)
      tmp.pop()
    }
  }

  dfs(n, n, result)

  return result
}
