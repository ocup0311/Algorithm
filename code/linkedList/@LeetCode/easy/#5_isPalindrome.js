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

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

// Notice --------------------------------------------------------
// 1. 方法 4 較優

// 1. ------------------------------------------------------------
// Runtime: 440 ms
// Memory: 112.1 MB
const isPalindrome1 = (head) => {
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

// 2. ------------------------------------------------------------
// Runtime: 315 ms
// Memory: 100.4 MB
const isPalindrome2 = (head) => {
  let result = false

  const checkFromNext = (node, strS, idxS) => {
    // exception
    if (node === null) return ['', 1]

    // run
    const info = checkFromNext(node.next, strS + node.val, idxS + 1)
    const [strE, idxE] = info

    if (idxS === idxE + 1) result = strS === strE + node.val
    if (idxS === idxE) result = strS === strE
    if (idxS < idxE) return info

    return [strE + node.val, idxE + 1]
  }

  checkFromNext(head, '', 1)

  return result
}

// 3. ------------------------------------------------------------
const isPalindrome3 = (head) => {
  let result = false

  const hash = (preHash, val) => (preHash * 311 + val * 911) % 2039

  const checkFromNext = (node, hashS, idxS) => {
    // exception
    if (node === null) return [0, 1]

    // run
    const info = checkFromNext(node.next, hash(hashS, node.val), idxS + 1)
    const [hashE, idxE] = info

    if (idxS === idxE + 1) result = hashS === hash(hashE, node.val)
    if (idxS === idxE) result = hashS === hashE
    if (idxS < idxE) return info

    return [hash(hashE, node.val), idxE + 1]
  }

  checkFromNext(head, 0, 1)

  return result
}

// 4. ------------------------------------------------------------
// Runtime: 186 ms
// Memory Usage: 85 MB
const isPalindrome = (head) => {
  let ptrS = head

  const checkFromEnd = (node) => {
    if (node === null) return true
    if (!checkFromEnd(node.next)) return false
    if (ptrS.val !== node.val) return false

    ptrS = ptrS.next
    return true
  }

  return checkFromEnd(head)
}
