// Given head, the head of a linked list, determine if the linked list has a cycle in it.

// There is a cycle in a linked list if there is some node in the list that can be reached again
// by continuously following the next pointer. Internally, pos is used to denote the index of
// the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

// Return true if there is a cycle in the linked list. Otherwise, return false.

// Example 1:
// Input: head = [3,2,0,-4], pos = 1
// Output: true
// Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).

// Example 2:
// Input: head = [1,2], pos = 0
// Output: true
// Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.

// Example 3:
// Input: head = [1], pos = -1
// Output: false
// Explanation: There is no cycle in the linked list.

// Constraints:
// The number of the nodes in the list is in the range [0, 104].
// -105 <= Node.val <= 105
// pos is -1 or a valid index in the linked-list.

// Follow up: Can you solve it using O(1) (i.e. constant) memory?

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

// Notice --------------------------------------------------------
// 1. pos 未知

// 1. ------------------------------------------------------------
// Runtime: 82.33% / 77 ms
// Memory: 12.82% / 45.9 MB
const hasCycle1 = (head) => {
  const cache = new Map()
  let ptr = head

  while (ptr !== null) {
    if (cache.get(ptr)) return true

    cache.set(ptr, true)
    ptr = ptr.next
  }

  return false
}

// 2. ------------------------------------------------------------
// Runtime: 73.78% / 82 ms
// Memory: 91.05% / 44.5 MB
const hasCycle2 = (head) => {
  if (head === null) return false

  let ptr1 = head
  let ptr2 = head.next

  while (ptr1 !== null && ptr2 !== null) {
    const temp = ptr2.next

    if (temp === null) return false
    if (ptr1 === ptr2) return true

    ptr1 = ptr1.next
    ptr2 = temp.next
  }

  return false
}

// 3. ------------------------------------------------------------
// Runtime: 85.93% / 84 ms
// Memory Usage: 52.15% / 45.1 MB
const hasCycle3 = (head) => {
  if (head === null || head.next === null) return false

  let ptr1 = head
  let ptr2 = head.next

  while (ptr1 && ptr2) {
    if (ptr1 === ptr2) return true

    ptr1 = ptr1.next
    ptr2 = ptr2.next?.next
  }

  return false
}
