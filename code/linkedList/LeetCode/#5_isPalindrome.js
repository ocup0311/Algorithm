// Given the head of a singly linked list, return true if it is a palindrome.

// Example 1:
// Input: head = [1,2,2,1]
// Output: true

// Example 2:
// Input: head = [1,2]
// Output: false

// Constraints:
// The number of nodes in the list is in the range [1, 105].
// 0 <= Node.val <= 9

// Follow up: Could you do it in O(n) time and O(1) space?

// Notice --------------------------------------------------------

// 1. ------------------------------------------------------------
// Runtime: 440 ms
// Memory: 112.1 MB
const isPalindrome = (head) => {
  let resultS = ''
  let resultE = ''

  const checkFromNext = (node, strS, idxS) => {
    // exception
    if (node === null) return ['', 1]

    // run
    const [strE, idxE] = checkFromNext(node.next, strS + node.val, idxS + 1)

    if (idxS === idxE + 1) resultS = strS
    if (idxS === idxE - 1) resultE = strE
    if (idxS === idxE) {
      resultS = strS
      resultE = strE
    }

    return [strE + node.val, idxE + 1]
  }

  checkFromNext(head, '', 1)

  return resultS === resultE
}
