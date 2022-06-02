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
  const operators = new Map([['+'], ['-'], ['*'], ['/']])
  const items = [...tokens]
  const stack = []
  let result = null

  // function
  const cal = (operandL, operator, operandR) => {
    if (operator === '+') return operandL + operandR
    if (operator === '-') return operandL - operandR
    if (operator === '*') return operandL * operandR
    if (operator === '/') return Math.trunc(operandL / operandR)
  }
  const isNum = (token) => typeof token === 'number'
  const isOpt = (token) => operators.has(token)

  // run
  while (items.length > 0) {
    const token = items.pop()
    const opdL = Number(token)

    if (isOpt(token)) {
      if (isNum(result)) {
        stack.push(result)
        result = null
      }
      stack.push(token)

      continue
    }

    if (isNum(result)) {
      const opt = stack.pop()
      result = cal(opdL, opt, result)

      while (isNum(stack[stack.length - 1])) {
        const opdR = Number(stack.pop())
        const opt = stack.pop()

        result = cal(result, opt, opdR)
      }

      continue
    }

    result = opdL
  }

  return result
}

// 2. ------------------------------------------------------------
// Runtime: 84 ms
// Memory Usage: 43.5 MB
const evalRPN2 = (tokens) => {
  const operators = new Map([['+'], ['-'], ['*'], ['/']])
  let idx = tokens.length - 1

  // function
  const cal = (operandL, operator, operandR) => {
    if (operator === '+') return operandL + operandR
    if (operator === '-') return operandL - operandR
    if (operator === '*') return operandL * operandR
    if (operator === '/') return Math.trunc(operandL / operandR)
  }
  const isOpe = (token) => operators.has(token)
  const EvaluateRPN = () => {
    let opdL, opt, opdR

    const token = tokens[idx--]
    if (isOpe(token)) opt = token
    else return token

    if (isOpe(tokens[idx])) opdR = EvaluateRPN()
    else opdR = tokens[idx--]

    if (isOpe(tokens[idx])) opdL = EvaluateRPN()
    else opdL = tokens[idx--]

    return cal(Number(opdL), opt, Number(opdR))
  }

  // run
  return Number(EvaluateRPN())
}

// 3. ------------------------------------------------------------
const evalRPN = (tokens) => {
  const stack = []

  for (const token of tokens) {
    const num = Number(token)
    if (!Number.isNaN(num)) {
      stack.push(num)
      continue
    }

    const operandR = stack.pop()
    const operandL = stack.pop()

    switch (token) {
      case '+':
        stack.push(operandL + operandR)
        break
      case '-':
        stack.push(operandL - operandR)
        break
      case '*':
        stack.push(operandL * operandR)
        break
      case '/':
        stack.push(Math.trunc(operandL / operandR))
        break
    }
  }

  return stack.pop()
}
