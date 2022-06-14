// You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

// Merge all the linked-lists into one sorted linked-list and return it.

// Example 1:
// Input: lists = [[1,4,5],[1,3,4],[2,6]]
// Output: [1,1,2,3,4,4,5,6]
// Explanation: The linked-lists are:
// [
//   1->4->5,
//   1->3->4,
//   2->6
// ]
// merging them into one sorted list:
// 1->1->2->3->4->4->5->6

// Example 2:
// Input: lists = []
// Output: []

// Example 3:
// Input: lists = [[]]
// Output: []

// Constraints:
// k == lists.length
// 0 <= k <= 10^4
// 0 <= lists[i].length <= 500
// -10^4 <= lists[i][j] <= 10^4
// lists[i] is sorted in ascending order.
// The sum of lists[i].length will not exceed 10^4.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

// Notice --------------------------------------------------------
// lists 的開頭是否已排序？

// 1. ------------------------------------------------------------
// 用 binery search 插入，可再改成用 Priority Queue 會再快一點
// Runtime: 71.97% / 126 ms
// Memory Usage: 37.30% / 48 MB
const mergeKLists = (lists) => {
  const sortedLists = lists.filter((v) => v).sort((a, b) => b.val - a.val)

  // exception
  if (sortedLists.length === 0) return null

  // var
  const head = sortedLists.pop()
  let ptr = head

  // function
  const insert = (node) => {
    const val = node.val
    let [ptrS, ptrE] = [0, sortedLists.length - 1]
    let ptrM = 0

    while (ptrS <= ptrE) {
      ptrM = Math.floor((ptrS + ptrE) / 2)

      const valM = sortedLists[ptrM].val

      if (val === valM) return sortedLists.splice(ptrM, 0, node)

      if (val < valM) ptrS = ptrM + 1
      else ptrE = ptrM - 1
    }

    return sortedLists.splice(ptrS, 0, node)
  }

  // run
  while (sortedLists.length > 0) {
    if (ptr.next) insert(ptr.next)

    const nextNode = sortedLists.pop()
    ptr.next = nextNode
    ptr = nextNode
  }

  return head
}
