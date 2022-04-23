// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a
// different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any
// profit, return 0.

// Example 1:
// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

// Example 2:
// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.

// Constraints:
// 1 <= prices.length <= 10^5
// 0 <= prices[i] <= 10^4

/**
 * @param {number[]} prices
 * @return {number}
 */

// Notice --------------------------------------------------------
// 1. 只能買一次賣一次

// 1. ------------------------------------------------------------
// Runtime: 93.00% / 78 ms
// Memory: 74.72% / 51.6 MB
const maxProfit1 = (prices) => {
  let maxEarn = 0
  let maxPrice = 0

  for (let i = prices.length - 1; i >= 0; i--) {
    const price = prices[i]
    const earn = maxPrice - price

    if (earn < 0) maxPrice = price
    if (earn > maxEarn) maxEarn = earn
  }

  return maxEarn
}

// 1. ------------------------------------------------------------
// Runtime: 80.86% / 88 ms
// Memory: 49.83% / 51.9 MB
const maxProfit2 = (prices) => {
  let maxEarn = 0
  let minPrice = Infinity

  for (let i = 0; i < prices.length; i++) {
    const price = prices[i]
    const earn = price - minPrice

    if (earn < 0) minPrice = price
    if (earn > maxEarn) maxEarn = earn
  }

  return maxEarn
}
