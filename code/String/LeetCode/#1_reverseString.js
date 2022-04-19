// Write a function that reverses a string. The input string is given as an array of characters s.

// You must do this by modifying the input array in-place with O(1) extra memory.

// Example 1:
// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]

// Example 2:
// Input: s = ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]

// Constraints:
// 1 <= s.length <= 105
// s[i] is a printable ascii character.

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */

// Notice --------------------------------------------------------
// 1. 一樣是 Array

// 1. ------------------------------------------------------------
// Runtime: 83.40% / 93 ms
// Memory: 62.05% / 49.3 MB
const reverseString = (s) => {
  // var
  let ptr1 = 0
  let ptr2 = s.length - 1

  // function
  const swap = (arr, index1, index2) => {
    const temp = arr[index1]
    arr[index1] = arr[index2]
    arr[index2] = temp
  }

  // run
  while (ptr1 < ptr2) {
    swap(s, ptr1, ptr2)
    ptr1++
    ptr2--
  }
}
