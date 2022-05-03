// The count-and-say sequence is a sequence of digit strings defined by the recursive formula:

// countAndSay(1) = "1"
// countAndSay(n) is the way you would "say" the digit string from countAndSay(n-1),
// which is then converted into a different digit string.
// To determine how you "say" a digit string, split it into the minimal number of
// groups so that each group is a contiguous section all of the same character.
// Then for each group, say the number of characters, then say the character.
// To convert the saying into a digit string, replace the counts with a number
// and concatenate every saying.

// For example, the saying and conversion for digit string "3322251":

// Given a positive integer n, return the nth term of the count-and-say sequence.

// Example 1:
// Input: n = 1
// Output: "1"
// Explanation: This is the base case.

// Example 2:
// Input: n = 4
// Output: "1211"
// Explanation:
// countAndSay(1) = "1"
// countAndSay(2) = say "1" = one 1 = "11"
// countAndSay(3) = say "11" = two 1's = "21"
// countAndSay(4) = say "21" = one 2 + one 1 = "12" + "11" = "1211"

// Constraints:
// 1 <= n <= 30

/**
 * @param {number} n
 * @return {string}
 */

// Notice --------------------------------------------------------
// 1. 預設：countAndSay(1) = "1"

// 1. ------------------------------------------------------------
// Runtime: 61.17% / 82 ms
// Memory Usage: 5.96% / 46.3 MB
const countAndSay1 = (n) => {
  // exception
  if (n < 1) return null
  if (n === 1) return '1'

  // var
  const preStr = countAndSay(n - 1)

  // function
  const toCountNum = (counter, char) => {
    if (char === counter[counter.length - 1]?.[1]) {
      counter[counter.length - 1][0]++
    } else {
      counter.push([1, char])
    }

    return counter
  }
  const makeStr = (str, [count, char]) => str + count + char

  // run
  return preStr.split('').reduce(toCountNum, []).reduce(makeStr, '')
}

// 2. ------------------------------------------------------------
// clean up
// Runtime: 73 ms
// Memory Usage: 45.7 MB
const countAndSay2 = (() => {
  // function
  const toCountNum = (counter, char) => {
    const lastNum = counter[counter.length - 1]

    if (char === lastNum?.[1]) lastNum[0]++
    else counter.push([1, char])

    return counter
  }
  const makeStr = (str, [count, char]) => str + count + char

  // main
  return (n) => {
    if (n < 1) return null
    if (n === 1) return '1'

    return countAndSay(n - 1)
      .split('')
      .reduce(toCountNum, [])
      .reduce(makeStr, '')
  }
})()

// 3. ------------------------------------------------------------
// use loop
// Runtime: 82 ms
// Memory Usage: 46.3 MB
const countAndSay = (() => {
  // function
  const toCountNum = (counter, char) => {
    const lastNum = counter[counter.length - 1]

    if (char === lastNum?.[1]) lastNum[0]++
    else counter.push([1, char])

    return counter
  }
  const makeStr = (str, [count, char]) => str + count + char

  // main
  return (n) => {
    if (n < 1) return null

    let result = '1'

    for (let i = 1; i < n; i++) {
      result = result.split('').reduce(toCountNum, []).reduce(makeStr, '')
    }

    return result
  }
})()
