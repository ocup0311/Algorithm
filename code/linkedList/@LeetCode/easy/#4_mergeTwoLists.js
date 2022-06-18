// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists in a one sorted list. The list should be made by splicing together
// the nodes of the first two lists.

// Return the head of the merged linked list.

// Example 1:
// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]

// Example 2:
// Input: list1 = [], list2 = []
// Output: []

// Example 3:
// Input: list1 = [], list2 = [0]
// Output: [0]

// Constraints:
// The number of nodes in both lists is in the range [0, 50].
// -100 <= Node.val <= 100
// Both list1 and list2 are sorted in non-decreasing order.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

// Notice --------------------------------------------------------
// 1. input 已排序

// 1. ------------------------------------------------------------
// Runtime: 67.87% / 79 ms
// Memory: 56.70% / 44.3 MB
const mergeTwoLists1 = (list1, list2) => {
  if (list1 === null) return list2
  if (list2 === null) return list1

  let newHead = null
  let currNode = newHead

  if (list1.val < list2.val) {
    newHead = list1
    list1 = list1.next
    currNode = newHead
  } else {
    newHead = list2
    list2 = list2.next
    currNode = newHead
  }

  while (list1 !== null && list2 !== null) {
    if (list1.val < list2.val) {
      currNode.next = list1
      currNode = currNode.next
      list1 = list1.next
    } else {
      currNode.next = list2
      currNode = currNode.next
      list2 = list2.next
    }
  }

  if (list1 !== null) currNode.next = list1
  if (list2 !== null) currNode.next = list2

  return newHead
}

// 2. ------------------------------------------------------------
// Runtime: 67.87% / 79 ms
// Memory: 14.87% / 44.7 MB
const mergeTwoLists2 = (list1, list2) => {
  if (list1 === null) return list2
  if (list2 === null) return list1

  let newHead = null

  if (list1.val < list2.val) {
    newHead = list1
    newHead.next = mergeTwoLists(list1.next, list2)
  } else {
    newHead = list2
    newHead.next = mergeTwoLists(list1, list2.next)
  }

  return newHead
}

// 3. ------------------------------------------------------------
const mergeTwoLists3 = (list1, list2) => {
  if (list1 === null) return list2
  if (list2 === null) return list1

  if (list1.val < list2.val) {
    const nextNode = mergeTwoLists(list1.next, list2)
    list1.next = nextNode
    return list1
  } else {
    const nextNode = mergeTwoLists(list1, list2.next)
    list2.next = nextNode
    return list2
  }
}

// 4. ------------------------------------------------------------
// clean up from 1
const mergeTwoLists = (list1, list2) => {
  if (list1 === null) return list2
  if (list2 === null) return list1

  const preHead = { next: null }
  let currNode = preHead

  while (list1 !== null && list2 !== null) {
    if (list1.val < list2.val) {
      currNode.next = list1
      currNode = currNode.next
      list1 = list1.next
    } else {
      currNode.next = list2
      currNode = currNode.next
      list2 = list2.next
    }
  }

  currNode.next = list1 !== null ? list1 : list2

  return preHead.next
}
