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
// 方法：轉成 postOrder 再運算
// Runtime: 32.48% / 128 ms
// Memory Usage: 11.12% / 54 MB
const calculate1 = (s) => {
  // var
  const inOrder = []
  const postOrder = []
  const stack1 = []
  const stack2 = []

  // function
  const isOperator = (x) => x === '+' || x === '-' || x === '*' || x === '/'
  const isSpace = (x) => x === ' '
  const isHighPrecedence = (x) => x === '*' || x === '/'
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
    let token = s[i]

    if (isSpace(token)) continue
    if (isOperator(token)) {
      inOrder.push(token)
      continue
    }

    for (let j = i + 1; j < s.length; j++) {
      const char = s[j]

      if (isOperator(char) || isSpace(char)) break

      token = token + char
      i++
    }

    inOrder.push(token)
  }

  // 2. postOrder
  for (const token of inOrder) {
    if (!isOperator(token)) {
      postOrder.push(token)
      continue
    }

    const opt = stack1[stack1.length - 1]

    if (opt) {
      if (isHighPrecedence(token))
        isHighPrecedence(opt) && postOrder.push(stack1.pop())
      else {
        let opt2 = stack1.pop()

        while (isHighPrecedence(opt2)) {
          postOrder.push(opt2)
          opt2 = stack1.pop()
        }

        if (opt2) postOrder.push(opt2)
      }
    }

    stack1.push(token)
  }

  while (stack1.length > 0) postOrder.push(stack1.pop())

  // 3. output
  for (let token of postOrder) {
    if (isOperator(token)) token = cal(stack2.pop(), stack2.pop(), token)

    stack2.push(token)
  }

  return stack2[0]
}

// 2. ------------------------------------------------------------
// 方法：因為只有四則運算，可直接運算
// Runtime: 53.17% / 108 ms
// Memory Usage: 28.03% / 50 MB
const calculate2 = (s) => {
  let num = ''
  let operator = '+'
  const stack = []

  // function
  const isOperator = (x) => x === '+' || x === '-' || x === '*' || x === '/'
  const isSpace = (x) => x === ' '
  const isHighPrecedence = (x) => x === '*' || x === '/'
  const cal = (right, left, operator) => {
    right = parseInt(right)
    left = parseInt(left)

    if (operator === '+') return left + right
    if (operator === '-') return left - right
    if (operator === '*') return left * right
    if (operator === '/') return Math.trunc(left / right)
  }

  for (const char of s) {
    if (isSpace(char)) continue

    if (isOperator(char)) {
      let preNum = 0

      if (isHighPrecedence(operator)) preNum = stack.pop()

      stack.push(cal(num, preNum, operator))
      num = ''
      operator = char

      continue
    }

    num = num + char
  }

  while (stack.length > 0) {
    const preNum = stack.pop()
    num = cal(num, preNum, operator)
    operator = '+'
  }

  return num
}
