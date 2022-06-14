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
// T(n): O(k * n)
// Runtime: 71.97% / 126 ms
// Memory Usage: 37.30% / 48 MB
const mergeKLists1 = (lists) => {
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

// 2. ------------------------------------------------------------
// 拆成 k 次 mergeTwoLists
// T(n): O(k * n)
// Runtime: 473 ms
// Memory Usage: 47.5 MB
const mergeKLists2 = (lists) => {
  // function
  const mergeTwoLists = (list1, list2) => {
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

  // run
  return lists.reduce((result, list) => mergeTwoLists(result, list), null)
}

// 3. ------------------------------------------------------------
// Divide And Conquer：拆成兩兩 merge
// T(n): O(nlogk)
// Runtime: 85.97% / 105 ms
// Memory Usage: 30.59% / 48.4 MB
const mergeKLists3 = (lists) => {
  // exception
  if (lists.length === 0) return null

  // function
  const mergeTwoLists = (list1, list2) => {
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

  const divide = (ptrS, ptrE) => {
    if (ptrE === ptrS) return lists[ptrS]
    if (ptrE === ptrS + 1) return mergeTwoLists(lists[ptrS], lists[ptrE])

    const ptrM = Math.floor((ptrS + ptrE) / 2)

    const part1 = divide(ptrS, ptrM)
    const part2 = divide(ptrM + 1, ptrE)

    return mergeTwoLists(part1, part2)
  }

  // run
  return divide(0, lists.length - 1)
}

// 4. ------------------------------------------------------------
// 同 3 ，改 loop
// T(n): O(nlogk)
// Runtime: 133 ms
// Memory Usage: 47.2 MB
const mergeKLists4 = (lists) => {
  // exception
  if (lists.length === 0) return null

  // function
  const mergeTwoLists = (list1, list2) => {
    if (!list1) return list2
    if (!list2) return list1

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

  // run
  const k = lists.length

  // O(logk)
  for (let interval = 1; interval < k; interval = interval * 2) {
    // O(n)
    for (let i = 0; i < k; i = i + interval * 2) {
      lists[i] = mergeTwoLists(lists[i], lists[i + interval])
    }
  }

  return lists[0] ?? null
}

// 5. ------------------------------------------------------------
// TODO: 找時間再練習一次 PQ
// from 1 改用 Priority Queue
// T(n): O(nlogk)
