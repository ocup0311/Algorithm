// You are given two non-empty linked lists representing two non-negative integers.
// The digits are stored in reverse order, and each of their nodes contains a single digit.
// Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example 1:
// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.

// Example 2:
// Input: l1 = [0], l2 = [0]
// Output: [0]

// Example 3:
// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]

// Constraints:
// The number of nodes in each linked list is in the range [1, 100].
// 0 <= Node.val <= 9
// It is guaranteed that the list represents a number that does not have leading zeros.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

// Notice --------------------------------------------------------
// 1. 不會是空的 input
// 2. 不會是負的
// 3. 順序從個位數開始
// 4. 每個 node 是一個位數

// 1. ------------------------------------------------------------
// Runtime: 93.67% / 97 ms
// Memory Usage: 74.13% / 47.2 MB
const addTwoNumbers = (l1, l2) => {
  const head = new ListNode(null)
  let ptr = null
  let ptr1 = l1
  let ptr2 = l2
  let carry = 0

  while (ptr1 !== null && ptr2 !== null) {
    const sum = ptr1.val + ptr2.val + carry

    const val = sum % 10
    carry = Math.floor(sum / 10)

    if (head.val === null) {
      head.val = val
      ptr = head
    } else {
      const newNode = new ListNode(val)
      ptr.next = newNode
      ptr = newNode
    }

    ptr1 = ptr1.next
    ptr2 = ptr2.next
  }

  while (ptr1 !== null) {
    const sum = ptr1.val + carry

    const val = sum % 10
    const newNode = new ListNode(val)
    carry = Math.floor(sum / 10)

    ptr.next = newNode
    ptr = newNode
    ptr1 = ptr1.next
  }

  while (ptr2 !== null) {
    const sum = ptr2.val + carry

    const val = sum % 10
    const newNode = new ListNode(val)
    carry = Math.floor(sum / 10)

    ptr.next = newNode
    ptr = newNode
    ptr2 = ptr2.next
  }

  while (carry !== 0) {
    const newNode = new ListNode(carry)
    carry = 0
    ptr.next = newNode
  }

  return head
}
