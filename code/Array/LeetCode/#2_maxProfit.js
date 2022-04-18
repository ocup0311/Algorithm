// You are given an integer array prices where prices[i] is the price of a given stock on the ith day.

// On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of
// the stock at any time. However, you can buy it then immediately sell it on the same day.

// Find and return the maximum profit you can achieve.

// Example 1:
// Input: prices = [7,1,5,3,6,4]
// Output: 7
// Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
// Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
// Total profit is 4 + 3 = 7.

// Example 2:
// Input: prices = [1,2,3,4,5]
// Output: 4
// Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
// Total profit is 4.

// Example 3:
// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: There is no way to make a positive profit, so we never buy the stock to achieve the maximum profit of 0.

/**
 * @param {number[]} prices
 * @return {number}
 */

// Notice --------------------------------------------------------
// 1. 只能擁有一股

// 1. ------------------------------------------------------------
// Runtime: 82.66% / 67 ms
// Memory: 90.63% / 42.1 MB
const maxProfit1 = (prices) => {
  let earnedMoney = 0
  let own = false

  for (let i = 0; i < prices.length; i++) {
    if (own !== false) {
      if (prices[i] > prices[i + 1] || i === prices.length - 1) {
        const earned = prices[i] - own
        earnedMoney = earnedMoney + earned
        own = false
      }
    } else {
      if (prices[i] < prices[i + 1]) {
        own = prices[i]
      }
    }
  }

  return earnedMoney
}

// 2. ------------------------------------------------------------
// Runtime: 83.79% / 66 ms
// Memory: 18.20% / 42.8 MB
const maxProfit2 = (prices) => {
  // var
  let earnedMoney = 0
  let own = false

  // function
  const sell = (price) => {
    earnedMoney = earnedMoney + price - own
    own = false
  }
  const buy = (price) => {
    own = price
  }

  // run
  prices.forEach((v, i) => {
    if (own === false) {
      if (prices[i] < prices[i + 1]) buy(prices[i])
    } else {
      if (prices[i] > prices[i + 1] || i === prices.length - 1) sell(prices[i])
    }
  })

  return earnedMoney
}

// 3. ------------------------------------------------------------
// Runtime: 99.46% / 51 ms
// Memory: 75.58% / 42.2 MB
const maxProfit3 = (prices) => {
  let earnedMoney = 0

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < prices[i + 1])
      earnedMoney = earnedMoney + prices[i + 1] - prices[i]
  }

  return earnedMoney
}

// 4. ------------------------------------------------------------
// Runtime: 98.83% / 54 ms
// Memory: 75.58% / 42.2 MB
const maxProfit4 = (prices) =>
  prices.reduce((t, v, i, arr) => (arr[i + 1] > v ? t + arr[i + 1] - v : t), 0)

// 5. ------------------------------------------------------------
// Runtime: 91.21% / 62 ms
// Memory: 28.11% / 42.6 MB
const maxProfit5 = (prices) => {
  let earnedMoney = 0

  for (let i = 1; i < prices.length; i++) {
    const earned = prices[i] - prices[i - 1]

    if (earned > 0) earnedMoney = earnedMoney + earned
  }

  return earnedMoney
}
