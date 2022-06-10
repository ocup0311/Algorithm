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
// T(n): O(n), S(n):O(n)
// Runtime: 87.77% / 84 ms
// Memory Usage: 27.97% / 50.1 MB
const calculate2 = (s) => {
  // var
  const stack = []
  let num = ''
  let opt = '+'

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
  for (const char of s) {
    if (isSpace(char)) continue

    if (!isOperator(char)) {
      num = num + char
      continue
    }

    const preNum = isHighPrecedence(opt) ? stack.pop() : 0
    const newNum = cal(num, preNum, opt)
    stack.push(newNum)

    num = ''
    opt = char
  }

  while (stack.length > 0) {
    const preNum = stack.pop()
    num = cal(num, preNum, opt)
    opt = '+'
  }

  return num
}

// 3. ------------------------------------------------------------
// 方法：from 2，移除 stack，分別改用兩個 num, operator 做紀錄
// T(n): O(n), S(n):O(1)
// Runtime: 85.16% / 86 ms
// Memory Usage: 32.16% / 49.3 MB
// EX. n1: "5", opt1: "+", n2: "21", opt2: "/", n3: "13"
// n1  opt1  n2  opt2  n3
// 5    +    21   /    13  =  6
const calculate3 = (s) => {
  // var
  let [n1, n2] = [0, 0]
  let [opt1, opt2] = ['+', '+']
  let n3 = ''

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
  for (const char of s) {
    if (isSpace(char)) continue

    if (!isOperator(char)) {
      n3 = n3 + char
      continue
    }

    if (isHighPrecedence(opt2)) {
      n2 = cal(n3, n2, opt2)
    } else {
      n1 = cal(n2, n1, opt1)
      opt1 = opt2
      n2 = n3
    }

    n3 = ''
    opt2 = char
  }

  return isHighPrecedence(opt2)
    ? cal(cal(n3, n2, opt2), n1, opt1)
    : cal(n3, cal(n2, n1, opt1), opt2)
}

// 4. ------------------------------------------------------------
// 可以再簡化，只用一個 opt 暫存變數
// \d:	digit
// \s:	whitespace
// Runtime: 101 ms
// Memory Usage: 42.6 MB
const calculate = (s) => {
  // exception
  if (!s) return 0

  // regExp
  const isDigit = /\d/
  const isOperator = /[^\d\s]/

  // var
  let n1 = 0
  let n2 = 0
  let n3 = 0
  let opt = '+'

  // run
  for (let i = 0; i < s.length; i++) {
    const char = s[i]

    if (isDigit.test(char)) n3 = n3 * 10 + Number(char)

    if (isOperator.test(char) || i === s.length - 1) {
      switch (opt) {
        case '+':
          n1 = n1 + n2
          n2 = n3
          break
        case '-':
          n1 = n1 + n2
          n2 = -n3
          break
        case '*':
          n2 = n2 * n3
          break
        case '/':
          n2 = Math.trunc(n2 / n3)
          break
      }

      opt = char
      n3 = 0
    }
  }

  return n1 + n2
}
