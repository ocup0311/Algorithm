// Given the head of a linked list, remove the nth node from the end of the list and return its head.

// Example 1:
// Input: head = [1,2,3,4,5], n = 2
// Output: [1,2,3,5]

// Example 2:
// Input: head = [1], n = 1
// Output: []

// Example 3:
// Input: head = [1,2], n = 1
// Output: [1]

// Constraints:
// The number of nodes in the list is sz.
// 1 <= sz <= 30
// 0 <= Node.val <= 100
// 1 <= n <= sz

// Follow up: Could you do this in one pass?

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

// Notice --------------------------------------------------------
// 1. 刪除從後面數來第幾個

// 1. ------------------------------------------------------------
// Runtime: 81.15% / 67 ms
// Memory: 79.32% / 42.6 MB
const removeNthFromEnd = (head, n) => {
  // var
  let curNode = head
  let preNode = head
  let length = 1

  // run
  while (curNode.next !== null) {
    curNode = curNode.next
    length++
  }

  curNode = head

  for (let i = 0; i < length - n; i++) {
    preNode = curNode
    curNode = curNode.next
  }

  // exception
  if (length === 1) return null
  if (length === n) return curNode.next

  preNode.next = curNode.next

  return head
}
