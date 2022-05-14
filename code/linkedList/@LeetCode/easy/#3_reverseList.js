// Given the head of a singly linked list, reverse the list, and return the reversed list.

// Example 1:
// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]

// Example 2:
// Input: head = [1,2]
// Output: [2,1]

// Example 3:
// Input: head = []
// Output: []

// Constraints:
// The number of nodes in the list is the range [0, 5000].
// -5000 <= Node.val <= 5000

// Follow up: A linked list can be reversed either iteratively or recursively. Could you implement both?

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// Notice --------------------------------------------------------

// 1. ------------------------------------------------------------
// Runtime: 76.39% / 70 ms
// Memory: 96.49% / 43.7 MB
const reverseList1 = (head) => {
  if (head === null || head.next === null) return head

  let currNode = head
  let prevNode = null

  while (currNode !== null) {
    const tempNode = currNode.next

    currNode.next = prevNode
    prevNode = currNode
    currNode = tempNode
  }

  return prevNode
}

// 2. ------------------------------------------------------------
// Runtime: 97.44% / 58 ms
// Memory: 34.06% / 44.5 MB
const reverseList2 = (head) => {
  if (head === null || head.next === null) return head

  let newHead = null

  // function
  const modify = (currNode) => {
    if (currNode.next === null) {
      newHead = currNode
      return currNode
    }

    const nextNode = modify(currNode.next)

    nextNode.next = currNode

    return currNode
  }

  // run
  modify(head).next = null

  return newHead
}

// 3. ------------------------------------------------------------
// Runtime: 85.89% / 66 ms
// Memory: 0% / 44.8 MB
const reverseList = (head) => {
  if (head === null || head.next === null) return head

  const newHead = reverseList(head.next)

  newHead.next = head
  head.next = null

  return newHead
}
