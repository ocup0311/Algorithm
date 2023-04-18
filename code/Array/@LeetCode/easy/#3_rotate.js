// Given an array, rotate the array to the right by k steps, where k is non-negative.

// Example 1:
// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]

// Example 2:
// Input: nums = [-1,-100,3,99], k = 2
// Output: [3,99,-1,-100]
// Explanation:
// rotate 1 steps to the right: [99,-1,-100,3]
// rotate 2 steps to the right: [3,99,-1,-100]

// Constraints:
// 1 <= nums.length <= 10^5
// -231 <= nums[i] <= 231 - 1
// 0 <= k <= 10^5

// Follow up:
// Try to come up with as many solutions as you can. There are at least three different ways to solve this problem.
// Could you do it in-place with O(1) extra space?

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// Notice --------------------------------------------------------
// 1. k 可能比 nums 長度大

// 1. ------------------------------------------------------------
// Time Limit Exceeded
const solution1 = () => {
  const rotate = (nums, k) => {
    // var
    const lastIndex = nums.length - 1

    // function
    const swap = (arr, index1, index2) => {
      const temp = arr[index1]
      arr[index1] = arr[index2]
      arr[index2] = temp
    }

    // run
    for (let i = 0; i < k; i++) {
      for (let j = lastIndex; j > 0; j--) {
        swap(nums, j, j - 1)
      }
    }
  }
}

// 2. ------------------------------------------------------------
// Runtime: 88.39% / 93 ms
// Memory: 24.40% / 53.1 MB
const solution2 = () => {
  const rotate = (nums, k) => {
    // exception
    const modified_k = k % nums.length
    if (nums.length === 0 || modified_k === 0) return

    // var
    const idxNewHead = nums.length - modified_k
    const idxTail = nums.length - 1

    // function
    const reverse = (start, end) => {
      while (start < end) {
        const temp = nums[start]
        nums[start] = nums[end]
        nums[end] = temp
        start++
        end--
      }
    }

    // run
    reverse(0, idxNewHead - 1)
    reverse(idxNewHead, idxTail)
    reverse(0, idxTail)
  }
}

// 二刷補充 -------------------------------------
// Runtime: 28.77 % / 106 ms
// Memory Usage: 95.62 % / 50.7 MB
// T(n): O(n)
// S(n): O(n)
const solution1a = () => {
  const rotate = (nums, k) => {
    const len = nums.length
    const newNums = [...nums]

    for (let i = 0; i < len; i++) {
      let j = i - k
      while (j < 0) j = j + len

      nums[i] = newNums[j]
    }

    return
  }
}

// 未完成、失敗的方法
const solution2a = () => {
  const rotate = (nums, k) => {
    // exception
    let step = k % nums.length
    if (step === 0) return

    // function
    const swap = (arr, idx1, idx2) => {
      const tmp = arr[idx1]
      arr[idx1] = arr[idx2]
      arr[idx2] = tmp
    }

    let ptr1 = 0
    let ptr2 = 0
    const n = nums.length % 2 === 0 ? nums.length - 2 : nums.length - 1

    while (ptr1 < n) {
      if (ptr2 >= step) ptr2 = ptr1 + step > nums.length ? ptr2 - 1 : 0
      //console.log(nums)
      //console.log("ptr1:", ptr1, "ptr2:", ptr2, (ptr1 + step)%nums.length)
      swap(nums, ptr2, (ptr1 + step) % nums.length)

      ptr1++
      ptr2++
    }

    return
  }
}

// 整體拆成數個 cycle，單一 cycle 內，一個項目推動另一個。A 換到新位置 B 時，將 B 往新位置 C 推進，最後一個回到 A，此 cycle 結束。
// 而最多只會有 k 個 cycle，即可將所有項目移動完成 (count === n 時)，因此不會有重複移動的項目。
// start: 每個 cycle 的起點
// T(n): O(n)
// S(n): O(1)
const solution3a = () => {
  const rotate = (nums, k) => {
    const n = nums.length
    if (n === 0 || k <= 0 || k % n === 0) return

    let count = 0
    let start = 0
    let curNum = nums[0]

    while (count < n) {
      let ptr = start

      do {
        ptr = (ptr + k) % n

        const tmpNum = nums[ptr]
        nums[ptr] = curNum
        curNum = tmpNum

        count++
      } while (ptr !== start)

      start++
      curNum = nums[start]
    }
  }
}

// 從 rotate2 改版：
// 使用「圖形」方式思考，可看成是兩塊連接的方塊，最後結果是前後兩塊互換
// --> 先整體反轉可讓前後兩塊互換位置，再將方塊方向各自轉回正面
// T(n): O(n)
// S(n): O(1)
const solution4a = () => {
  const rotate = (nums, k) => {
    // var
    const idxNewHead = k % nums.length
    const idxArrEnd = nums.length - 1

    // exception
    if (idxArrEnd === 0 || idxNewHead <= 0) return

    // function
    const reverse = ([start, end]) => {
      while (start < end) {
        const temp = nums[start]
        nums[start] = nums[end]
        nums[end] = temp
        start++
        end--
      }
    }

    // run
    const wholeArr = [0, idxArrEnd]
    const frontArr = [0, idxNewHead - 1]
    const backArr = [idxNewHead, idxArrEnd]

    reverse(wholeArr)
    reverse(frontArr)
    reverse(backArr)
  }
}
