// You are given an integer array coins representing coins of different denominations
// and an integer amount representing a total amount of money.

// Return the fewest number of coins that you need to make up that amount.
// If that amount of money cannot be made up by any combination of the coins, return -1.

// You may assume that you have an infinite number of each kind of coin.

// Example 1:
// Input: coins = [1,2,5], amount = 11
// Output: 3
// Explanation: 11 = 5 + 5 + 1

// Example 2:
// Input: coins = [2], amount = 3
// Output: -1

// Example 3:
// Input: coins = [1], amount = 0
// Output: 0

// Constraints:
// 1 <= coins.length <= 12
// 1 <= coins[i] <= 2^31 - 1
// 0 <= amount <= 10^4

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */

// Notice --------------------------------------------------------
// 1. 用最少硬幣數湊出金額
// 2. coins 是否已排序？ --> 沒排序

// 1. ------------------------------------------------------------
// fail: 可能 "大" 少一點，"中" 多一點，則 "小" 可以更少
// 93 / 188 test cases passed.
// Input: [186,419,83,408], 6249
// Output: 26
// Expected: 20
const coinChange1 = (coins, amount) => {
  // exception
  if (amount === 0) return 0

  // var
  const sortedCoins = [...coins].sort((a, b) => b - a)

  // function
  const makeCombination = (prevA, ptrC) => {
    const coin = sortedCoins[ptrC]
    let postA = prevA % coin
    let prevN = Math.floor(prevA / coin)

    if (postA === 0) return prevN
    if (ptrC === sortedCoins.length - 1) return -1

    while (prevN >= 0) {
      const postN = makeCombination(postA, ptrC + 1)

      if (postN > 0) return prevN + postN

      postA = postA + coin
      prevN--
    }

    return -1
  }

  // run
  return makeCombination(amount, 0)
}

// 2. ------------------------------------------------------------
// Runtime: 61.85% / 153 ms
// Memory Usage: 61.07% / 46.8 MB
const coinChange2 = (coins, amount, count = new Array(amount + 1).fill(0)) => {
  // exception
  if (amount < 0) return -1
  if (amount === 0 || count[amount]) return count[amount]

  // var
  let tmp = Infinity

  // run
  for (let coin of coins) {
    const result = coinChange2(coins, amount - coin, count)

    if (0 <= result && result < tmp) tmp = result + 1
  }

  count[amount] = tmp === Infinity ? -1 : tmp

  return count[amount]
}

// 3. ------------------------------------------------------------
// Runtime: 123 ms
// Memory Usage: 45.9 MB
const coinChange3 = (coins, amount) => {
  // exception
  if (amount === 0) return 0

  // var
  const count = new Array(amount + 1).fill(Infinity)
  count[0] = 0

  // run
  for (let curAmount = 1; curAmount <= amount; curAmount++) {
    for (let coin of coins) {
      if (curAmount < coin) continue

      const preAmount = curAmount - coin
      count[curAmount] = Math.min(count[curAmount], count[preAmount] + 1)
    }
  }

  return count[amount] === Infinity ? -1 : count[amount]
}

// 4. ------------------------------------------------------------
// Runtime: 164 ms
// Memory Usage: 46.2 MB
const coinChange4 = (coins, amount) => {
  // exception
  if (amount === 0) return 0

  // var
  const count = new Array(amount + 1).fill(Infinity)
  count[0] = 0

  // run
  for (let curAmount = 1; curAmount <= amount; curAmount++) {
    for (let coin of coins) {
      if (curAmount < coin) continue
      if (curAmount === coin) {
        count[curAmount] = 1
        break
      }

      const preAmount = curAmount - coin
      count[curAmount] = Math.min(count[curAmount], count[preAmount] + 1)
    }
  }

  return count[amount] === Infinity ? -1 : count[amount]
}
