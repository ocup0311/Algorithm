// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

// Example 1:
// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].

// Example 2:
// Input: intervals = [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considered overlapping.

// Constraints:
// 1 <= intervals.length <= 10^4
// intervals[i].length == 2
// 0 <= starti <= endi <= 10^4

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */

// Notice --------------------------------------------------------
// 1. 把有重疊的範圍合併
// 2. 已經排序？ X --> 未排序

// 1. ------------------------------------------------------------
// Runtime: 96.91% / 91 ms
// Memory Usage: 55.53% / 49.1 MB
const merge = (intervals) => {
  if (intervals.length < 2) return intervals

  const sortedIntervals = [...intervals].sort((a, b) => a[0] - b[0])

  const result = [sortedIntervals[0]]

  for (let interval of sortedIntervals) {
    const [start, end] = result[result.length - 1]

    if (interval[0] > end) result.push(interval)
    else result[result.length - 1] = [start, Math.max(interval[1], end)]
  }

  return result
}
