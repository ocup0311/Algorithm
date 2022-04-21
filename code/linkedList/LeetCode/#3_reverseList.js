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

// Notice --------------------------------------------------------

// 1. ------------------------------------------------------------
// Runtime: 76.39% / 70 ms
// Memory: 96.49% / 43.7 MB
const reverseList1 = (head) => {
  let curNode = head
  let preNode = null

  while (curNode !== null) {
    const tmpNode = curNode.next

    curNode.next = preNode
    preNode = curNode
    curNode = tmpNode
  }

  return preNode
}

// 2. ------------------------------------------------------------
