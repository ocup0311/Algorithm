// Evaluate the value of an arithmetic expression in Reverse Polish Notation.

// Valid operators are +, -, *, and /. Each operand may be an integer or another expression.

// Note that division between two integers should truncate toward zero.

// It is guaranteed that the given RPN expression is always valid. That means the
// expression would always evaluate to a result, and there will not be any division by zero operation.

// Example 1:
// Input: tokens = ["2","1","+","3","*"]
// Output: 9
// Explanation: ((2 + 1) * 3) = 9

// Example 2:
// Input: tokens = ["4","13","5","/","+"]
// Output: 6
// Explanation: (4 + (13 / 5)) = 6

// Example 3:
// Input: tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
// Output: 22
// Explanation: ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
// = ((10 * (6 / (12 * -11))) + 17) + 5
// = ((10 * (6 / -132)) + 17) + 5
// = ((10 * 0) + 17) + 5
// = (0 + 17) + 5
// = 17 + 5
// = 22

// Constraints:
// 1 <= tokens.length <= 10^4
// tokens[i] is either an operator: "+", "-", "*", or "/", or an integer in the range [-200, 200].

/**
 * @param {string[]} tokens
 * @return {number}
 */

// Notice --------------------------------------------------------
// 1. 除法：無條件捨去
// 2. 只有 "+", "-", "*", or "/"

// 1. ------------------------------------------------------------
// Runtime: 86.11% / 76 ms
// Memory Usage: 80.31% / 44.6 MB
const evalRPN1 = (tokens) => {
  const operators = { '+': true, '-': true, '*': true, '/': true }
  const items = [...tokens]
  const stack = []
  let result = null

  // function
  const cal = (left, operator, right) => {
    if (operator === '+') return left + right
    if (operator === '-') return left - right
    if (operator === '*') return left * right
    if (operator === '/') return ~~(left / right)
  }
  const isNum = (token) => typeof token === 'number'
  const isOpe = (token) => operators[token]

  // run
  while (items.length > 0) {
    const token = items.pop()
    const num = Number(token)

    if (isOpe(token)) {
      if (isNum(result)) {
        stack.push(result)
        result = null
      }
      stack.push(token)

      continue
    }

    if (isNum(result)) {
      const operator = stack.pop()
      result = cal(num, operator, result)

      while (isNum(stack[stack.length - 1])) {
        const right = Number(stack.pop())
        const operator = stack.pop()

        result = cal(result, operator, right)
      }

      continue
    }

    result = num
  }

  return result
}

// 2. ------------------------------------------------------------
// Runtime: 84 ms
// Memory Usage: 43.5 MB
const evalRPN = (tokens) => {
  const operators = new Map([['+'], ['-'], ['*'], ['/']])
  let idx = tokens.length - 1

  // function
  const cal = (left, operator, right) => {
    const n1 = parseInt(left)
    const n2 = parseInt(right)

    if (operator === '+') return n1 + n2
    if (operator === '-') return n1 - n2
    if (operator === '*') return n1 * n2
    if (operator === '/') return ~~(n1 / n2)
  }
  const isOpe = (token) => operators.has(token)
  const EvaluateRPN = () => {
    let left, operator, right

    const token = tokens[idx--]
    if (isOpe(token)) operator = token
    else return token

    if (isOpe(tokens[idx])) right = EvaluateRPN()
    else right = tokens[idx--]

    if (isOpe(tokens[idx])) left = EvaluateRPN()
    else left = tokens[idx--]

    return cal(left, operator, right)
  }

  // run
  return parseInt(EvaluateRPN())
}
