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
const generateParenthesis = (n) => {
  if (n === 1) return ['()']

  let output = ['()']
  let position = [1]
  let ptr = 1

  while (ptr < n) {
    const newoutput = output.reduce(
      (t, v, i) => {
        for (let j = position[i]; j <= v.length; j++) {
          const str = v.slice(0, j) + '()' + v.slice(j)
          t.output.push(str)
          t.position.push(j + 1)
        }

        return t
      },
      { output: [], position: [] }
    )

    output = newoutput.output
    position = newoutput.position
    ptr++
  }

  return output
}
