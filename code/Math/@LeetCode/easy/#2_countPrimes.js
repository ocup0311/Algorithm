// Given an integer n, return the number of prime numbers that are strictly less than n.

// Example 1:
// Input: n = 10
// Output: 4
// Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.

// Example 2:
// Input: n = 0
// Output: 0

// Example 3:
// Input: n = 1
// Output: 0

// Constraints:
// 0 <= n <= 5 * 10^6

/**
 * @param {number} n
 * @return {number}
 */

// Notice --------------------------------------------------------
// 1. n 不計算入

// 1. ------------------------------------------------------------
// Time Limit Exceeded
// 19 / 66 test cases passed.
// Last executed input: 1500000
const cache1 = {}
const isPrime1 = (num) => {
  if (num !== Math.round(num) || num < 2) return false

  for (let n = 2; n <= Math.sqrt(num); n++) {
    if (num !== n) {
      if (num % n === 0) return false
    }
  }
  return true
}

const countPrimes1 = (n) => {
  if (n < 2) return 0
  if (cache1[n]) return cache1[n]

  let count = 0
  let idx = 2

  for (let i = n; i > 1; i--) {
    if (cache1[i]) {
      count = cache1[i]
      idx = i
      break
    }
  }

  for (let i = idx; i < n; i++) {
    cache1[i] = count
    if (isPrime1(i)) count++
  }

  return count
}

// 2. ------------------------------------------------------------
// Time Limit Exceeded
// 17 / 66 test cases passed.
// Last executed input: 499979
const cachePrime2 = {}
const cacheNthPrime2 = []
const cacheCount2 = []
const isPrime2 = (num) => {
  if (num !== Math.round(num) || num < 2) return false
  if (cachePrime2[num]) return true

  let nth = 0
  let tempNum = 2

  while (cacheNthPrime2[nth] <= Math.sqrt(num) && nth < cacheNthPrime2.length) {
    if (num % cacheNthPrime2[nth] === 0) return false
    tempNum = cacheNthPrime2[nth]
    nth++
  }

  while (tempNum <= Math.sqrt(num)) {
    if (isPrime2(tempNum)) {
      cacheNthPrime2.push(tempNum)
      cachePrime2[tempNum] = true
    }

    if (num % tempNum === 0) return false

    tempNum = tempNum + 2
  }

  cachePrime2[num] = true

  return true
}

const countPrimes2 = (n) => {
  if (n < 2) return 0
  if (cacheCount2[n]) return cacheCount2[n]

  let count = 0
  let idx = 2

  for (let i = n; i > 1; i--) {
    if (cacheCount2[i]) {
      count = cacheCount2[i]
      idx = i
      break
    }
  }

  for (let i = idx; i < n; i++) {
    cacheCount2[i] = count
    if (isPrime2(i)) count++
  }

  return count
}

// 3. ------------------------------------------------------------
// 一次將一批不是 Prime 的確定下來 (質數的倍數)
// Runtime: 66.48% / 496 ms
// Memory: 24.67% / 119.4 MB
const countPrimes3 = (n) => {
  // exception
  if (n < 3) return 0

  // var
  const upperBound = Math.floor(Math.sqrt(n - 1))
  const isPrimes = Array(n).fill(true)
  isPrimes[0] = false
  isPrimes[1] = false

  // run
  for (let num = 2; num <= upperBound; num++) {
    if (!isPrimes[num]) continue

    let multipleOfNum = num * num
    while (multipleOfNum < n) {
      isPrimes[multipleOfNum] = false
      multipleOfNum = multipleOfNum + num
    }
  }

  return isPrimes.filter((v) => v).length
}

// 4. ------------------------------------------------------------
// 改良方法 3，加上 cache
// Runtime: 95.29% / 247 ms
// Memory Usage: 9.98% / 146 MB
const countPrimes4 = (() => {
  // var
  let cache = []

  // function
  const makeResult = (arr, n) => {
    let count = 0

    for (let i = 0; i < n; i++) {
      if (arr[i]) count++
    }

    return count
  }

  // main
  return (n) => {
    // exception
    if (n < 3) return 0
    if (n <= cache.length) return makeResult(cache, n)

    // var
    const upperBound = Math.floor(Math.sqrt(n - 1))
    const isPrimes = cache.concat(new Array(n - cache.length).fill(true))
    isPrimes[0] = false
    isPrimes[1] = false

    // run
    for (let curNum = 2; curNum <= upperBound; curNum++) {
      if (!isPrimes[curNum]) continue

      let multipleOfNum =
        curNum * Math.max(Math.ceil(cache.length / curNum), curNum)

      while (multipleOfNum < n) {
        isPrimes[multipleOfNum] = false
        multipleOfNum = multipleOfNum + curNum
      }
    }

    cache = isPrimes

    return makeResult(isPrimes, n)
  }
})()
