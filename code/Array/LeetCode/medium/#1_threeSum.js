// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]]
// such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

// Example 1:
// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]

// Example 2:
// Input: nums = []
// Output: []

// Example 3:
// Input: nums = [0]
// Output: []

// Constraints:
// 0 <= nums.length <= 3000
// -10^5 <= nums[i] <= 10^5

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// Notice --------------------------------------------------------
// 1. 忽略重複的答案組合 (e.g. A: [-1,0,1] & A: [1,-1,0] 只算一個 A)
// 2. 可能有一樣的項目 (e.g. A: [-2,1,1])
// 3. 但一個項目只能用一次。 (e.g. Q: [1,0,-2,2],  A 不能是: [1,1,-2])

// 1. ------------------------------------------------------------
// Runtime: 9.52% / 2854 ms
// Memory: 6.51% / 74.9 MB
const threeSum1 = (() => {
  // function
  const twoSum = (nums, x, result, used) => {
    const pair = {}

    for (let i = 0; i < nums.length; i++) {
      const y = nums[i]
      const z = pair[y]

      if (z === 'used') continue
      if (used[y]) continue
      if (z === undefined) {
        pair[-x - y] = y
        continue
      }

      result.push([x, y, z])

      pair[y] = 'used'
      pair[z] = 'used'
    }
  }

  // main
  return (nums) => {
    const cloneNums = [...nums]
    const times = cloneNums.length - 2
    const result = []
    const used = {}

    // run
    for (let i = 0; i < times; i++) {
      const x = cloneNums.pop()

      if (!used[x]) {
        twoSum(cloneNums, x, result, used)
        used[x] = true
      }
    }

    return result
  }
})()

// 2. ------------------------------------------------------------
// Runtime: 86.45% / 140 ms
// Memory: 41.61% / 53.1 MB
const threeSum2 = (() => {
  // function
  const twoSum = (i, nums, result) => {
    let ptrL = i + 1
    let ptrR = nums.length - 1

    while (ptrL < ptrR) {
      const sum = nums[i] + nums[ptrL] + nums[ptrR]

      if (sum === 0) {
        result.push([nums[i], nums[ptrL], nums[ptrR]])

        while (nums[ptrL] === nums[ptrL + 1]) ptrL++
        while (nums[ptrR] === nums[ptrR - 1]) ptrR--

        ptrL++
        ptrR--
      } else if (sum < 0) {
        ptrL++
      } else {
        ptrR--
      }
    }
  }

  // main
  return (nums) => {
    const cloneNums = [...nums]
    const sortedNums = cloneNums.sort((a, b) => a - b)
    const times = cloneNums.length - 2
    const result = []

    for (let i = 0; i < times; i++) {
      if (sortedNums[i - 1] !== sortedNums[i]) {
        twoSum(i, sortedNums, result)
      }
    }

    return result
  }
})()

// 3. ------------------------------------------------------------
// Runtime: 20.53% / 559 ms
// Memory: 28.53% / 53.8 MB
// just modify hashMap: Object 3000ms --> new Map 500ms
const threeSum = (() => {
  // function
  const twoSum = (nums, x, result, used) => {
    const pair = new Map()

    for (let i = 0; i < nums.length; i++) {
      const y = nums[i]
      const z = pair.get(y)

      if (z === 'used') continue
      if (used.get(y)) continue
      if (z === undefined) {
        pair.set(-x - y, y)
        continue
      }

      result.push([x, y, z])

      pair.set(y, 'used')
      pair.set(z, 'used')
    }
  }

  // main
  return (nums) => {
    const cloneNums = [...nums]
    const times = cloneNums.length - 2
    const result = []
    const used = new Map()

    // run
    for (let i = 0; i < times; i++) {
      const x = cloneNums.pop()

      if (!used.get(x)) {
        twoSum(cloneNums, x, result, used)
        used.set(x, true)
      }
    }

    return result
  }
})()
