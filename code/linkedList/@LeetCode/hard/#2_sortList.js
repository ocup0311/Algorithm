// Given the head of a linked list, return the list after sorting it in ascending order.

// Example 1:
// Input: head = [4,2,1,3]
// Output: [1,2,3,4]

// Example 2:
// Input: head = [-1,5,3,4,0]
// Output: [-1,0,3,4,5]

// Example 3:
// Input: head = []
// Output: []

// Constraints:
// The number of nodes in the list is in the range [0, 5 * 10^4].
// -10^5 <= Node.val <= 10^5

// Follow up: Can you sort the linked list in O(n logn) time and O(1) memory (i.e. constant space)?

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
// 1. T(n)= O(nlogn) & S(n)= O(1)

// 1. ------------------------------------------------------------
// 轉成 array 再 sort
// T(n)= O(nlogn) & S(n)= O(n)
// Runtime: 74.89% / 198 ms
// Memory Usage: 72.51% / 64.5 MB
const sortList = (head) => {
  // exception
  if (!head) return null

  // 1.
  const arr = []
  let ptr = head

  while (ptr) {
    arr.push(ptr)
    ptr = ptr.next
  }

  // 2.
  const sortedArr = arr.sort((a, b) => b.val - a.val)
  const newHead = sortedArr.at(-1)
  ptr = newHead

  while (ptr) {
    ptr.next = sortedArr.pop() ?? null
    ptr = ptr.next
  }

  return newHead
}
