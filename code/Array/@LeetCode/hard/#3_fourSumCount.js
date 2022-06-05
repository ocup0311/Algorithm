// Given four integer arrays nums1, nums2, nums3, and nums4 all of length n,
// return the number of tuples (i, j, k, l) such that:

// 0 <= i, j, k, l < n
// nums1[i] + nums2[j] + nums3[k] + nums4[l] == 0

// Example 1:
// Input: nums1 = [1,2], nums2 = [-2,-1], nums3 = [-1,2], nums4 = [0,2]
// Output: 2
// Explanation:
// The two tuples are:
// 1. (0, 0, 0, 1) -> nums1[0] + nums2[0] + nums3[0] + nums4[1] = 1 + (-2) + (-1) + 2 = 0
// 2. (1, 1, 0, 0) -> nums1[1] + nums2[1] + nums3[0] + nums4[0] = 2 + (-1) + (-1) + 0 = 0

// Example 2:
// Input: nums1 = [0], nums2 = [0], nums3 = [0], nums4 = [0]
// Output: 1

// Constraints:
// n == nums1.length
// n == nums2.length
// n == nums3.length
// n == nums4.length
// 1 <= n <= 200
// -2^28 <= nums1[i], nums2[i], nums3[i], nums4[i] <= 2^28

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */

// Notice --------------------------------------------------------

// 1. ------------------------------------------------------------
// 19 / 132 test cases passed.
const fourSumCount1 = (nums1, nums2, nums3, nums4) => {
  // function
  const merge = (arr1, arr2) => {
    return arr1.reduce((res, n1) => {
      arr2.forEach((n2) => res.push(n1 + n2))
      return res
    }, [])
  }

  // run
  const mergeNums1 = merge(nums1, nums2)
  const mergeNums2 = merge(nums3, nums4)

  return merge(mergeNums1, mergeNums2).filter((v) => v === 0).length
}

// 2. ------------------------------------------------------------
// Runtime: 12.00% / 812 ms
// Memory Usage: 28.80% / 48.3 MB
const fourSumCount2 = (nums1, nums2, nums3, nums4) => {
  // function
  const getCounter = (nums) => {
    const counter = new Map()

    for (const n of nums) {
      const count = counter.get(n)

      if (counter.has(n)) counter.set(n, count + 1)
      else counter.set(n, 1)
    }

    return counter
  }
  const getSums = (preSums, nums) => {
    const sums = new Map()

    preSums.forEach((preCount, n1) => {
      for (const n2 of nums) {
        const sum = n1 + n2
        const count = sums.get(sum)

        if (sums.has(sum)) sums.set(sum, preCount + count)
        else sums.set(sum, preCount)
      }
    })

    return sums
  }

  // run
  const sums1 = getCounter(nums1)
  const sums2 = getSums(sums1, nums2)
  const sums3 = getSums(sums2, nums3)
  const sums4 = getSums(sums3, nums4)

  return sums4.get(0) ?? 0
}

// 3. ------------------------------------------------------------
// clean from 2
// Runtime: 825 ms
// Memory Usage: 39 MB
const fourSumCount3 = (nums1, nums2, nums3, nums4) => {
  // function
  const getSums = (preSums, nums) => {
    const sums = new Map()

    preSums.forEach((preCount, n1) => {
      for (const n2 of nums) {
        const sum = n1 + n2
        const count = sums.get(sum)

        if (sums.has(sum)) sums.set(sum, preCount + count)
        else sums.set(sum, preCount)
      }
    })

    return sums
  }

  // run
  const sums0 = new Map([[0, 1]])
  const sums1 = getSums(sums0, nums1)
  const sums2 = getSums(sums1, nums2)
  const sums3 = getSums(sums2, nums3)
  const sums4 = getSums(sums3, nums4)

  return sums4.get(0) ?? 0
}

// 4. ------------------------------------------------------------
// Runtime: 91.20% / 213 ms
// Memory Usage: 30.40% / 48 MB
const fourSumCount = (nums1, nums2, nums3, nums4) => {
  // function
  const getSums = (preSums, nums) => {
    const sums = new Map()

    preSums.forEach((preCount, n1) => {
      for (const n2 of nums) {
        const sum = n1 + n2
        const count = sums.get(sum)

        if (sums.has(sum)) sums.set(sum, preCount + count)
        else sums.set(sum, preCount)
      }
    })

    return sums
  }

  // run
  let result = 0

  const sums0 = new Map([[0, 1]])
  const sums12 = getSums(getSums(sums0, nums1), nums2)
  const sums34 = getSums(getSums(sums0, nums3), nums4)

  sums34.forEach((count34, n1) => {
    const n2 = -n1
    const count12 = sums12.get(n2)

    if (sums12.has(n2)) result = result + count12 * count34
  })

  return result
}
