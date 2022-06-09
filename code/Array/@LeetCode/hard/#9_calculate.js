// Given a string s which represents an expression, evaluate this expression and return its value.

// The integer division should truncate toward zero.

// You may assume that the given expression is always valid. All intermediate results will be
// in the range of [-2^31, 2^31 - 1].

// Note: You are not allowed to use any built-in function which evaluates strings as mathematical
// expressions, such as eval().

// Example 1:
// Input: s = "3+2*2"
// Output: 7

// Example 2:
// Input: s = " 3/2 "
// Output: 1

// Example 3:
// Input: s = " 3+5 / 2 "
// Output: 5

// Constraints:
// 1 <= s.length <= 3 * 10^5
// s consists of integers and operators ('+', '-', '*', '/') separated by some number of spaces.
// s represents a valid expression.
// All the integers in the expression are non-negative integers in the range [0, 2^31 - 1].
// The answer is guaranteed to fit in a 32-bit integer.

/**
 * @param {string} s
 * @return {number}
 */

// Notice --------------------------------------------------------
// 1. 只有 '+', '-', '*', '/'
// 2. 有空白

// 1. ------------------------------------------------------------
// Runtime: 32.48% / 128 ms
// Memory Usage: 11.12% / 54 MB
const calculate = (s) => {
  // var
  const inOrder = []
  const postOrder = []
  const operatorStack = []
  const outputStack = []

  // function
  const isOperator = (x) => x === '+' || x === '-' || x === '*' || x === '/'
  const isSpace = (x) => x === ' '
  const isHigh = (x) => x === '*' || x === '/'
  const isLow = (x) => x === '+' || x === '-'
  const cal = (right, left, operator) => {
    right = parseInt(right)
    left = parseInt(left)

    if (operator === '+') return left + right
    if (operator === '-') return left - right
    if (operator === '*') return left * right
    if (operator === '/') return Math.trunc(left / right)
  }

  // run
  // 1. inOrder
  for (let i = 0; i < s.length; i++) {
    let str = s[i]

    if (isOperator(str)) {
      inOrder.push(str)
      continue
    }
    if (isSpace(str)) continue

    for (let j = i + 1; j < s.length; j++) {
      const str2 = s[j]

      if (isOperator(str2) || isSpace(str2)) break

      str = str + str2
      i++
    }

    inOrder.push(str)
  }

  // 2. postOrder
  for (const token of inOrder) {
    if (!isOperator(token)) {
      postOrder.push(token)
      continue
    }

    const opt = operatorStack[operatorStack.length - 1]

    if (opt) {
      if (isHigh(token) && isHigh(opt)) postOrder.push(operatorStack.pop())

      if (isLow(token)) {
        let opt2 = operatorStack.pop()

        while (isHigh(opt2)) {
          postOrder.push(opt2)
          opt2 = operatorStack.pop()
        }

        if (opt2) postOrder.push(opt2)
      }
    }

    operatorStack.push(token)
  }

  while (operatorStack.length > 0) {
    const c = operatorStack.pop()
    postOrder.push(c)
  }

  // 3. output
  for (let x of postOrder) {
    if (isOperator(x)) x = cal(outputStack.pop(), outputStack.pop(), x)

    outputStack.push(x)
  }

  return outputStack[0]
}
