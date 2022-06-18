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

// Other ---------------------------------------------------------
// 1. quick sort 似乎也可以用在 linked list，但 S(n) 應該也不是 O(1)

// 1. ------------------------------------------------------------
// 轉成 array 再 sort
// T(n)= O(nlogn) & S(n)= O(n)
// Runtime: 74.89% / 198 ms
// Memory Usage: 72.51% / 64.5 MB
const sortList1 = (head) => {
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

// 2. ------------------------------------------------------------
// merge sort
// T(n)= O(nlogn) & S(n)= O(logn)
// Runtime: 58.26% / 237 ms
// Memory Usage: 79.55% / 64.2 MB
const sortList2 = (() => {
  // function
  const merge = (list1, list2) => {
    if (list1 === null) return list2
    if (list2 === null) return list1

    const preHead = { next: null }
    let currNode = preHead

    while (list1 && list2) {
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

    currNode.next = list1 ? list1 : list2

    return preHead.next
  }

  const divide = (headL) => {
    let [tailL, tailR] = [{ next: headL }, headL]

    while (tailR?.next) {
      tailL = tailL.next
      tailR = tailR.next.next
    }

    const headR = tailL.next
    tailL.next = null

    return [headL, headR]
  }

  // main
  return (head) => {
    if (!head?.next) return head

    const [headL, headR] = divide(head)

    const listL = sortList2(headL)
    const listR = sortList2(headR)

    return merge(listL, listR)
  }
})()

// 3. ------------------------------------------------------------
// merge sort + bottom up + loop
// T(n)= O(nlogn) & S(n)= O(1)
// Runtime: 50.00% / 251 ms
// Memory Usage: 39.92% / 68.1 MB
const sortList = (() => {
  // function
  const getLength = (head) => {
    let count = 0
    let ptr = head

    while (ptr !== null) {
      ptr = ptr.next
      count++
    }

    return count
  }

  const divide = (start, size) => {
    let [tailL, tailR] = [start, start.next]

    for (let i = 1; i < size && tailL.next; i++) {
      if (tailL.next) tailL = tailL.next
      if (tailR.next) tailR = tailR.next?.next || tailR.next
    }

    const headR = tailL.next
    const headN = tailR.next
    tailL.next = null
    tailR.next = null

    return [headR, headN]
  }

  const merge = (list1, list2) => {
    const preHead = { next: null }
    let ptr = preHead

    while (list1 && list2) {
      if (list1.val < list2.val) {
        ptr.next = list1
        list1 = list1.next
        ptr = ptr.next
      } else {
        ptr.next = list2
        list2 = list2.next
        ptr = ptr.next
      }
    }

    ptr.next = list1 ? list1 : list2

    const head = preHead.next
    let tail = ptr
    while (tail.next) tail = tail.next

    return { head, tail }
  }

  // main
  return (head) => {
    if (!head?.next) return head

    const preHead = { next: null }
    const n = getLength(head)
    let headL = head

    for (let size = 1; size < n; size = size * 2) {
      let tail = preHead

      while (headL?.next) {
        const [headR, headN] = divide(headL, size)
        const newList = merge(headL, headR)

        tail.next = newList.head
        tail = newList.tail

        headL = headN
      }

      tail.next = headL
      headL = preHead.next
    }

    return preHead.next
  }
})()
