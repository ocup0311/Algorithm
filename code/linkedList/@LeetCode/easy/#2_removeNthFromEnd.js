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
// 2. 原來可以使用已經定義好的 class

// 1. ------------------------------------------------------------
// Runtime: 81.15% / 67 ms
// Memory: 79.32% / 42.6 MB
const removeNthFromEnd1 = (head, n) => {
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

// 2. ------------------------------------------------------------
const removeNthFromEnd2 = (head, n) => {
  // var
  const preHead = { next: head }
  let preNode = preHead
  let curNode = preHead
  let length = 0

  // run
  while (curNode.next !== null) {
    if (length >= n) preNode = preNode.next

    curNode = curNode.next

    length++
  }

  preNode.next = preNode.next.next

  return preHead.next
}

// 3. ------------------------------------------------------------
// node: [A, B, C, D, E]
// idxN: [5, 4, 3, 2, 1]
// 思路：
// removeNth "From End"
// --> 需要從 next 獲取資訊
// --> 需要得到誰才是 nextNode 跟自身的 idxN (ref "n")
// --> nextNode 需重新檢視本身 idxN 是否沒問題
// --> 沒問題：留 | 有問題：去
// --> return 上家需要的資訊：[上家的 next 歸屬, idxN]
// --> 上家獲取資訊後，將自身的 next 改成確認後的資訊
const removeNthFromEnd3 = (head, n) => {
  const checkFromNext = (node) => {
    // exception
    if (node === null) return [node, 1]

    // run
    const [nextNode, idxN] = checkFromNext(node.next)

    if (idxN === n) {
      node.next = null
      return [nextNode, idxN + 1]
    } else {
      node.next = nextNode
      return [node, idxN + 1]
    }
  }

  return checkFromNext(head)[0]
}
