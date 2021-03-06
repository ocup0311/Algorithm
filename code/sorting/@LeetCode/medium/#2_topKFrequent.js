// Given an integer array nums and an integer k, return the k most frequent elements.
// You may return the answer in any order.

// Example 1:
// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]

// Example 2:
// Input: nums = [1], k = 1
// Output: [1]

// Constraints:
// 1 <= nums.length <= 10^5
// k is in the range [1, the number of unique elements in the array].
// It is guaranteed that the answer is unique.

// Follow up: Your algorithm's time complexity must be better than O(n log n), where n is the array's size.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

// Notice --------------------------------------------------------
// 1. time 至少 O(nlogn)
// 2. 回傳前 k 個最常出現的項目
// 3. 不管順序
// 4. input 未排列

// 1. ------------------------------------------------------------
// Runtime: 88 ms
// Memory Usage: 44.4 MB
const topKFrequent1 = (nums, k) => {
  const count = nums.reduce((count, v) => {
    if (count[v]) count[v]++
    else count[v] = 1
    return count
  }, {})

  return Object.entries(count)
    .sort((a, b) => b[1] - a[1])
    .slice(0, k)
    .map((v) => v[0])
}

// 2. ------------------------------------------------------------
// Runtime: 102 ms
// Memory Usage: 46.8 MB
const topKFrequent2 = (nums, k) => {
  // function
  const makeFrequent = (count, v) => {
    const { byNum, byFreq } = count
    if (byNum[v]) byNum[v]++
    else byNum[v] = 1

    delete byFreq[byNum[v] - 1]?.[v]
    if (byFreq[byNum[v]]) byFreq[byNum[v]][v] = true
    else byFreq[byNum[v]] = { [v]: true }

    return count
  }

  // run
  const frequent = nums.reduce(makeFrequent, { byNum: {}, byFreq: [] }).byFreq
  const result = []
  let restK = k

  while (restK > 0) {
    const topFreqArr = Object.keys(frequent.pop())

    restK = restK - topFreqArr.length
    topFreqArr.forEach((v) => result.push(v))
  }

  return result
}

// 3. ------------------------------------------------------------
// Runtime: 76 ms
// Memory Usage: 45.3 MB
const topKFrequent3 = (nums, k) => {
  const bucket = new Array(nums.length + 1)
  const count = nums.reduce((count, v) => {
    if (count[v]) count[v]++
    else count[v] = 1
    return count
  }, {})

  Object.keys(count).forEach((v) => {
    bucket[count[v]] ? bucket[count[v]].push(v) : (bucket[count[v]] = [v])
  })

  const result = []
  const frequent = bucket.filter((v) => v)
  let restK = k

  while (restK > 0) {
    const topFreqArr = frequent.pop()

    restK = restK - topFreqArr.length
    topFreqArr.forEach((v) => result.push(v))
  }

  return result
}

// TEST1 --------------------------------------------
// 快 3 > 1 >> 2 慢 (約 2.5s : 3s : 6s)
const a1 = 99
const b1 = 50000
const arr1 = []
for (let i = 0; i < a1; i++) {
  for (let j = 0; j < b1; j++) {
    arr1.push(Math.round(Math.random() * j * a1))
  }
}
topKFrequent1(arr1, a1)

// TEST2 --------------------------------------------
// 快 2 > 3 >> 1 慢 (約 1.3s : 3s : 11s)
const a2 = 99
const b2 = 10000000
const input2 = []
const xx = new Array(a2).fill(3).concat(new Array(b2 - a2).fill(1))

for (let i = 0; i < b2; i++) {
  for (let j = 0; j < xx[i]; j++) {
    input2.push(i)
  }
}

topKFrequent1(input2, a2)
