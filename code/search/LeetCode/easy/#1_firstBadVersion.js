// You are a product manager and currently leading a team to develop a new product.
// Unfortunately, the latest version of your product fails the quality check.
// Since each version is developed based on the previous version, all the versions
// after a bad version are also bad.

// Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one,
// which causes all the following ones to be bad.

// You are given an API bool isBadVersion(version) which returns whether version is bad.
// Implement a function to find the first bad version. You should minimize the number of calls to the API.

// Example 1:
// Input: n = 5, bad = 4
// Output: 4
// Explanation:
// call isBadVersion(3) -> false
// call isBadVersion(5) -> true
// call isBadVersion(4) -> true
// Then 4 is the first bad version.

// Example 2:
// Input: n = 1, bad = 1
// Output: 1

// Constraints:
// 1 <= bad <= n <= 2^31 - 1

/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */

// Notice --------------------------------------------------------
// 1. 花最少次數呼叫 isBadVersion
// 2. 最低版本為 1 ?

// 1. ------------------------------------------------------------
// Runtime: 80.40% / 63 ms
// Memory: 64.46% / 41.8 MB
const solution = (isBadVersion) => {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */

  return (n) => {
    let result = n
    let idxS = 1
    let idxE = n

    while (idxS <= idxE) {
      const idxM = Math.floor((idxS + idxE) / 2)

      if (isBadVersion(idxM)) {
        idxE = idxM - 1
        result = idxM
      } else {
        idxS = idxM + 1
      }
    }

    return result
  }
}
