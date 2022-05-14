// Write a function to delete a node in a singly-linked list. You will not be given
// access to the head of the list, instead you will be given access to the node to be deleted directly.

// It is guaranteed that the node to be deleted is not a tail node in the list.

// Example 1:
// Input: head = [4,5,1,9], node = 5
// Output: [4,1,9]
// Explanation: You are given the second node with value 5, the linked list should
// become 4 -> 1 -> 9 after calling your function.

// Example 2:
// Input: head = [4,5,1,9], node = 1
// Output: [4,5,9]
// Explanation: You are given the third node with value 1, the linked list should
// become 4 -> 5 -> 9 after calling your function.

// Constraints:
// The number of the nodes in the given list is in the range [2, 1000].
// -1000 <= Node.val <= 1000
// The value of each node in the list is unique.
// The node to be deleted is in the list and is not a tail node

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */

// Notice --------------------------------------------------------
// 1. 跟自己從頭寫不同，在他的條件下，達到目的 (此 code 並非完整的，需再加上他已有的部分)
// 2. 題目直接取得要刪除的 node
// 3. 可能得注意這樣的寫法，現實中有不好的影響，例如此題中 [A,B,C] del(B) 就無法 del(C) 了

// 1. ------------------------------------------------------------
const deleteNode = (node) => {
  node.val = node.next.val
  node.next = node.next.next
}
