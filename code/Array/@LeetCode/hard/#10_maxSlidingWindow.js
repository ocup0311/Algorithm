// You are given an array of integers nums, there is a sliding window of size k which is
// moving from the very left of the array to the very right. You can only see the k numbers
// in the window. Each time the sliding window moves right by one position.

// Return the max sliding window.

// Example 1:
// Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
// Output: [3,3,5,5,6,7]
// Explanation:
// Window position                Max
// ---------------               -----
// [1  3  -1] -3  5  3  6  7       3
//  1 [3  -1  -3] 5  3  6  7       3
//  1  3 [-1  -3  5] 3  6  7       5
//  1  3  -1 [-3  5  3] 6  7       5
//  1  3  -1  -3 [5  3  6] 7       6
//  1  3  -1  -3  5 [3  6  7]      7

// Example 2:
// Input: nums = [1], k = 1
// Output: [1]

// Constraints:
// 1 <= nums.length <= 10^5
// -10^4 <= nums[i] <= 10^4
// 1 <= k <= nums.length

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

// Notice --------------------------------------------------------

// 1. ------------------------------------------------------------
// TODO: 特殊技巧
// 「index大 && 數字大」一定確保比 「index小 && 數字小」優先
// Runtime: 24.17% / 1204 ms
// Memory Usage: 16.05% / 91.6 MB
const maxSlidingWindow1 = (nums, k) => {
  // exception
  if (k > nums.length) return []
  if (k * nums.length === 0) return []
  if (k === 1) return nums

  // var
  const candidate = []
  const result = []
  let [ptrS, ptrE] = [1 - k, 0]

  // function
  const cleanDeque = (ptrS, ptrE) => {
    const n = nums[ptrE]

    while (candidate.length > 0 && candidate[0] < ptrS) candidate.shift()
    while (candidate.length > 0 && nums[candidate.at(-1)] < n) candidate.pop()

    candidate.push(ptrE)
  }

  // run
  while (ptrE < nums.length) {
    cleanDeque(ptrS, ptrE)

    if (ptrS > -1) result.push(nums[candidate[0]])

    ptrS++
    ptrE++
  }

  return result
}

// 2. ------------------------------------------------------------
// shift --> ptr  (犧牲空間，換時間)
// Runtime: 86.11% / 415 ms
// Memory Usage: 95.22% / 75.9 MB
const maxSlidingWindow2 = (nums, k) => {
  // exception
  if (k > nums.length) return []
  if (k * nums.length === 0) return []
  if (k === 1) return nums

  // var
  const candidate = []
  const result = []
  let [ptr, ptrS, ptrE] = [0, 1 - k, 0]

  // function
  const cleanDeque = (ptrS, ptrE) => {
    const n = nums[ptrE]

    while (ptr < candidate.length && candidate[ptr] < ptrS) ptr++
    while (ptr < candidate.length && nums[candidate.at(-1)] < n) candidate.pop()

    candidate.push(ptrE)
  }

  // run
  while (ptrE < nums.length) {
    cleanDeque(ptrS, ptrE)

    if (ptrS > -1) result.push(nums[candidate[ptr]])

    ptrS++
    ptrE++
  }

  return result
}

// 3. ------------------------------------------------------------
// 實作 Dequeue
// Runtime: 90.17% / 387 ms
// Memory Usage: 27.68% / 89.5 MB
class Node {
  constructor(value) {
    this.value = value
    this.next = null
    this.prev = null
  }
}
class Dequeue {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
    this.first = null
    this.last = null
  }

  push(value) {
    if (this.length === 0) {
      const newNode = new Node(value)
      this.head = newNode
      this.first = this.head.value
      this.tail = newNode
      this.last = this.tail.value
      this.length = 1
      return
    }

    const newNode = new Node(value)
    newNode.prev = this.tail
    this.tail.next = newNode
    this.tail = newNode
    this.last = this.tail.value
    this.length++
  }

  pop() {
    if (this.length === 0) return
    if (this.length === 1) {
      this.head = null
      this.first = null
      this.tail = null
      this.last = null
      this.length = 0
      return
    }

    this.tail = this.tail.prev
    this.last = this.tail.value
    this.tail.next = null
    this.length--
  }

  shift() {
    if (this.length === 0) return
    if (this.length === 1) {
      this.head = null
      this.first = null
      this.tail = null
      this.last = null
      this.length = 0
      return
    }

    this.head = this.head.next
    this.first = this.head.value
    this.head.prev = null
    this.length--
  }
}

const maxSlidingWindow3 = (nums, k) => {
  // exception
  if (k > nums.length) return []
  if (k * nums.length === 0) return []
  if (k === 1) return nums

  // var
  const candidate = new Dequeue()
  const result = []
  let [ptrS, ptrE] = [1 - k, 0]

  // function
  const cleanDeque = (ptrS, ptrE) => {
    const n = nums[ptrE]

    while (candidate.length > 0 && candidate.first < ptrS) candidate.shift()
    while (candidate.length > 0 && nums[candidate.last] < n) candidate.pop()

    candidate.push(ptrE)
  }

  // run
  while (ptrE < nums.length) {
    cleanDeque(ptrS, ptrE)

    if (ptrS > -1) result.push(nums[candidate.first])

    ptrS++
    ptrE++
  }

  return result
}

// 4. ------------------------------------------------------------
// Dynamic Programming
//  nums:  2   5   4 | 6   3   5 | 8   7   6 | 3   7   4 | 6   4   5
//  left:  2   5   5 | 6   6   6 | 8   8   8 | 3   7   7 | 6   6   6
// right:          5   5   4 | 6   5   5 | 8   7   6 | 7   7   4 | 6   5   5
//   res:         5v5 6v5 6v4 6v6 8v5 8v5 8v8 3v7 7v6 7v7 6v7 6v4 6v6
//   res:          5   6   6   6   8   8   8   7   7   7   7   6   6
// Runtime: 468 ms
// Memory Usage: 72.5 MB
const maxSlidingWindow = (nums, k) => {
  const len = nums.length

  // exception
  if (k > len) return []
  if (k * len === 0) return []
  if (k === 1) return nums

  const result = new Array(len - k + 1)
  const left = new Array(len)
  const right = new Array(len)
  let [ptrS, ptrE] = [1, len - 2]

  left[0] = nums[0]
  right[len - 1] = nums[len - 1]

  while (ptrS < len) {
    const [nS, nE] = [nums[ptrS], nums[ptrE]]

    left[ptrS] = ptrS % k === 0 ? nS : Math.max(left[ptrS - 1], nS)
    right[ptrE] = (ptrE + 1) % k === 0 ? nE : Math.max(right[ptrE + 1], nE) // (ptrE + 1) % k 或 ptrE % k 都可？

    ptrS++
    ptrE--
  }

  for (let i = 0; i < result.length; i++) {
    result[i] = Math.max(left[i + k - 1], right[i])
  }

  return result
}
